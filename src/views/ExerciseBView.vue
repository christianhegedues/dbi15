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
  const { data } = await supabase.from('counter').select('count').eq('id', 3).single()
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
  <section class="exercise">
    <p><strong>Zähler browserübergriefend aktualisieren</strong></p>
    <Counter :count="count" @update:count="updateCount" />
    <p>Um einen Zähler über mehrere Browser hinweg aktuell zu halten, kommt man
    mit einer clientseitigen Umsetzung allein nicht weiter. Es braucht eine
    Datenbank, die den Wert des Zählers hält und eine wechselseitige Kommunikation
    zwischen Client und Server zum Beispiel über WebSockets. Um die Aufgabe zu 
    lösen, wurde auf den Service von <a href="https://supabase.com/" target="_blank">Supabase</a> 
    zurückgegriffen, der beides mit Einschränkungen kostenfrei anbietet.</p>

    <p>Bei Supabase wurde eine Datenbank-Tabelle angelegt, die den aktuellen
    Wert des Zählers persistiert. Danach wurde eine WebSockets-Verbindung
    eingerichtet, die bei einem Update-Event die aktualisierten Daten an den
    Client sendet.</p>
  </section>
</template>

