<script>
import { store } from './data/store';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

  export default {
    components:{
      Header,
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
    <Footer />
  </body>
</template>



<style lang="scss">
@use './assets/scss/main.scss';

body {
  font-family: 'Roboto', sans-serif;
}

</style>