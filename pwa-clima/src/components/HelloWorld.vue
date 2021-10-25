<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
      <div class="input-group flex-nowrap container">
        <span class="input-group-text" id="addon-wrapping">Longitud</span>
        <input type="text" class="form-control" placeholder="Longitud" aria-label="Username" aria-describedby="addon-wrapping">
      </div>
        <br>
      <div class="input-group flex-nowrap container">
        <span class="input-group-text" id="addon-wrapping">Latitud</span>
        <input type="text" class="form-control" placeholder="Latitud" aria-label="Username" aria-describedby="addon-wrapping">
      </div>
        <br>
      <div class="container">
          <button class="btn btn-outline-dark" @click="clima">Enviar</button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    clima (){
      
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
