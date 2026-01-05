import { defineStore } from 'pinia'
import * as api from '../api/api'
import { useMotivationStore } from './motivationStore'

export const useStudyStore = defineStore('study', {
  state: () => ({
    sessions: [],
    xp: 0,
    level: 1
  }),

  actions: {
    async fetchSessions() {
      this.sessions = await api.get('studySessions')
    },

    async addSession(minutes) {
      await api.post('studySessions', { minutes })

      this.sessions.push({ minutes })

      const previousLevel = this.level

      this.xp += 50

      if (this.xp >= this.level * 100) {
        this.level++
      }

      if (this.level > previousLevel) {
        const motivationStore = useMotivationStore()
        motivationStore.fetchQuote()
      }
    }
  }
})
