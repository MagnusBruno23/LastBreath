<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="text-h6 q-mb-md">Lista de Desvantagens do RPG</div>

      <q-btn
        v-for="desvantagem in desvantagens"
        :key="desvantagem.id"
        outline
        rounded
        color="primary"
        class="full-width q-mb-sm"
        padding="15px"
        :label="desvantagem.nome"
        @click="selecionarDesvantagem(desvantagem)"
      />
    </div>

    <q-dialog v-model="showDesvantagemModal">
      <q-card>
        <q-card-section class="text-h6">{{ desvantagemSelecionada.nome }}</q-card-section>
        <q-card-section>
          <div><strong>Descrição:</strong> {{ desvantagemSelecionada.descricao }}</div>
          <div><strong>Pontos:</strong> {{ desvantagemSelecionada.pontos }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Fechar" @click="showDesvantagemModal = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      desvantagens: [
        { nome: 'Assombrado', descricao: 'Aterrorizado, apavorado, assustado..', custo: 2 },
        { nome: 'Fobia', descricao: 'Transtornos de ansiedade, medo exagerado.', custo: 2 },
        { nome: 'Má fama', descricao: 'Péssima reputação...', custo: 2 },
        { nome: 'Alcoolismo', descricao: 'Vontade incontrolável de beber.', pontos: 2 },
        { nome: 'Altruísmo', descricao: 'Se sacrifica por outras pessoas e pouco se importa com fama ou riquezas.', pontos: 2 },
        { nome: 'Avareza', descricao: 'Preocupação permanente na conservação de riquezas etc.', pontos: 2 },
        { nome: 'Bully', descricao: 'Gosta de caçoar, brigar, denegrir, apontar defeitos e até mesmo bater nas pessoas ao seu redor, tanto amigos quanto inimigos.', pontos: 3 },
        { nome: 'Circunspecção', descricao: 'Não entende piadas, entende tudo de forma literal e acredita que todo mundo sempre está falando sério.', pontos: 1 },
        { nome: 'Paixão por dinheiro', descricao: 'Te leva a roubar, guardar, economizar e evitar gastar o máximo possível do seu dinheiro.', pontos: 2 },
        { nome: 'Compulsões', descricao: 'Hábito ou vício que toma boa parte do seu tempo ou dinheiro. Exemplo: Gastar dinheiro compulsivamente em bebidas, mentir compulsivamente, etc.', pontos: 1 },
        { nome: 'Covardia', descricao: 'Ter extremo cuidado no seu bem estar físico. Dificuldade extrema em assumir riscos. Na maioria das vezes escolhe sempre o mais fraco e vulnerável para uma batalha.', pontos: 3 },
        { nome: 'Dependentes', descricao: 'Possui filhos, irmãos mais novos, uma avó muito idosa que tem que cuidar e proteger. Um dependente é uma responsabilidade constante e também um ponto fraco. Alguém que pode ser ameaçado, sequestrado etc, causando um impacto forte ao personagem.', pontos: 3 },
        { nome: 'Fúria', descricao: 'Tendência a perder o controle e partir para um ataque frenético à aquilo que acredita ser a causa do seu problema ou tensão.', pontos: 2 },
        { nome: 'Honestidade', descricao: 'Sempre obedece a lei e dá o máximo de si para trilhar o melhor caminho possível e também não consegue mentir.', pontos: 2 },
        { nome: 'Impulsividade', descricao: 'Toma decisões sem pensar nas consequências.', pontos: 1 },
        { nome: 'Insensível', descricao: 'Capaz de entender emoções alheias, mas apenas com o objetivo de manipulá-las, pois não se importa nem um pouco com o sofrimento alheio.', pontos: 1 },
        { nome: 'Luxúria', descricao: 'Desejo incontrolável por romance. Tem dificuldade em se conter, principalmente na frente de pessoas atraentes. Obs: Proibido a Andrielle pegar essa desvantagem.', pontos: 2 },
        { nome: 'Magnetismo sobrenatural', descricao: 'Coisas estranhas acontecem com o personagem com uma frequência alarmante.', pontos: 1 },
        { nome: 'No limite', descricao: 'Assume riscos extremamente irracionais diante a um perigo mortal. A maioria das pessoas que testemunham tais comportamentos acreditam que trata-se de um maluco.', pontos: 3 },
        { nome: 'Teimosia', descricao: 'Quer sempre fazer as coisas do seu modo e é uma pessoa difícil de se conviver. Obs: desvantagens já vinculada ao jogador Dionatan ISMAEL Souza Almeida.', pontos: 1 },
        { nome: 'Amnésia', descricao: 'Em certos momentos você não consegue lembrar de coisas importantes, informações úteis ou não.', pontos: 2 }
      ],
      showDesvantagemModal: false,
      desvantagemSelecionada: {}
    };
  },
  methods: {
    selecionarDesvantagem(desvantagem) {
      this.desvantagemSelecionada = desvantagem;
      this.showDesvantagemModal = true;
    }
  }
};
</script>

<style scoped>
.q-btn {
  color: #000000 !important; /* Cor do texto dos botões em branco */
}
</style>
