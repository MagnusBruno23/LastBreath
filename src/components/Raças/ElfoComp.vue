<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Elfo</div>
      </q-card-section>
      <q-card-section>
        <q-img src="~assets/racas/elfo.jpg" style="max-height: 300px; max-width: 300px" />
      </q-card-section>
      <q-card-section>
        <div>
          <p>Os elfos são conhecidos por sua graça, beleza e longevidade. Eles têm uma afinidade natural com a magia e são excelentes arqueiros e guerreiros leves. Os elfos valorizam a arte, a música e a natureza acima de tudo.</p>
          <ul>
            <li><strong>Características:</strong> Agilidade, inteligência, afinidade com a magia.</li>
            <li><strong>Tamanho:</strong> Médio, geralmente mais altos e esguios que os humanos.</li>
            <li><strong>Vida Média:</strong> Até 750 anos.</li>
            <li><strong>Bônus de Atributos:</strong> +2 em Destreza, +1 em Inteligência.</li>
            <li><strong>Idiomas:</strong> Comum e Élfico.</li>
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
