<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Fada</div>
      </q-card-section>
      <q-card-section>
        <q-img src="~assets/racas/fada.jpg" style="max-height: 300px; max-width: 300px" />
      </q-card-section>
      <q-card-section>
        <div>
          <p><strong>Descrição:</strong> As fadas são criaturas mágicas conhecidas por sua beleza e poder mágico. Elas são protetoras da natureza e possuem grande sabedoria.</p>
          <p><strong>Características:</strong></p>
          <ul>
            <li>Poder mágico elevado</li>
            <li>Conexão com a natureza</li>
            <li>Habilidade de cura</li>
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
