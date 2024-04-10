<script>
import { store } from '../data/store'
import Testimonialcard from './partials/Testimonialcard.vue'

  export default {

    components:{
      Testimonialcard,
    },

    data(){
      return{
        store,
      }
    }
  }
</script>


<template>
  <section class="d-flex justify-content-center ">
    <div class="container-testimonial text-center d-flex flex-column justify-content-center align-items-center ">
      <div class="title-testimonial mb-5">
        <h6>HAPPY CUSTOMERS</h6>
      <h2>Testimonials</h2>
      </div>
      <div class="card-container d-flex align-items-center justify-content-around mb-5">
        <Testimonialcard
          v-for="(testimonial,index) in store.testimonialsCard"
          :key="index"
          :img="testimonial.img"
          :name="testimonial.name"
          :description="testimonial.description" />
      </div>
      <button type="button" class="btn btn-primary ms-4 w-25 ">READ MORE TESTIMONIALS</button>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  section{
    height: 900px;
    background-image: url(../../public/img/avada-movers-testimonial-background.jpg);
    background-size: cover;
    .container-testimonial{
      width: 60%;
      h6{
        color: #afaeae;
        font-size: .8rem;
        font-weight: bold;
        padding-bottom: 2px;
      }
      h2{
        color: #6bbb14;
        font-weight: 700;
        font-size: 2.3rem;
      }
      button{
        font-size: .7rem;
        font-weight: bold;
        padding: 8px 20px;
        border-radius: 15px;
      }
    }
  }
</style>