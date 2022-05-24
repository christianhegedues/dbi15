<script setup>
import Button from "@/components/Button.vue";
import { ref } from 'vue'

defineProps({
  counter: {
    type: Number,
    required: true
  }
})

defineEmits([
  'update:counter'
])
</script>

<template>
  <div class="counter">
    <div class="button-group">
      <Button @click="$emit('update:counter', counter += 1)">
        <span>+</span>
      </Button>
      <Button @click="$emit('update:counter', counter > 1 ? counter -= 1 : 0)">
        <span>-</span>
      </Button>
    </div>
    <span>{{ counter }}</span>
  </div>
</template>

<style>
.counter {
  display: flex;
  justify-content: space-between;
}

.button-group {
  display: flex;
  gap: .25rem;
}
</style>

