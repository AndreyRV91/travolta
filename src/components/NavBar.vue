<template>
  <nav class="menu">
    <router-link to="/">
      <img alt="logo" src="@/assets/logo.png" width="150" />
    </router-link>

    <ul class="menu__list">
      <li class="menu__item">
        <router-link to="/about">About us</router-link>
      </li>
      <li class="menu__item">
        <router-link to="/bookings">My bookings</router-link>
      </li>
      <li class="menu__item">
        <router-link to="/signin">Sign-in</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.menu__list {
  display: flex;
  gap: 30px;
}

.menu__item {
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
}

.menu__item:hover {
  color: var(color-primary);
}
</style>
