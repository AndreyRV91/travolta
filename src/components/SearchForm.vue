<template>
  <el-form
    label-position="top"
    ref="searchFormRef"
    :model="searchForm"
    :rules="rules"
    label-width="120px"
    status-icon
    class="search-form"
  >
    <el-row :gutter="20" justify-content="space-evenly" align-items="center">
      <el-col :span="4">
        <el-form-item label="Destination" prop="destination" required>
          <el-autocomplete
            v-model="searchForm.destination"
            :fetch-suggestions="querySearch"
            clearable
            @select="selectDestination"
          />
        </el-form-item>
      </el-col>

      <el-col :span="6">
        <el-form-item label="Check-in" prop="checkin" required>
          <el-date-picker
            v-model="searchForm.checkin"
            type="date"
            value-format="YYYY-MM-DD"
            style="width: 100%"
          /> </el-form-item
      ></el-col>

      <el-col :span="6">
        <el-form-item label="Check-out" prop="checkout" required>
          <el-date-picker
            v-model="searchForm.checkout"
            type="date"
            value-format="YYYY-MM-DD"
            style="width: 100%"
          /> </el-form-item
      ></el-col>

      <el-col :span="3">
        <el-form-item label="Adults" prop="adults">
          <el-input-number v-model="searchForm.adults" :min="1" /> </el-form-item
      ></el-col>

      <el-col :span="3">
        <el-form-item label="Children" prop="children">
          <el-input-number v-model="searchForm.children" :min="0" /> </el-form-item
      ></el-col>

      <el-col :span="2" class="submit-btn">
        <el-form-item>
          <el-button @click="submitForm(searchFormRef)"> Search </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { destinationsMock } from '@/components/__mocks__'
import { useRouter } from 'vue-router'

const router = useRouter()

const searchFormRef = ref<FormInstance>()
const searchForm = reactive({
  destination: '',
  destinationId: 0,
  checkin: '',
  checkout: '',
  adults: 1,
  children: 0
})

interface DestinationItem {
  id: number
  value: string
}

const rules = reactive<FormRules>({
  destination: [{ required: true, message: 'Please input destination', trigger: 'blur' }],
  checkin: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date'
    }
  ],
  checkout: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date'
    }
  ]
})

const destinations = ref<DestinationItem[]>([])
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? destinations.value.filter(createFilter(queryString))
    : destinations.value
  cb(results)
}

const createFilter = (queryString: string) => {
  return (destination: DestinationItem) => {
    return destination.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      sendFormData()
    } else {
      console.log('error search!', fields)
    }
  })
}

const sendFormData = async () => {
  const query = {
    dest_id: searchForm.destinationId,
    checkin: searchForm.checkin,
    checkout: searchForm.checkout,
    adults: searchForm.adults,
    children: searchForm.children
  }

  router.push({
    name: 'hotels',
    query
  })
}

const selectDestination = (item: DestinationItem) => {
  searchForm.destinationId = item.id
}

onMounted(() => {
  destinations.value = destinationsMock.map((destination) => ({
    value: destination.name,
    id: destination.id
  }))
})
</script>

<style scoped>
.submit-btn {
  align-self: end;
}

.search-form {
  width: auto;
}
.el-input-number {
  width: 100%;
}
</style>
