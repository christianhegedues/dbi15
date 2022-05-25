<script setup>
import Counter from "@/components/Counter.vue";
import supabase from "../supabase.js";
import { ref, onMounted, onBeforeUnmount } from "vue";

const subscription = ref(null)
const count = ref(0)

async function updateCount(increase) {
  await supabase.from('counter').upsert({ 
    id: 3,
    count: count.value + increase
  })
}

onMounted(async () => {
  const {data} = await supabase.from('counter').select('count').eq('id', 3).single()
  count.value = data.count

  subscription.value = supabase.from('counter').on('UPDATE', (payload) => {
    count.value = payload.new.count
  }).subscribe()
})

onBeforeUnmount(() => {
  supabase.removeSubscription(subscription.value)
})
</script>

<template>
  <section class="exercise-b">
    <Counter :count="count" @update:count="updateCount" />
  </section>
</template>

