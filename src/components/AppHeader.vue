
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo">
      GAME<span>UDL</span>
    </RouterLink>

    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/catalogo">Catálogo</RouterLink>
      <RouterLink to="/acerca-de">Acerca de</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 22px 7%;
  border-bottom: 1px solid #25243a;
  background: #10101b;
}

.logo {
  color: #fff;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 1px;
  text-decoration: none;
}

.logo span {
  color: #9b7bff;
}

nav {
  display: flex;
  gap: 24px;
}

nav a {
  color: #b9b8ca;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

nav a:hover,
nav a.router-link-exact-active {
  color: #a78bfa;
}

@media (max-width: 540px) {
  .header {
    align-items: flex-start;
    flex-direction: column;
  }

  nav {
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style>
