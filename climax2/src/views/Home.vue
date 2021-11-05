<template>
  <div class="home">
    
    <img alt="Vue logo" src="../assets/clima2.png">
    
    <HelloWorld msg="Clima OpenWeather"/>
    

    <Clima/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Clima from '@/components/Clima.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, Clima
  }
}
</script>
