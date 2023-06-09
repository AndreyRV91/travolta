<template>
  <el-card class="hotel-item">
    <el-row :gutter="20" class="hotel-item__wrapper">
      <el-col :span="7">
        <el-image
          src="https://cf.bstatic.com/xdata/images/hotel/square200/223031991.webp?k=83dd51293f7d9222f1c9cb65e2600ad6fa059ef59c0b9c7c7cc81e585e10f954&o="
        ></el-image
      ></el-col>
      <el-col :span="12">
        <div>
          <p class="hotel-item__descr_bold_large">{{ hotel.name }}</p>
          <p class="hotel-item__descr">{{ hotel.hotel_rating }}</p>
          <p class="hotel-item__descr">{{ hotel.address }}</p>
        </div>
      </el-col>
      <el-col :span="2">
        <el-button color="#ff00ff" class="hotel-item__btn" @click="showDetails">
          Show details
        </el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup lang="ts">
import type { Hotel } from '@/types'

interface HotelItemProps {
  hotel: Hotel
}

defineProps<HotelItemProps>()

const showDetails = () => {}
</script>

<style scoped>
.hotel-item {
  width: 100%;
}

.hotel-item__descr {
  margin-bottom: 5px;
}

.hotel-item__descr_bold {
  font-weight: 700;
}

.hotel-item__descr_bold_large {
  font-size: 20px;
}
.hotel-item__wrapper {
  align-items: center;
}

/* .hotel-item__btn {
  align-self: flex-start;
} */
</style>
