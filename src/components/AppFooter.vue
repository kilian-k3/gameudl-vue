
<template>
  <footer class="footer">
    <p class="logo">GAME<span>UDL</span></p>
    <p>Descubre tu próxima aventura.</p>
    <p class="copyright">
      © {{ new Date().getFullYear() }} GAMEUDL · Projecte acadèmic
    </p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 35px 7%;
  border-top: 1px solid #302746;
  background: #10101b;
  text-align: center;
}

.logo {
  margin: 0 0 10px;
  color: white;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 1px;
}

.logo span {
  color: #a78bfa;
}

.footer p {
  color: #b9b8ca;
}

.footer .copyright {
  margin-top: 22px;
  font-size: 12px;
  color: #777489;
}
</style>
