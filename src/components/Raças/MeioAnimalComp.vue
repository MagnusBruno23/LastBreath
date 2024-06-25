<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Meio-Animal</div>
      </q-card-section>
      <q-card-section>
        <q-img src="~assets/racas/meio_animal.jpg" style="max-height: 300px; max-width: 300px" />
      </q-card-section>
      <q-card-section>
        <div>
          <p><strong>Descrição:</strong> Os Meio-Animal são híbridos entre humanos e animais, possuindo características físicas e habilidades de ambos. Eles são conhecidos por sua agilidade e sentidos aguçados.</p>
          <p><strong>Características:</strong></p>
          <ul>
            <li>Sentidos aguçados</li>
            <li>Força e agilidade aumentadas</li>
            <li>Instintos animais</li>
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
