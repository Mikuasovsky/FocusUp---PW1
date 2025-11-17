<template>
  <div class="home-container">
    <!-- Caso não esteja logado -->
    <div v-if="!userStore.isLoggedIn" class="landing">
      <h1 class="title">FocusUp</h1>
      <p class="subtitle">A tua app de estudo gamificada</p>
      <p class="description">
        Organiza disciplinas, regista sessões de estudo, sobe de nível e ganha recompensas!
      </p>
      
      <div class="actions">
        <router-link to="/login" class="btn btn-primary">Login</router-link>
        <router-link to="/register" class="btn btn-secondary">Criar conta</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

// Redireciona automaticamente se já estiver logado (melhor UX)
onMounted(() => {
  if (userStore.isLoggedIn) {
    router.push('/dashboard')
  }
})
</script>

<style scoped>
.home-container {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background:  #0f172a;
}

.title {
  font-size: 6rem;
  font-weight: bold;
  color: #42b883;
  margin-bottom: 1rem;
  text-shadow: 0 4px 10px rgba(66, 184, 131, 0.4);
}

.subtitle {
  font-size: 2rem;
  color: #94a3b8;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.3rem;
  max-width: 600px;
  color: #cbd5e1;
  margin-bottom: 3rem;
}

.actions {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  padding: 1rem 3rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}

.btn-primary {
  background-color: #42b883;
  color: white;
}

.btn-primary:hover {
  background-color: #3aa876;
  transform: translateY(-3px);
}

.btn-secondary {
  background-color: transparent;
  color: #42b883;
  border: 3px solid #42b883;
}

.btn-secondary:hover {
  background-color: #42b883;
  color: white;
}

.logged-in h2 {
  font-size: 3rem;
  color: #42b883;
}
</style>