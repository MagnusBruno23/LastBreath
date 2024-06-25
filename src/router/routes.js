
const routes = [
  {
    path: '/',
    component: () => import('layouts/layoutMenu.vue'),
    children: [
      { path: '', component: () => import('pages/Menu.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/layoutMainNoBack.vue'),
    children: [
      { path: 'listaFichas', component: () => import('pages/listaFichas.vue') },
      { path: 'listaClasses', component: () => import('pages/listaClasses.vue') },
      { path: 'listaRacas', component: () => import('pages/listaRacas.vue') },
      { path: 'listaVant', component: () => import('pages/listaVant.vue') },
      { path: 'listaDesvant', component: () => import('pages/listaDesvant.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/layoutMain.vue'),
    children: [
      { path: 'adicionar-ficha', component: () => import('pages/AdicionarFicha.vue') },
      { path: '/editar-ficha/:id', component: () => import('pages/EditarFicha.vue') },
      { path: '/habilidades/:id', component: () => import('pages/HabiPage.vue') },
      { path: '/magicas/:id', component: () => import('pages/MagiPage.vue') },
      { path: '/itens/:id', component: () => import('pages/ItensPage.vue') },
      { path: '/armaduras/:id', component: () => import('pages/ArmadurasPage.vue') },
      { path: '/raca/humano', component: () => import('components/Raças/HumanoComp.vue') },
      { path: '/raca/elfo', component: () => import('components/Raças/ElfoComp.vue') },
      { path: '/raca/orc', component: () => import('components/Raças/OrcComp.vue') },
      { path: '/raca/anao', component: () => import('components/Raças/AnaoComp.vue') },
      { path: '/raca/minotauro', component: () => import('components/Raças/MinotauroComp.vue') },
      { path: '/raca/fada', component: () => import('components/Raças/FadaComp.vue') },
      { path: '/raca/tiefling', component: () => import('components/Raças/TieflingComp.vue') },
      { path: '/raca/aasimar', component: () => import('components/Raças/AAsimarComp.vue') },
      { path: '/raca/Meio-Animal', component: () => import('components/Raças/MeioAnimalComp.vue') },
      { path: '/raca/draconico', component: () => import('components/Raças/DraconicoComp.vue') },
      { path: '/raca/super-humano', component: () => import('components/Raças/SuperHumanoComp.vue') },
      { path: '/classe/paladino', component: () => import('components/Classes/PaladinoComp.vue') },
      { path: '/classe/paladino', component: () => import('components/Classes/PaladinoComp.vue') },
      { path: '/classe/guerreiro', component: () => import('components/Classes/GuerreiroComp.vue') },
      { path: '/classe/mago', component: () => import('components/Classes/MagoComp.vue') },
      { path: '/classe/ladino', component: () => import('components/Classes/LadinoComp.vue') },
      { path: '/classe/samurai', component: () => import('components/Classes/SamuraiComp.vue') },
      { path: '/classe/clerigo', component: () => import('components/Classes/ClerigoComp.vue') },
      { path: '/classe/vampiro', component: () => import('components/Classes/VampiroComp.vue') },
      { path: '/classe/cavaleiro-das-trevas', component: () => import('components/Classes/CavaleiroComp.vue') },
      { path: '/classe/necromante', component: () => import('components/Classes/NecromanteComp.vue') },
      { path: '/classe/mago-do-caos', component: () => import('components/Classes/MagoDoCaosComp.vue') },
      { path: '/classe/bardo', component: () => import('components/Classes/BardoComp.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
