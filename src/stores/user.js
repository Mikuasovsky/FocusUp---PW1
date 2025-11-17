import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null
  }),

  getters: {
    isLoggedIn: (state) => !!state.currentUser,
    level: (state) => state.currentUser ? Math.floor(state.currentUser.xp / 200) + 1 : 1,
    xpInLevel: (state) => state.currentUser ? state.currentUser.xp % 200 : 0
  },

  actions: {
    async register(userData) {
      // Verifica se email já existe
      const check = await fetch(`http://localhost:3001/users?email=${userData.email}`)
      const existing = await check.json()
      if (existing.length > 0) throw new Error('Este email já está registado!')

      const res = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userData, xp: 0 })
      })

      if (!res.ok) throw new Error('Erro no servidor')
      
      const user = await res.json()
      this.currentUser = user
      localStorage.setItem('userId', user.id)
    },

    async login(email, password) {
      const res = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
      const users = await res.json()
      
      if (users.length === 0) return false

      this.currentUser = users[0]
      localStorage.setItem('userId', users[0].id)
      return true
    },

    logout() {
      this.currentUser = null
      localStorage.removeItem('userId')
    },

    async addXp(amount) {
      if (!this.currentUser) return

      const oldLevel = Math.floor(this.currentUser.xp / 200) + 1

      this.currentUser.xp += amount
  
      const newLevel = Math.floor(this.currentUser.xp / 200) + 1

      if (newLevel > oldLevel) {
        setTimeout(() => {

          const div = document.createElement('div')
          div.innerHTML = `
            <div style="text-align:center">
              <h2>PARABÉNS!</h2>
              <p style="font-size:2.5rem;margin:1rem 0">Subiste para o nível ${newLevel}!</p>
              <p>Continua assim!</p>
            </div>
          `
          Object.assign(div.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            background: 'rgba(0,0,0,0.9)',
            padding: '2rem',
            borderRadius: '1rem',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif'
          })
          document.body.appendChild(div)
          setTimeout(() => div.remove(), 4000)
        }, 100)
      }

  // Guarda no json-server
      await fetch(`http://localhost:3001/users/${this.currentUser.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ xp: this.currentUser.xp })
      })
    }
  }
})