import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clima:[
      {name:' ',temp:' ',feels_like:' ',weather:' ', humidity:' ', condicion:1}
    ]
  },
  mutations: {
    setTemp:(state, payload)=>{
      const {temp, name, feels_like, weather,humidity}= payload
      const climate= state.clima.find(p => p.condicion === 1)
      climate.name=name
      climate.temp=temp
      climate.feels_like=feels_like
      climate.weather=weather
      climate.humidity=humidity
      
    } 
  },
  actions: {
  },
  modules: {
  }
})
