<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Minotauro</div>
      </q-card-section>
      <q-card-section>
        <q-img src="~assets/racas/minotauro.png" style="max-height: 300px; max-width: 300px" />
      </q-card-section>
      <q-card-section>
        <div>
          <p><strong>Descrição:</strong> Os minotauros são conhecidos por sua força descomunal e coragem. Eles são guerreiros ferozes com uma resistência incrível.</p>
          <p><strong>Características:</strong></p>
          <ul>
            <li>Força e resistência aumentadas</li>
            <li>Habilidade em combate corpo a corpo</li>
            <li>Instinto de caça</li>
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
