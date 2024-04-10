<script>
import { store } from '../data/store'
import Cardservice from './partials/Cardservice.vue'

  export default {

    components:{
      Cardservice
    },

    data(){
      return{
        store,
      }
    }
  }
</script>


<template>
  <section class="d-flex justify-content-center align-items-center ">
    <div class="container-service">
      <div class="service-top d-flex flex-column justify-content-end align-items-center ">
        <h6>WE ARE A PROFESSIONAL</h6>
        <h2>Full-Service Solution</h2>
      </div>
      <div class="service-bottom d-flex align-items-center justify-content-around ">
        <Cardservice
          v-for="(card,index) in store.cardsService"
          :key="index"
          :img="card.img"
          :title="card.title"
          :paragraph="card.paragraph" />
      </div>
    </div>

  </section>
</template>



<style lang="scss" scoped>
section{
  height: 900px;
  background-color: white;
  .container-service{
    width: 60%;
    .service-top{
      height: 300px;
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
    }
    .service-bottom{
      height: 700px;   
    }
  }
}

</style>