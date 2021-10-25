<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
      <div class="input-group flex-nowrap container">
        <span class="input-group-text" id="addon-wrapping">Longitud</span>
        <input type="text" class="form-control" placeholder="Longitud" aria-label="Username" aria-describedby="addon-wrapping" v-model="long">
      </div>
        <br>
      <div class="input-group flex-nowrap container">
        <span class="input-group-text" id="addon-wrapping">Latitud</span>
        <input type="text" class="form-control" placeholder="Latitud" aria-label="Username" aria-describedby="addon-wrapping" v-model="lat">
      </div>
        <br>
      <div class="container">
          <button class="btn btn-outline-dark" @click="obtenerClima">Enviar</button>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import axios from "axios";
import {cl} from 'vue'


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
    ...mapState(['clima'])
  },
  created(){
    this.obtenerClima();
    
  },
  methods:{
    obtenerClima(){
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.ApiKey}`)
      .then((res)=> {
        console.log(res.data);

      })
      
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
