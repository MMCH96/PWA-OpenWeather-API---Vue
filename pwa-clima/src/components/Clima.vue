<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
  
    <div class="form-floating mb-3 container" v-for="item of clima" :key="item.id">
        <input type="text" class="form-control " id="floatingInput" placeholder=" "  disabled>
        <label for="floatingInput" class="text-center"> Ciudad : {{item.ciudad}}</label>
    </div>
        <br>

    <div class="form-floating mb-3 container" v-for="item of clima" :key="item.id">
        <input type="text" class="form-control " id="floatingInput" placeholder=" "  disabled>
        <label for="floatingInput" class="text-center"> Temperatura : {{item.temp}}</label>
    </div>
        <br>
    <div class="form-floating mb-3 container" v-for="item of clima" :key="item.id">
        <input type="text" class="form-control " id="floatingInput" placeholder=" "  disabled>
        <label for="floatingInput" class="text-center"> Sensacion Termica : {{item.sens}}</label>
    </div>
        <br>
    <div class="form-floating mb-3 container" v-for="item of clima" :key="item.id">
        <input type="text" class="form-control " id="floatingInput" placeholder=" "  disabled>
        <label for="floatingInput" class="text-center"> Estado del Clima : {{item.estado}}</label>
    </div>
        <br>
    </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
  computed:{
    ...mapState(['clima'])
  }
}
</script>