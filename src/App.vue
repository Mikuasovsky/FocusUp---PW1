<!-- src/App.vue -->
<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #0f172a;   
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;      
}
</style>