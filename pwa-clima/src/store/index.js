import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clima:[
      {name:' ',temp:' ',sens:' ',estado:' ', condicion:1}
    ]
  },
  mutations: {
    setTemp:(state, payload)=>{
      const {temp, name}= payload
      const climate= state.clima.find(p => p.condicion === 1)
      climate.name=name
      climate.temp=temp
      //
      //
    } 
  },
  actions: {
  },
  modules: {
  }
})
