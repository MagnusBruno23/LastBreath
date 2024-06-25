<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Dracônico</div>
      </q-card-section>
      <q-card-section>
        <q-img src="~assets/racas/draconico.jpg" style="max-height: 300px; max-width: 300px" />
      </q-card-section>
      <q-card-section>
        <div>
          <p><strong>Descrição:</strong> Os Dracônicos possuem traços de dragão em sua aparência e habilidades. Eles são poderosos e imponentes, com a capacidade de usar a magia dos dragões.</p>
          <p><strong>Características:</strong></p>
          <ul>
            <li>Resistência a fogo</li>
            <li>Força descomunal</li>
            <li>Capacidade de usar magia de dragão</li>
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
