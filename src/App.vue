<script setup>
import TheNavigation from "./components/TheNavigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <header>
      <TheNavigation />
    </header>
    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  margin: 0 auto;
  max-width: 768px;
}
</style>

