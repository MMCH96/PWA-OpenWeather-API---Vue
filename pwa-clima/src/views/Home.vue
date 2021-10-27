<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/clima2.png">
    <link rel="manifest" href="./manifest.json">
    <HelloWorld msg="Clima con OpenWeather"/>
    <br>
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
