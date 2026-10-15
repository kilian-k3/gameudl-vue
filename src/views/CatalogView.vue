
<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import GameCard from '../components/GameCard.vue'

const games = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const snapshot = await getDocs(collection(db, 'videojocs'))

    games.value = snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }))
  } catch (err) {
    console.error('Error al cargar los videojuegos:', err)
    error.value = 'No se han podido cargar los videojuegos. Inténtalo más tarde.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main class="catalog">
    <section class="intro">
      <p class="eyebrow">GAMEUDL / EXPLORAR</p>
      <h1>Catálogo de <span>videojuegos</span></h1>
      <p>Encuentra tu próxima aventura.</p>
    </section>

    <p v-if="loading" class="message">Cargando videojuegos...</p>

    <p v-else-if="error" class="message error">
      {{ error }}
    </p>

    <p v-else-if="games.length === 0" class="message">
      Todavía no hay videojuegos en el catálogo.
    </p>

    <section v-else class="games-grid">
      <GameCard
        v-for="game in games"
        :key="game.id"
        :game="game"
      />
    </section>
  </main>
</template>

<style scoped>
.catalog {
  min-height: 75vh;
  padding: 60px 7%;
  background: #10101b;
  color: white;
}

.intro {
  margin-bottom: 40px;
}

.eyebrow {
  color: #a78bfa;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3px;
}

h1 {
  font-size: clamp(32px, 5vw, 52px);
  margin: 16px 0;
}

h1 span {
  color: #a78bfa;
}

.intro > p:last-child,
.message {
  color: #b9b8ca;
  line-height: 1.7;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.error {
  color: #ff8c8c;
}
</style>
