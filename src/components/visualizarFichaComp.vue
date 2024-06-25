<template>
  <q-dialog v-model="localShow" persistent @hide="fecharModal">
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Visualizar Ficha</div>
      </q-card-section>
      <q-card-section>
        <div>{{ ficha.nome }}</div>
        <div>Classe: {{ ficha.classe.label || ficha.classe }}</div>
        <div>Raça: {{ ficha.raca.label || ficha.raca }}</div>
        <div>
          <strong>Vantagens:</strong>
          <ul>
            <li v-for="(vantagem, index) in ficha.vantagens" :key="index">{{ vantagem.nome }}</li>
          </ul>
        </div>
        <div>
          <strong>Desvantagens:</strong>
          <ul>
            <li v-for="(desvantagem, index) in ficha.desvantagens" :key="index">{{ desvantagem.nome }}</li>
          </ul>
        </div>
        <div>
          <strong>Itens:</strong>
          <ul>
            <li v-for="(item, index) in ficha.itens" :key="index">{{ item.nome }}</li>
          </ul>
        </div>
        <div>
          <strong>Armaduras:</strong>
          <ul>
            <li v-for="(armadura, index) in ficha.armaduras" :key="index">
              {{ armadura.nome }} - ATK: {{ armadura.atk }}, ATK M: {{ armadura.atkM }}, RDF: {{ armadura.rdf }}, RDM: {{ armadura.rdm }}
            </li>
          </ul>
        </div>
        <div>
          <strong>Atributos:</strong>
          <ul>
            <li>Força: {{ ficha.atributos.forca }}</li>
            <li>Destreza: {{ ficha.atributos.destreza }}</li>
            <li>Agilidade: {{ ficha.atributos.agilidade }}</li>
            <li>Constituição: {{ ficha.atributos.constituicao }}</li>
            <li>Inteligência: {{ ficha.atributos.inteligencia }}</li>
          </ul>
        </div>
        <div>
          <strong>Estatísticas:</strong>
          <ul>
            <li>Ataque Base: {{ ataqueBase }}</li>
            <li>Ataque Base Mágico: {{ ataqueBaseMagico }}</li>
            <li>Acerto: {{ acerto }}</li>
            <li>Esquiva: {{ esquiva }}</li>
            <li>RDF: {{ rdf }}</li>
            <li>RDM: {{ rdm }}</li>
          </ul>
        </div>
        <q-img :src="ficha.foto" v-if="ficha.foto" style="width: 100px; height: 100px;" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Fechar" @click="fecharModal" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    ficha: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      localShow: false // Inicialmente o localShow é falso
    };
  },
  computed: {
    ataqueBase() {
      return this.ficha.atributos.forca * 2 + this.getArmaduraBonus('atk');
    },
    ataqueBaseMagico() {
      return this.ficha.atributos.inteligencia * 2 + this.getArmaduraBonus('atkM');
    },
    acerto() {
      return this.ficha.atributos.destreza * 2;
    },
    esquiva() {
      return this.ficha.atributos.agilidade * 2;
    },
    rdf() {
      return this.ficha.atributos.constituicao * 2 + this.getArmaduraBonus('rdf');
    },
    rdm() {
      return this.ficha.atributos.inteligencia * 2 + this.getArmaduraBonus('rdm');
    }
  },
  watch: {
    show(val) {
      this.localShow = val; // Atualiza o localShow quando a prop show mudar
    },
    localShow(val) {
      if (!val) {
        this.$emit('update:show', val); // Emite evento para sincronizar com a prop show
      }
    }
  },
  methods: {
    fecharModal() {
      this.localShow = false; // Fecha o modal
      this.$emit('close'); // Emite o evento de fechamento
    },
    getArmaduraBonus(attr) {
      return this.ficha.armaduras ? this.ficha.armaduras.reduce((total, armadura) => total + (armadura[attr] || 0), 0) : 0;
    }
  }
};
</script>

<style scoped>
.q-pa-md {
  background-color: #e1c596;
}
</style>
