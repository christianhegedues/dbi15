<script setup>
import Counter from "@/components/Counter.vue";
import { ref } from "vue";

const counter = ref(0)
</script>

<template>
  <section class="exercise-a">
    <Counter v-model:counter="counter" />
  </section>
</template>

