import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import GhostTools from './components/GhostTools.vue'
import NewGame from './components/NewGame.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/ghost-tools', component: GhostTools },
  { path: '/ghost-tools/new-game', component: NewGame }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
