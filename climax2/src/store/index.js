import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clima:[
      {name:'',temp:'',feels_like:' ',weather:' ', humidity:' ', condicion:1}
    ]
  },
  mutations: {
    setTemp:(state, payload)=>{
      const {temp, name, feels_like, weather,humidity}= payload
      const climate= state.clima.find(p => p.condicion > 0)
      climate.name=name
      climate.temp=(temp-273.15).toFixed(2)
      climate.feels_like=(feels_like-273.15).toFixed(2)
      climate.weather=weather
      climate.humidity=humidity
      climate.condicion++
    } 
  },
  actions: {
  },
  modules: {
  }
})
