<template>
  <div class="focusuplogin">
    <h1 class="title">FocusUp</h1>
    <div class="form-container">
    <h1>Login</h1>
    <form @submit.prevent="fazerLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Entrar</button>
    </form>
    <p>Não tens conta? <router-link to="/register" class="register">Regista-te</router-link></p>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const email = ref('')
const password = ref('')
const router = useRouter()
const userStore = useUserStore()

const fazerLogin = async () => {
  const sucesso = await userStore.login(email.value, password.value)
  if (sucesso) router.push('/dashboard')
  else alert('Credenciais erradas!')
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background: #1e293b;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  margin-top: 100px;
  text-align: center;
}
input {
  background: #334155;
  color: white;
  width: 82%;
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
  width: 90%;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  border: none;
}
button:hover { background: #3aa876; }

.title {
  font-size: 6rem;
  font-weight: bold;
  color: #42b883;
  text-shadow: 0 4px 10px rgba(66, 184, 131, 0.4);
  display: flex;
  justify-content: center;
  margin-top: 160px;
}

.register{
  color: #42b883;
}

h1{
  font-size: 2rem;
}

.focusuplogin{
  margin-bottom: 140px;
}
</style>