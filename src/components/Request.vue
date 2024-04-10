<script>
import { store } from '../data/store'

  export default {
    data(){
      return{
        store,
        title: 'Request A Free Quote',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque panatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      }
    }
  }
</script>


<template>
  <section class="d-flex justify-content-center">
    <div class="container-request text-center d-flex flex-column justify-content-center align-items-center ">
      <h2>{{ title }}</h2>
      <p>{{ paragraph }}</p>
      <div>
        <button type="button" class="btn btn-primary">CLICK HERE</button>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  section{
    height: 500px;
    background-image: url("../../public/img/avada-movers-request-quote-background.jpg");
    background-size: cover;
    .container-request{
      width: 60%;
      border: 1px solid black;
      h2{
        color: #6bbb14;
        font-weight: 700;
        font-size: 2.3rem;
      }
      p{
        color: #6b6b6b;
        font-size: .8rem;
        width: 55%;
        margin: 20px 0;
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