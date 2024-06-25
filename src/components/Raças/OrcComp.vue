<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Orc</div>
      </q-card-section>
      <q-card-section>
        <q-img src="~assets/racas/orc.jpg" style="max-height: 300px; max-width: 300px" />
      </q-card-section>
      <q-card-section>
        <div>
          <p><strong>Descrição:</strong> Os orcs são conhecidos por sua força bruta e resistência. Eles vivem em tribos e são guerreiros ferozes.</p>
          <p><strong>Características:</strong></p>
          <ul>
            <li>Força aumentada</li>
            <li>Resistência a venenos</li>
            <li>Visão no escuro</li>
          </ul>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Voltar" @click="voltar" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  methods: {
    voltar() {
      this.$router.push('/listaRacas');
    }
  }
};
</script>

<style scoped>
.q-pa-md {
  background-color: #e1c596;
}
</style>
