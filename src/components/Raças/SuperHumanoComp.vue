<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Super-Humano</div>
      </q-card-section>
      <q-card-section>
        <q-img src="~assets/racas/super_humano.jpg" style="max-height: 300px; max-width: 300px" />
      </q-card-section>
      <q-card-section>
        <div>
          <p><strong>Descrição:</strong> Os Super-Humanos são humanos que, através de experimentos ou habilidades inatas, possuem capacidades físicas e mentais superiores.</p>
          <p><strong>Características:</strong></p>
          <ul>
            <li>Força, agilidade e resistência aumentadas</li>
            <li>Capacidade de cura acelerada</li>
            <li>Habilidades mentais avançadas</li>
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
