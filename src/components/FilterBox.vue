<template>
  <el-card>
    <div class="title">Filter Box</div>
    <div>Find by hotel name</div>
    <el-input v-model="filter" />
  </el-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const filter = ref('')

const emit = defineEmits<{
  (event: 'set-filter', payload: string): void
}>()

watch(filter, () => {
  emit('set-filter', filter.value)
})
</script>

<style scoped>
.title {
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
