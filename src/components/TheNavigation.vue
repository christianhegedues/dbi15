<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navigation">
    <ul class="main-menu__list">
      <li>
        <RouterLink :to="'/'">
        {{ 'Home' }}
        </RouterLink>
      </li>
      <li v-for="i in 3" :key="i">
        <RouterLink :to="`/exercise/${i}`">
        {{ `Aufgabe ${i}` }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.navigation {
  padding: 0;
  margin-bottom: 1rem;
}

.main-menu__list {
  display: flex;
  gap: 1rem;

  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

