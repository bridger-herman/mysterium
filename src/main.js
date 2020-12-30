import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import GhostTools from './components/GhostTools.vue'
import NewGame from './components/NewGame.vue'
import PlayerView from './components/PlayerView.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: PlayerView },
  { path: '/ghost-tools', component: GhostTools },
  { path: '/ghost-tools/new-game', component: NewGame }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
