<script setup>
defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul class="user-info">
    <li v-for="(item, index) in data" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<style>
.user-info {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>

