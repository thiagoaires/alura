<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img :src="fotos.url" :alt="fotos.titulo">
    <ul>
      <li v-for="foto in fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  data(){
    return{
      titulo: 'Alura Pic',
      fotos: []
    }
  },

  created(){
    this.$http.get('http://localhost:3123/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>

<style>

</style>
