<template>
  <el-form
    label-position="top"
    ref="searchFormRef"
    :model="searchForm"
    :rules="rules"
    label-width="120px"
    status-icon
    @submit.prevent="submitForm(searchFormRef)"
  >
    <el-row :gutter="10" justify="center" align-items="center">
      <el-col :span="20" :lg="6" :xs="24">
        <el-form-item
          label="Destination"
          prop="destination"
          size="large"
          required
          data-test-id="search-destination"
        >
          <el-autocomplete
            v-model="searchForm.destination"
            :fetch-suggestions="querySearch"
            class="destination"
            clearable
          />
        </el-form-item>
      </el-col>

      <el-col :span="10" :lg="3" :xs="12">
        <el-form-item
          label="Check-in"
          prop="checkin"
          required
          size="large"
          data-test-id="search-checkin"
        >
          <el-date-picker
            v-model="searchForm.checkin"
            type="date"
            value-format="YYYY-MM-DD"
            format="YYYY-MM-DD"
            class="date-picker"
            :disabled-date="disabledCheckIn"
          /> </el-form-item
      ></el-col>

      <el-col :span="10" :lg="3" :xs="12">
        <el-form-item
          label="Check-out"
          prop="checkout"
          required
          size="large"
          data-test-id="search-checkout"
        >
          <el-date-picker
            v-model="searchForm.checkout"
            type="date"
            value-format="YYYY-MM-DD"
            format="YYYY-MM-DD"
            class="date-picker"
            :disabled-date="disabledCheckOut"
          /> </el-form-item
      ></el-col>

      <el-col :span="8" :lg="3" :xs="9">
        <el-form-item label="Adults" prop="adults" size="large">
          <el-input-number v-model="searchForm.adults" :min="1" /> </el-form-item
      ></el-col>

      <el-col :span="8" :lg="3" :xs="9">
        <el-form-item label="Children" prop="children" size="large">
          <el-input-number v-model="searchForm.children" :min="0" /> </el-form-item
      ></el-col>

      <el-col :span="4" :lg="3" :xs="6" class="submit-btn">
        <el-form-item data-test-id="submit-button" size="large">
          <el-button color="#bd00bd" native-type="submit"> Search </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
  <div class="warning">{{ noHotelsFound ? 'No hotels matching your search criteria' : '' }}</div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { destinationsMock } from '@/components/__mocks__'
import { useHotelStore } from '@/store/hotels'

interface DestinationItem {
  id: number
  value: string
}

const router = useRouter()
const hotelStore = useHotelStore()
const { setHotels } = hotelStore
const { hotels } = storeToRefs(hotelStore)

const searchFormRef = ref<FormInstance>()
const searchForm = reactive({
  destination: '',
  checkin: '',
  checkout: '',
  adults: 1,
  children: 0
})

const noHotelsFound = ref(false)

const disabledCheckIn = (time: any) => {
  return time.getTime() <= new Date(Date.now() - 24 * 60 * 60 * 1000)
}

const disabledCheckOut = (time: any) => {
  return time.getTime() < new Date(searchForm.checkin).getTime()
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
  const payload = {
    destination: searchForm.destination,
    checkin: searchForm.checkin,
    checkout: searchForm.checkout,
    adults: searchForm.adults,
    children: searchForm.children
  }

  await setHotels(payload)

  if (!hotels.value.length) {
    noHotelsFound.value = true
    return
  }

  noHotelsFound.value = false
  router.push({
    name: 'hotels'
  })
}

watch(searchForm, () => {
  noHotelsFound.value = false
})

watch(
  () => searchForm.checkin,
  () => {
    if (new Date(searchForm.checkout).getTime() < new Date(searchForm.checkin).getTime()) {
      searchForm.checkout = ''
    }
  }
)

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

.el-button {
  font-size: 18px;
  width: 100%;
}

.el-input-number {
  width: 100%;
}

:deep(.el-autocomplete) {
  width: 100%;
  /* TODO: find out why there is gap between label and autocomplete input. Remove margin */
  margin-top: -1.5px;
}

:deep(.date-picker) {
  width: 100% !important;
}

.warning {
  height: 10px;
  margin-bottom: 20px;
}
</style>
