import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

window.addEventListener('load',() =>{
  registerSW();
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

async function registerSW(){
  if ('serviceWorker' in navigator){
    try {
      await navigator.serviceWorker.register('./sw.js')
    } catch (e) {
      console.log('Registro de SW fallido')
    }
  }
}