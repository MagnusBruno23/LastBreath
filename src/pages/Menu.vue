<template>
  <q-page class="background-theme" padding>
    <div>
      <div class="row justify-center">
        <q-img
          src="~assets/rosa_ventos.png"
          width="220px"
          height="220px"
        /><br/>
        <h1>Last Breath</h1>
      </div>

      <div><br></div>

      <q-btn
        outline rounded color="primary"
        class="full-width"
        padding="15px"
        icon="feed"
        label="FICHAS"
        to="listaFichas"
      />
    </div>
    <div><br></div>

    <div>
      <q-btn outline rounded color="primary"
      class="full-width"
      padding="15px"
      icon="sports_mma"
      label="CLASSES"
      to="listaClasses"/>
    </div>
    <div><br></div>

    <div>
      <q-btn outline rounded color="primary"
      class="full-width"
      padding="15px"
      icon="face"
      label="RACAS"
      to="listaRacas"/>
    </div>
    <div><br></div>

    <div>
      <q-btn outline rounded color="primary"
      class="full-width"
      padding="15px"
      icon="check"
      label="VANTAGENS"
      to="listaVant"/>
    </div>
    <div><br></div>

    <q-btn outline rounded color="primary"
    class="full-width"
    padding="15px"
    icon="close"
    label="DESVANTAGENS"
    to="listaDesvant"/>




  </q-page>
</template>

<script>
export default {
  // name: 'Menu',
}
</script>

<style scoped>

.background-theme {
  background: url('src/assets/background.jpg') no-repeat center center fixed;
  background-size: cover;
}
.q-btn {
  color: #000000 !important; /* Cor do texto dos botões em branco */
}

.titulo {
  color: #000000; /* Cor do texto */
  font-size: 54px; /* Tamanho do texto */
  text-align: center; /* Centralizado */
  margin-top: 100px; /* Margem superior */
}
</style>
