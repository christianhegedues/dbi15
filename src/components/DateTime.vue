<script setup>
import Button from "@/components/Button.vue"
import { ref, unref, onMounted, onUnmounted } from "vue"

const showDateTime = ref(false)
const dateTime = ref('')

function toggleDateTime() {
  showDateTime.value = !unref(showDateTime)
}

let intervalId
onMounted(() => {
  intervalId = setInterval(() => {
    const date = new Date().toLocaleDateString('de-DE')
    const time = new Date().toLocaleTimeString('de-DE')
    dateTime.value = `${date}, ${time}`
  }, 1000);
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="datetime">
    <Button @click="toggleDateTime">Aktuelle Tageszeit</Button> 
    <span v-if="showDateTime">{{ dateTime }}</span>
  </div>
</template>

<style>
.datetime {
  display: flex;
  justify-content: space-between;
}
</style>

