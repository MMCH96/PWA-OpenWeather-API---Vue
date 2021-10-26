<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
        <div class="container">
  <button class="btn btn-outline-secondary" type="button" @click="FtC">F°</button>
  <button class="btn btn-outline-secondary" type="button">C°</button>
  
</div>
  
    <div class="form-floating mb-3 container" v-for="item of clima" :key="item.id">
        <input type="text" class="form-control " id="floatingInput" placeholder=" "  disabled>
        <label for="floatingInput" class="text-center"> Ciudad : {{item.name}}</label>
    </div>
        <br>

    <div class="form-floating mb-3 container" v-for="item of clima" :key="item.id">
        <input type="text" class="form-control " id="floatingInput" placeholder=" "  disabled>
        <label for="floatingInput" class="text-center"> Temperatura : {{item.temp}}</label>
    </div>
        <br>
    <div class="form-floating mb-3 container" v-for="item of clima" :key="item.id">
        <input type="text" class="form-control " id="floatingInput" placeholder=" "  disabled>
        <label for="floatingInput" class="text-center"> Sensacion Termica : {{item.feels_like}}</label>
    </div>
        <br>
    <div class="form-floating mb-3 container" v-for="item of clima" :key="item.id">
        <input type="text" class="form-control " id="floatingInput" placeholder=" "  disabled>
        <label for="floatingInput" class="text-center"> Estado del Clima : {{item.weather}}</label>
    </div>
        <br>
        <div class="form-floating mb-3 container" v-for="item of clima" :key="item.id">
        <input type="text" class="form-control " id="floatingInput" placeholder=" "  disabled>
        <label for="floatingInput" class="text-center"> Humedad : {{item.humidity}}</label>
    </div>
    <br>
    </div>
    
</template>
<script>
import {mapState} from 'vuex';
import HolaMundo from '@/components/HelloWorld.vue'


export default {
    name: 'Clima', //NOMBRE DE CLIMA-- STORE-- AJAX
  computed:{
    ...mapState(['clima'])
  },
  data:{
      datos0:[]
  },
  methods: {
     FtC:function(){

         cambioTemp = parseFloat(temp) //CUANDO LO EJECUTO ME DICE QUE TEMP NO ESTÁ DEFINIDO
         console.log(cambioTemp);
         
     }
  },
}
</script>