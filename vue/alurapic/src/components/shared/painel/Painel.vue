

<template>

    <div class="painel">
        <h2 @click="visivel = !visivel" class="painel-titulo">{{titulo}}</h2>
        <transition name="painel-fade">
            <div class="painel-conteudo" v-show="visivel">        
                <slot>

                </slot>
            </div>
        </transition>
    </div>

</template>

<script>
export default {

    props: ['titulo'],

    data(){

        return{
            visivel: true
        }
    }
}
</script>

<style scoped>

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

  * {
      box-shadow: 2px 2px 10px rgba(0,0.0, .09)
  }

  .painel-fade-enter,
  .painel-fade-leave-active{
      opacity: 0;
  }

  .painel-fade-enter-active,
  .painel-fade-leave-active{
      transition: opacity .4s;
  }
</style>

