<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <el-main
      ><el-row justify="center"
        ><el-col :span="20" :xs="24"><router-view /></el-col></el-row
    ></el-main>
  </el-container>
</template>

<style scoped>
.el-container {
  background-color: var(--gray);
  min-height: 100vh;
}

@media (max-width: 768px) {
  .el-main {
    padding: 10px;
  }
}
</style>
