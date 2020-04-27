// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VModal from 'vue-js-modal'

Vue.use(VModal)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
