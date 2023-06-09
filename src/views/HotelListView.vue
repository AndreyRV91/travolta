<template>
  <el-row :gutter="20">
    <el-col :span="6"
      ><aside><FilterBox @set-filter="setFilter" /></aside
    ></el-col>
    <el-col :span="18">
      <HotelList v-if="hotels.length" :hotels="filteredHotels" />
      <div v-else>No hotels matching your search criteria</div>
    </el-col>
  </el-row>
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
  hotels.value.filter((hotel) => hotel.name.toLowerCase().includes(queryString.value.toLowerCase()))
)

const setFilter = (filter: string) => {
  queryString.value = filter
}
</script>

<style scoped></style>
