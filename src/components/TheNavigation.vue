<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navigation">
    <ul>
      <li v-for="i in 3" :key="i">
        <RouterLink :to="`/exercise/${i}`">
        {{ `Aufgabe ${i}` }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

