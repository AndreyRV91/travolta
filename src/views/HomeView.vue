<template>
  <div class="about">
    <SearchForm />
    <h1>Travel With <span class="text-pink">TRAVOLTA</span></h1>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nemo iusto distinctio debitis sint
    accusantium culpa modi praesentium odit hic alias libero nulla ut eaque cupiditate, provident
    officiis, tenetur ducimus.
  </div>
</template>

<script setup lang="ts">
import SearchForm from '../components/SearchForm.vue'
</script>

<style>
.text-pink {
  color: var(--raspberry_pink_light);
  font-weight: inherit;
}

h1 {
  font-weight: 700;
}
</style>
