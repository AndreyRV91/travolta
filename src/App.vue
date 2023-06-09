<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <el-container class="container">
    <el-header>
      <nav class="menu-container">
        <RouterLink to="/" class="logo-container">
          <img alt="logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
          <span class="logo-text">TRAVOLTA</span>
        </RouterLink>

        <el-menu
          text-color="#fff"
          active-text-color="white"
          background-color="#545c64"
          mode="horizontal"
          :ellipsis="false"
        >
          <el-menu-item type="secondary" index="1"
            ><RouterLink to="/about">About us</RouterLink></el-menu-item
          >
          <el-menu-item index="2"><RouterLink to="/bookings">My bookings</RouterLink></el-menu-item>
          <el-menu-item index="3"><RouterLink to="/signin">Sign-in</RouterLink></el-menu-item>
        </el-menu>
      </nav>
    </el-header>
    <el-main
      ><el-row justify="center"
        ><el-col :span="18"><RouterView /></el-col></el-row
    ></el-main>
  </el-container>
</template>

<style scoped>
.container {
  background-color: var(--gray);
  min-height: 100vh;
  padding: 20px;
}

main {
  padding: 20px;
}

header {
  display: flex;
  justify-content: center;
}

.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.el-menu {
  border-bottom: 0;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 10px; /* Adjust the margin value as needed */
}

.logo-text {
  font-size: 20px; /* Adjust the font size as needed */
}
</style>
