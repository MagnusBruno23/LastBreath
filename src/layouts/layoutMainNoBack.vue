<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="home" to="/" />
        <q-toolbar-title>
          Last Breath
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <!-- Adicione itens do drawer aqui -->
    </q-drawer>

    <q-page-container class="background-image">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const router = useRouter()

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const goBack = () => {
      router.back()
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      goBack
    }
  }
}
</script>

<style scoped>

.background-image {
  background: url('~assets/background.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
}

.q-header {
  font-family: 'Seagram-tfb', sans-serif; /* Fonte personalizada */
}

.q-toolbar-title {
  text-align: center; /* Centraliza o título */
}

.text-white {
  color: white !important;
}


</style>
