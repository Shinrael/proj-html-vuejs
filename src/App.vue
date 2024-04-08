<script>
import { store } from './data/store';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Footer from './components/Footer.vue';

  export default {
    components:{
      Header,
      Hero,
      Footer,
    },
    data(){
      return{
        store
      }
    }
    
  }
</script>


<template>
  <body>
    <Header />
    <Hero />
    <Footer />
  </body>
</template>



<style lang="scss">
@use './assets/scss/main.scss';

body {
  font-family: 'Roboto', sans-serif;
}

</style>