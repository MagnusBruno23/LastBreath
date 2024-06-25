<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Humano</div>
      </q-card-section>
      <q-card-section>
        <q-img src="~assets/racas/humano.jpg" style="max-height: 300px; max-width: 300px" />
      </q-card-section>
      <q-card-section>
        <div>
          <p>Os humanos são a raça mais versátil e adaptável do mundo. Eles têm uma variedade de culturas, tradições e habilidades. Humanos podem se destacar em qualquer classe ou profissão, graças à sua capacidade de aprendizado rápido e à sua tenacidade.</p>
          <ul>
            <li><strong>Características:</strong> Adaptabilidade, resiliência, diversidade cultural.</li>
            <li><strong>Tamanho:</strong> Médio, variando entre 1,5 a 1,8 metros de altura.</li>
            <li><strong>Vida Média:</strong> Aproximadamente 80 anos.</li>
            <li><strong>Bônus de Atributos:</strong> +1 em todos os atributos.</li>
            <li><strong>Idiomas:</strong> Comum e um idioma adicional à escolha.</li>
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
