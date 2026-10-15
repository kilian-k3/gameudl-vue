
<template>
  <main class="home">
    <section class="hero">
      <p class="eyebrow">TU UNIVERSO GAMING</p>

      <h1>
        DESCUBRE TU<br />
        PRÓXIMA <span>AVENTURA.</span>
      </h1>

      <p class="description">
        Explora nuestro catálogo de videojuegos, descubre nuevas aventuras
        y encuentra tu próximo juego favorito.
      </p>

      <RouterLink to="/catalogo" class="button">
        Explorar catálogo →
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  padding: 60px 9%;
  background:
    radial-gradient(ellipse at 80% 40%, #35215f66, transparent 45%),
    #10101b;
  color: #fff;
}

.hero {
  max-width: 780px;
}

.eyebrow {
  color: #a78bfa;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 4px;
}

h1 {
  margin: 22px 0;
  font-size: clamp(42px, 7vw, 82px);
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: -3px;
}

h1 span {
  color: #a78bfa;
}

.description {
  max-width: 520px;
  color: #b9b8ca;
  font-size: 17px;
  line-height: 1.8;
}

.button {
  display: inline-block;
  margin-top: 24px;
  padding: 15px 24px;
  border-radius: 8px;
  background: #8b5cf6;
  color: white;
  text-decoration: none;
  font-weight: 700;
  transition: background 0.2s;
}

.button:hover {
  background: #a78bfa;
}
</style>
