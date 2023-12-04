<template>
  <el-card class="hotel-item" data-test-id="hotel-item">
    <el-row :gutter="20" class="hotel-item__wrapper">
      <el-col :span="7">
        <el-image
          lazy
          src="https://cf.bstatic.com/xdata/images/hotel/square200/223031991.webp?k=83dd51293f7d9222f1c9cb65e2600ad6fa059ef59c0b9c7c7cc81e585e10f954&o="
        ></el-image
      ></el-col>
      <el-col :span="12">
        <div>
          <p class="hotel-item__descr_bold_large">{{ hotel.name }}</p>
          <vue3-star-ratings
            v-model="stars"
            disable-click
            star-color="#bd00bd"
            inactive-color="#545c64"
            :star-size="18"
            :show-control="false"
          />
          <p>{{ hotel.address }}</p>
        </div>
      </el-col>
      <el-col :span="2">
        <el-button
          color="#bd00bd"
          class="hotel-item__btn"
          data-test-id="details-button"
          @click="showDetails"
        >
          Show details
        </el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup lang="ts">
import type { Hotel } from '@/types'
import { ref } from 'vue'

export interface HotelItemProps {
  hotel: Hotel
}

const props = defineProps<HotelItemProps>()
const stars = ref(props.hotel.hotel_rating)

const showDetails = () => {}
</script>

<style scoped>
.hotel-item {
  width: 100%;
}

.hotel-item__descr_bold_large {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 7px;
}
.hotel-item__wrapper {
  align-items: center;
}
</style>
