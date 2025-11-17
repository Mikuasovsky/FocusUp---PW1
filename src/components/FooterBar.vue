<template>
  <footer class="footer">
    <div class="footer-content">
      © 2025 FocusUp – Programação Web I | ESMAD TSIW 2025-26
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  width: 100%;
  background: #0f172a;
  border-top: 4px solid #14b8a6;       
  color: #94a3b8;
  font-size: 0.9rem;
  text-align: center;
  padding: 1.5rem 0;
  position: relative;              
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
}

router-view {
  flex: 1;
}
</style>