<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Aasimar</div>
      </q-card-section>
      <q-card-section>
        <q-img src="~assets/racas/aasimar.jpg" style="max-height: 300px; max-width: 300px" />
      </q-card-section>
      <q-card-section>
        <div>
          <p><strong>Descrição:</strong> Os Aasimar são seres com uma herança celestial. Eles são conhecidos por sua beleza radiante e aura de bondade. Dotados de poderes divinos, os Aasimar são frequentemente vistos como campeões da justiça.</p>
          <p><strong>Características:</strong></p>
          <ul>
            <li>Aura radiante</li>
            <li>Poderes de cura</li>
            <li>Resistência a dano sagrado</li>
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
