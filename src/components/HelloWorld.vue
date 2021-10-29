<template>
<div class="hello">
    <h1>{{ msg }}</h1>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      
      <form >
        <div class="input-group flex-nowrap container">
        <span class="input-group-text" id="addon-wrapping">Longitud</span>
        <input  type="text" class="form-control" placeholder="Longitud" aria-label="Username" aria-describedby="addon-wrapping" v-model="long" required>
      </div>
        <br>
      <div class="input-group flex-nowrap container">
        <span class="input-group-text" id="addon-wrapping">Latitud</span>
        <input  type="text" class="form-control" placeholder="Latitud" aria-label="Username" aria-describedby="addon-wrapping" v-model="lat" required>
      </div>
        <br>
      <div class="container">
          <button class="btn btn-outline-dark" @click="obtenerClima" @keyup.enter="obtenerClima">Enviar</button>
        </div>



      </form>
     

  </div>
</template>

<script>

import axios from "axios";




export default {
  name: 'HelloWorld',
 
   data() {
    return{
      ApiKey:"e56eb9847bab74b033a734c62492fc38",
      long:'',
      lat:''
    }
    
  },
  props: {
    msg: String,
   
  },
  computed:{
 

  },
  created(){
    this.obtenerClima();
    
  },
  methods:{
    obtenerClima(){


          if(this.long > -180 && this.long < 180 && this.lat > -90 && this.lat < 90)
          {
              axios
                .get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.ApiKey}`)
                .then((res)=> {
                console.log(res.data);
                console.log(res.status)
            
              this.$store.commit('setTemp', {
                name: res.data.name,
                temp: res.data.main.temp,
                feels_like: res.data.main.feels_like,
                humidity: res.data.main.humidity,
                weather: res.data.weather[0].main
                })

              })
          }
          else
          {
            
            this.$alert("Coordenadas Incorrectas");
            console.log("No encontro las coordenadas")
          }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
