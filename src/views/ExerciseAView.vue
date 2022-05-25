<script setup>
import Counter from "@/components/Counter.vue";
import DateTime from "@/components/DateTime.vue";
import { ref, unref } from "vue";

const count = ref(0)
function updateCount(increase) {
  if (unref(count) === 0 && increase === -1) {
    return
  }

  count.value += increase
}
</script>

<template>
  <section class="exercise-a">
    <DateTime />
    <Counter :count="count" @update:count="updateCount" />
  </section>
</template>

