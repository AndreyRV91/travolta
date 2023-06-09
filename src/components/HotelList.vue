<template>
  <ul ref="scrollComponent">
    <li class="hotel-item" v-for="hotel of hotelsChunk" :key="hotel.id">
      <HotelItem :hotel="hotel" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import HotelItem from '@/components/HotelItem.vue'
import type { Hotel } from '@/types'
import { useEventListener } from '@vueuse/core'
import { ref } from 'vue'

interface HotelListProps {
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

useEventListener(window, 'scroll', getHotelsOnScroll)
</script>

<style scoped>
.hotel-item {
  list-style-type: none;
  margin-bottom: 20px;
}
</style>
