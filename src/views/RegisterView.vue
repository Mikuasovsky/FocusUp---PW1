<!-- src/views/RegisterView.vue -->
<template>
  <div class="focusuplogin">
    <h1 class="title">FocusUp</h1>
    <div class="register-container">
    <h1>Criar Conta</h1>
    <form @submit.prevent="fazerRegisto">
      <input v-model="name" type="text" placeholder="Nome completo" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit" :disabled="loading">
        {{ loading ? 'A criar conta...' : 'Registar' }}
      </button>
    </form>
    <p>Já tens conta? <router-link to="/login">Faz login</router-link></p>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const name = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const router = useRouter()
const userStore = useUserStore()

const fazerRegisto = async () => {
  loading.value = true
  try {
    await userStore.register({
      name: name.value,
      email: email.value,
      password: password.value
    })
    router.push('/dashboard')
  } catch {
    alert('Erro ao registar. Tenta outro email.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 4rem auto;
  padding: 2.5rem;
  background: #1e293b;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.6);
  text-align: center;
  margin-top: 90px;
}

h1 {
  font-size: 2rem;
  padding-bottom: 20px;
  
}

button {
  width: 100%;
  padding: 1rem;
  margin: 0.8rem 0;
  border-radius: 0.8rem;
  border: none;
  font-size: 1.1rem;
}

input {
  background: #334155;
  color: white;
  width: 92%;
  padding: 1rem;
  margin: 0.8rem 0;
  border-radius: 0.8rem;
  border: none;
  font-size: 1.1rem;
}

input::placeholder {
  color: #94a3b8;
}

button {
  background: #42b883;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover:not(:disabled) {
  background: #3aa876;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

p {
  margin-top: 2rem;
  color: #cbd5e1;
}

a {
  color: #42b883;
  font-weight: bold;
}

.title {
  font-size: 6rem;
  font-weight: bold;
  color: #42b883;
  text-shadow: 0 4px 10px rgba(66, 184, 131, 0.4);
  display: flex;
  justify-content: center;
  margin-top: 160px;
}
.focusuplogin{
  margin-bottom: 120px;
}
</style>