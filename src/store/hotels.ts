import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Hotel, HotelsRequestBody } from '@/types'
import { fetchHotels } from '@/components/__mocks__'

export const useHotelStore = defineStore('hotels', () => {
  const hotels = ref<Hotel[]>([])

  const setHotels = async (payload: HotelsRequestBody) => {
    try {
      hotels.value = await fetchHotels(payload)
    } catch (error) {
      console.error(error)
    }
  }

  return { hotels, setHotels }
})
