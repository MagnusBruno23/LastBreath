<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Tiefling</div>
      </q-card-section>
      <q-card-section>
        <q-img src="~assets/racas/tiefling.jpg" style="max-height: 300px; max-width: 300px" />
      </q-card-section>
      <q-card-section>
        <div>
          <p><strong>Descrição:</strong> Os tieflings são seres com sangue demoníaco, conhecidos por sua aparência distinta e habilidades mágicas sombrias.</p>
          <p><strong>Características:</strong></p>
          <ul>
            <li>Aura sombria</li>
            <li>Resistência a fogo</li>
            <li>Poderes mágicos sombrios</li>
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
