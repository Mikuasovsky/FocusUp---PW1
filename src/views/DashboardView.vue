<template>
  <div class="dashboard">

    <h1>Bem-vindo, {{ userStore.currentUser?.name }}!</h1>

    <div class="stats">
      <div class="card">
        <h3>Nível</h3>
        <p class="big">{{ userStore.level }}</p>
      </div>
      <div class="card">
        <h3>XP Total</h3>
        <p class="big">{{ userStore.currentUser?.xp || 0 }}</p>
      </div>
      <div class="card">
        <h3>Próximo nível em</h3>
        <p class="big">{{ userStore.xpForNextLevel }} XP</p>
        <progress class="progress" :value="userStore.xpInLevel || 0" max="200"></progress>
        <p class="xp-text"> {{ userStore.xpInLevel || 0 }} / 200 XP </p>
      </div>
      
    </div>

    <button @click="userStore.addXp(50)" class="study-btn">
      Estudei 25 min! (+50 XP)
    </button>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

if (userStore.xpInLevel === 200){
  alert('Parabéns, subiu de nível 🥳')
}
</script>

<style scoped>
.dashboard { text-align: center; padding: 2rem; }
.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin: 3rem 0; }
.card {
  background: #0f172a;
  padding: 2rem;
  border-radius: 1rem;
  border: 2px solid #14b8a6;
}
.big { font-size: 4rem; color: #42b883; margin: 1rem 0; }
.study-btn {
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}
.study-btn:hover { background: #3aa876; }
</style>