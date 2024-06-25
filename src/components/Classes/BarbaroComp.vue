<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Barbaro</div>
      </q-card-section>
      <q-card-section>
        <q-img src="~assets/classes/barbaro.png" style="max-height: 300px; max-width: 300px" />
      </q-card-section>
      <q-card-section>
        <div>
          <p><strong>Descrição:</strong> Bárbaros são diferentes dos guerreiros treinados, abandonando toda disciplina em troca de uma força primitiva e descomunal, bárbaros representam o caos da batalha em sua forma mais pura. Muitas vezes selvagens e indomáveis, alguns bárbaros podem nascer dentre a civilização, herdando em seu sangue um chamado para o combate.</p>
          <p><strong>Características:</strong></p>
          <ul>
            <li>Fúria</li>
            <li>Defesa Sem Armadura</li>
            <li>Sentido de Perigo</li>
            <li>Conhecimento Primevo</li>
            <li>Caminho Primitivo</li>
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
      this.$router.push('/listaClasses');
    }
  }
};
</script>

<style scoped>
.q-pa-md {
  background-color: #e1c596;
}
</style>
