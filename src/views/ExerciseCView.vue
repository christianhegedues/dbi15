<script setup>
import UserInfo from "@/components/UserInfo.vue";
import supabase from "../supabase.js";
import { ref, onMounted, onBeforeUnmount } from "vue";

const loading = ref(false)
const data = ref([])
const userIPAddress = ref(null)
const subscription = ref(null)

async function getIPAddress() {
  const response = await fetch('https://api.db-ip.com/v2/free/self')
  const userData = await response.json()
  return userData.ipAddress
}

async function getLastNRows(n) {
  const { data } = await supabase.from('users')
    .select('ip_address')
    .order('created_at', { ascending: false })
    .limit(n)

  return data.reverse()
}

onMounted(async () => {
  loading.value = true
  userIPAddress.value = await getIPAddress() 

  /**
   * Check if the current IP is the last IP in row
   */
  const lastIPAddress = await getLastNRows(1)
  if (!lastIPAddress.length || lastIPAddress[0].ip_address != userIPAddress.value) {
    await supabase.from('users').insert([
      { ip_address: userIPAddress.value }
    ])
  }

  /**
   * Assign data and subscription
   */
  data.value = await getLastNRows(10)
  subscription.value = supabase.from('users').on('INSERT', (payload) => {
    data.value = payload.new.ip_address
  }).subscribe()

  loading.value = false
})

onBeforeUnmount(() => {
  supabase.removeSubscription(subscription.value)
})
</script>

<template>
  <section class="flex">
    <div class="flex-item">
      <strong>Reflektion</strong>
      <p>Da Github-Pages Content nur statisch ausliefert, muss ich zum
      Abgreifen der IP-Adresse auf einen Service zurückgreifen. Bei eigenem
      Webserver kann darauf verzichtet werden und man hat die
      Möglichkeit z.B. mit JSP die IP-Adresse abzufragen und global zu speichern:
      </p>
      <code>const ip = '&lt%=request.getRemoteHost();%&gt';</code>
      <p>Die nächsten Schritte ähneln denen aus Aufgabe 2. Sobald der Besucher
      die Seite betritt, wird die ermittelte IP-Adresse in einer Datenbank-Tabelle 
      gespeichert - es wird allerdings vorher geprüft, ob die letzte
      Zeile der Tabelle bereits die aktuelle IP-Adresse enthält, um Dopplungen
      zu vermeiden. Danach wird über WebSockets ein bidirktionaler Kanal zur
      Datenbank-Tabelle aufgebaut und auf Update-Events gehört.
      </p>
    </div>
    <div class="flex-item">
      <div class="ip">
        <p>Die letzten zehn Besucher:</p>
        <UserInfo v-if="!loading" :data="data.map((x) => x.ip_address)" />
        <span v-else>
          Daten werden geladen...
        </span>
      </div>
    </div>
  </section>
</template>

<style>
.flex {
  display: flex;
  gap: 1rem;
}

.flex-item:last-child {
  flex-basis: max-content;
  flex-shrink: 0;
}

.ip {
  padding: .75rem .5rem;
  background-color: #f1f1f1;
}
</style>

