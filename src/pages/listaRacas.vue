<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="text-h6 q-mb-md">Lista de Raças do RPG</div>

      <q-btn
        v-for="raca in racas"
        :key="raca.id"
        outline
        rounded
        color="primary"
        class="full-width q-mb-sm"
        padding="15px"
        :label="raca.nome"
        @click="selecionarRaca(raca)"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      racas: [
        { id: 1, nome: 'Humano', path: 'humano' },
        { id: 2, nome: 'Elfo', path: 'elfo' },
        { id: 3, nome: 'Orc', path: 'orc' },
        { id: 4, nome: 'Anão', path: 'anao' },
        { id: 5, nome: 'Minotauro', path: 'minotauro' },
        { id: 6, nome: 'Fada', path: 'fada' },
        { id: 7, nome: 'Tiefling', path: 'tiefling' },
        { id: 8, nome: 'AAsimar', path: 'aasimar' },
        { id: 9, nome: 'Meio-Animal', path: 'meio-animal' },
        { id: 10, nome: 'Draconico', path: 'draconico' },
        { id: 11, nome: 'Super-Humano', path: 'super-humano' }
      ]
    };
  },
  methods: {
    selecionarRaca(raca) {
      this.$router.push(`/raca/${raca.path}`);
    }
  }
};
</script>

<style scoped>
.q-btn {
  color: #000000 !important; /* Cor do texto dos botões em branco */
}
</style>
