<template>
  <ul ref="scrollComponent" data-test-id="hotel-list">
    <li class="hotel-item" v-for="hotel of hotelsChunk" :key="hotel.id">
      <HotelItem :hotel="hotel" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import HotelItem from '@/components/HotelItem.vue'
import type { Hotel } from '@/types'
import { useEventListener } from '@vueuse/core'
import { ref, watch } from 'vue'

export interface HotelListProps {
  hotels: Hotel[]
}

const CHUNK_SIZE = 10

const props = defineProps<HotelListProps>()

const scrollComponent = ref<HTMLElement | null>(null)
const hotelsChunk = ref(props.hotels.slice(0, CHUNK_SIZE))

const getHotelsOnScroll = () => {
  let element = scrollComponent.value

  if (element && element.getBoundingClientRect().bottom < window.innerHeight) {
    const startIndex = hotelsChunk.value.length
    const endIndex = startIndex + CHUNK_SIZE
    const moreData = props.hotels.slice(startIndex, endIndex)
    hotelsChunk.value.push(...moreData)
  }
}

watch(
  () => props.hotels,
  () => {
    hotelsChunk.value = [...props.hotels.slice(0, CHUNK_SIZE)]
  }
)

useEventListener(window, 'scroll', getHotelsOnScroll)
</script>

<style scoped>
.hotel-item {
  list-style-type: none;
  margin-bottom: 20px;
}
</style>
