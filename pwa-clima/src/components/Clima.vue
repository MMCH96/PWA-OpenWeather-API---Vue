<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
  
    <div class="form-floating mb-3 container" v-for="item of clima" :key="item.id">
        <input type="text" class="form-control " id="floatingInput" placeholder=" "  disabled>
        <label for="floatingInput" class="text-center"> Ciudad : {{item.name}}</label>
    </div>
        <br>

    <div class="form-floating mb-3 container" v-for="item of clima" :key="item.id">
        <input type="text" class="form-control " id="floatingInput" placeholder=" " disabled>
        <label for="floatingInput" class="text-center" v-show="estado"> Temperatura : {{item.temp}} C°</label><br>
        <label for="floatingInput" class="text-center" v-show="estado2"> Temperatura : {{((item.temp*(9/5))+32).toFixed(2)}} F°</label>
        <button id="1" class="btn btn-outline-secondary" type="button" @click="cambioEstado">F°</button>
        <button class="btn btn-outline-success" type="button" @click="cambioEstado2">C°</button>
    </div>
        <br>
    <div class="form-floating mb-3 container" v-for="item of clima" :key="item.id">
        <input type="text" class="form-control " id="floatingInput" placeholder=" "  disabled>
        <label for="floatingInput" class="text-center"> Sensacion Termica : {{item.feels_like}} C°</label>
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
    data(){
        return{
            estado:true,
            estado2:false
        }
    },

  computed:{
    ...mapState(['clima']),
  },
  methods: {
     cambioEstado:function()
     {
        this.estado = false
        this.estado2 = true
         
         
     },
     cambioEstado2:function()
     {
  
            this.estado = true
            this.estado2 = false
         
     }
  },
}

</script>