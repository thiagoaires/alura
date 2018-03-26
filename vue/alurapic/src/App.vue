<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img :src="fotos.url" :alt="fotos.titulo">
    <ul>
      <li v-for="foto of fotos">
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
      fotos: [
          {
            url: 'https://i.ytimg.com/vi/81zLH4ygz3M/hqdefault.jpg',
            titulo: 'cachorro'
          },{
            url: 'https://i.ytimg.com/vi/cKB8K59layQ/hqdefault.jpg',
            titulo: 'cachorro'
          }
        ]
    }
  }
}
</script>

<style>

</style>
