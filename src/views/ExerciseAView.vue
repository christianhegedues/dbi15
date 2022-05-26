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
  <article>
    <section class="exercise">
      <p><strong>Anzeigen der Uhrzeit:</strong></p>
      <DateTime />
      <p>Das Anzeigen der aktuellen Uhrzeit ist clientseitig umgesetzt. Dabei 
      greift eine JavaScript-Funktion die Uhrzeit des Nutzers ab und gibt diese
      beim Klick auf den Button formatiert zurück. Zusätzlich läuft ein 
      Interval, was die Uhrzeit im Sekundentakt aktualisiert.</p>
    </section>
    <section>
      <p><strong>Inkrementieren eines Zählers</strong></p>
      <Counter :count="count" @update:count="updateCount" />
      <p>Das Inkrementieren des Zählers ist clientseitig möglich. Das Hoch- oder
      Herunterzählen erfolgt über JavaScript. Da der Wert des Zählers nicht 
      anwendungsweit oder sogar über Sitzungen hinweg gehalten werden muss, ist
      Statemanagement, in welcher Form auch immer, nicht nötig.</p>
      <p>Um die benutzerfrundlichkeit zu steigern, ist ein Unterschreiten des
      Zählers kleiner Null, nicht möglich. Zudem werden mehrere Klicks zu einem
      über Throttling zusammengeführt.</p>
    </section>
  </article>
</template>

