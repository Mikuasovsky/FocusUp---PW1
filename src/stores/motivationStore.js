import { defineStore } from 'pinia'

export const useMotivationStore = defineStore('motivation', {
  state: () => ({
    quote: null,
    author: null
  }),

  actions: {
    async fetchQuote() {
      const res = await fetch('https://zenquotes.io/api/random')
      const data = await res.json()

      this.quote = data[0].q
      this.author = data[0].a
    }
  }
})
