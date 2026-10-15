
<script setup>
defineProps({
  game: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="game-card">
    <img
      v-if="game.imagen"
      :src="game.imagen"
      :alt="game.titulo"
      class="game-image"
    />

    <div class="game-content">
      <p class="game-platform">{{ game.plataforma }}</p>
      <h2>{{ game.titulo }}</h2>
      <p class="game-genre">{{ game.genero }}</p>
      <p class="game-description">{{ game.descripcion }}</p>
    </div>
  </article>
</template>

<style scoped>
.game-card {
  overflow: hidden;
  border: 1px solid #302746;
  border-radius: 12px;
  background: #191625;
  transition: transform 0.2s, border-color 0.2s;
}

.game-card:hover {
  transform: translateY(-4px);
  border-color: #8b5cf6;
}

.game-image {
  display: block;
  width: 100%;
  height: 190px;
  object-fit: cover;
  background: #252037;
}

.game-content {
  padding: 20px;
}

.game-platform {
  color: #a78bfa;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.game-card h2 {
  margin: 10px 0;
  color: white;
  font-size: 21px;
}

.game-genre,
.game-description {
  color: #b9b8ca;
  line-height: 1.6;
}

.game-description {
  font-size: 14px;
}
</style>
