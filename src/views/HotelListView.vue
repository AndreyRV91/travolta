<template>
  <div v-if="hotels.length">
    <el-row :gutter="20">
      <el-col :span="6"><FilterBox @set-filter="setFilter" /></el-col>
      <el-col :span="18"><HotelList :hotels="filteredHotels" /></el-col>
    </el-row>
  </div>
  <div v-else>No hotels matching your search criteria</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import FilterBox from '@/components/FilterBox.vue'
import HotelList from '@/components/HotelList.vue'
import { useHotelStore } from '@/store/hotels'
import { computed, ref } from 'vue'

const hotelStore = useHotelStore()
const { hotels } = storeToRefs(hotelStore)

const queryString = ref('')
const filteredHotels = computed(() =>
  hotels.value.filter(
    (hotel) => hotel.name.toLowerCase().indexOf(queryString.value.toLowerCase()) === 0
  )
)

const setFilter = (filter: string) => {
  queryString.value = filter
}
</script>

<style scoped></style>
