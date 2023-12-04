<template>
  <div>
    <SearchForm class="search-form" />
    <h1>Travel With <span class="text-pink">TRAVOLTA</span></h1>
    TRAVOLTA's superpower lies in its ability to find the best deals on flights, accommodations, and
    activities, ensuring that you get the most value for your money. Need a flight that won't cost
    an arm and a leg? TRAVOLTA has got you covered. Seeking cozy accommodations that won't drain
    your savings? TRAVOLTA will make it happen.
  </div>
</template>

<script setup lang="ts">
import SearchForm from '../components/SearchForm.vue'
</script>

<style>
.text-pink {
  color: var(--color-primary);
  font-weight: inherit;
}

h1 {
  font-weight: 700;
}

.search-form {
  margin-bottom: 20px;
}
</style>
