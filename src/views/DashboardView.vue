<template>
  <div>
    <h1>Dashboard</h1>

    <section>
      <p><strong>Nível:</strong> {{ study.level }}</p>
      <p><strong>XP:</strong> {{ study.xp }}</p>
      <p><strong>Sessões de estudo:</strong> {{ study.sessions.length }}</p>
    </section>

    <button @click="study.addSession(25)">
      Estudar 25 minutos
    </button>

    <section v-if="motivation.quote" style="margin-top: 20px">
      <hr />
      <p><em>"{{ motivation.quote }}"</em></p>
      <p>— {{ motivation.author }}</p>
    </section>
  </div>
</template>

<script>
import { useStudyStore } from '../stores/studyStore'
import { useMotivationStore } from '../stores/motivationStore'

export default {
  name: 'DashboardView',

  computed: {
    study() {
      return useStudyStore()
    },
    motivation() {
      return useMotivationStore()
    }
  },

  mounted() {
    this.study.fetchSessions()
  }
}
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
