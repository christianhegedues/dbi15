<script setup>
import Button from "@/components/Button.vue";

defineProps({
  count: {
    type: Number,
    required: true
  }
})

defineEmits([
  'update:count'
])
</script>

<template>
  <div class="counter">
    <div class="button-group">
      <Button @click="$emit('update:count', 1)">
        <span>+</span>
      </Button>
      <Button @click="$emit('update:count', -1)" v-show="count > 0">
        <span>-</span>
      </Button>
    </div>
    <span>{{ count }}</span>
  </div>
</template>

<style>
.counter {
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #f1f1f1;
  padding: .75rem .5rem;
}

.button-group {
  display: flex;
  gap: .25rem;
}
</style>

