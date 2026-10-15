
<template>
  <main class="about">
    <section class="hero">
      <p class="eyebrow">SOBRE GAMEUDL</p>
      <h1>Mucho más que<br />un <span>videojuego.</span></h1>
      <p class="description">
        GAMEUDL es un catálogo creado para descubrir videojuegos,
        explorar diferentes géneros y encontrar nuevas aventuras.
      </p>
    </section>

    <section class="info-grid">
      <article class="info-card">
        <h2>Descubre</h2>
        <p>Explora videojuegos de diferentes estilos y plataformas.</p>
      </article>

      <article class="info-card">
        <h2>Explora</h2>
        <p>Conoce nuevas propuestas y encuentra tu próxima aventura.</p>
      </article>

      <article class="info-card">
        <h2>Conecta</h2>
        <p>Un espacio para disfrutar y descubrir el universo gaming.</p>
      </article>
    </section>

    <p class="note">
      Proyecto académico desarrollado con Vue.js y Cloud Firestore.
    </p>
  </main>
</template>

<style scoped>
.about {
  min-height: 80vh;
  padding: 70px 9%;
  background: #10101b;
  color: white;
}

.hero {
  max-width: 750px;
  margin-bottom: 55px;
}

.eyebrow {
  color: #a78bfa;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 4px;
}

h1 {
  margin: 20px 0;
  font-size: clamp(42px, 7vw, 76px);
  line-height: 1.08;
  letter-spacing: -2px;
}

h1 span {
  color: #a78bfa;
}

.description {
  max-width: 600px;
  color: #b9b8ca;
  font-size: 17px;
  line-height: 1.8;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.info-card {
  padding: 25px;
  border: 1px solid #302746;
  border-radius: 12px;
  background: #191625;
}

.info-card h2 {
  color: #a78bfa;
  font-size: 20px;
}

.info-card p,
.note {
  color: #b9b8ca;
  line-height: 1.7;
}

.note {
  margin-top: 35px;
  font-size: 13px;
}

@media (max-width: 540px) {
  .about {
    padding: 45px 6%;
  }
}
</style>
