

<template>
  <div class="corpo">
    <h1 class="centralizado">{{titulo}}</h1>

    <input type="search" class="filtro" placeholder="filtre pelo titulo" 
      @input="filtro = $event.target.value" />
    {{filtro}}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">

        <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :src="" :alt=""/> 
        </meu-painel>
        
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';
import ImagemResponsiva  from './components/shared/imagem-responsiva/ImagemResponsiva.vue';

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva

  },

  data(){
    return{
      titulo: 'Alura Pic',
      fotos: [],
      filtro: ''
    }
  },

  computed: {

   fotosComFiltro(){

     if(this.filtro){

       let exp = new RegExp(this.filtro.trim(), 'i')
       return this.fotos.filter(foto => exp.test(foto.titulo));
     } else {
       return this.fotos
     }
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

  .centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

 

  /* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 1px;
    background: #fc0;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
</style>
