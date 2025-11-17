<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/" class="title">FocusUp</router-link>
    </div>

    <div class="nav-links">
      <!-- Quando NÃO está logado -->
      <template v-if="!userStore.isLoggedIn">
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Registo</router-link>
      </template>

      <!-- Quando ESTÁ logado -->
      <template v-else>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/subjects">Disciplinas</router-link>
        <a href="#" @click.prevent="userStore.logout(); router.push('/login')">Sair</a>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
</script>

<style scoped>
.navbar {
  background: #0f172a;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid #14b8a6;
}

.logo .title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #42b883;
  text-decoration: none;
  text-shadow: 0 4px 10px rgba(66, 184, 131, 0.4);
}

.nav-links a {
  color: white;
  text-decoration: none;
  margin-left: 2rem;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
}

.nav-links a:hover {
  background: #42b883;
  color: white;
}

.nav-links a.router-link-active {
  background: #42b883;
  font-weight: bold;
}
</style>