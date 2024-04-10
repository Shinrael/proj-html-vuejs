<script>
import { store } from './data/store';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Award from './components/Award.vue';
import Service from './components/Service.vue';
import MoveWithEase from './components/MoveWithEase.vue';
import Testimonials from './components/Testimonials.vue';
import Request from './components/Request.vue';
import About from './components/About.vue';
import Footer from './components/Footer.vue';

  export default {
    components:{
      Header,
      Hero,
      Award,
      Service,
      MoveWithEase,
      Testimonials,
      Request,
      About,
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
    <Award />
    <Service />
    <MoveWithEase />
    <Testimonials/>
    <Request />
    <About />
    <Footer />
  </body>
</template>



<style lang="scss">
@use './assets/scss/main.scss';

body {
  font-family: 'Roboto', sans-serif;
}

</style>