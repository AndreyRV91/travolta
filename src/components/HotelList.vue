<template>
  <HotelItem v-for="hotel of hotels" :key="hotel.id" :hotel="hotel" class="hotel-item" />
</template>

<script setup lang="ts">
import HotelItem from '@/components/HotelItem.vue'
import type { Hotel } from '@/types'

interface HotelListProps {
  hotels: Hotel[]
}

defineProps<HotelListProps>()
</script>

<style scoped>
.hotel-item {
  margin-bottom: 20px;
}
</style>
