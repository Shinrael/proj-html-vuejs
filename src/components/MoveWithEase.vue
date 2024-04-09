<script>
import { store } from '../data/store'

  export default {
    data(){
      return{
        store,
        surtitle:'WE REMOVE THE HEADACHE FROM MOVING',
        title:'Move With Ease',
        paragraph:'With our super simpe service we can take you from getting a quote, right through to being in your new home with all of your belongings securely packed and safely delivered, even in the rooms of your choice.'
      }
    }
  }
</script>

<template>
  <section class="d-flex justify-content-center"> 
    <div class="container-move d-flex justify-content-end align-items-center">
      <div class="square text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h6>{{ surtitle }}</h6>
        <h2>{{ title }}</h2>
        <p>{{ paragraph }}</p>
        <button type="button" class="btn btn-primary ms-4 w-50 ">GET A FREE QUOTE NOW</button>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  section{
    height: 750px;
    background-image: url("../../public/img/avada-movers-movewithease-background-new.jpg");
    background-size: cover;
    .container-move{
      width: 60%;
      height: 100%;
      .square{
        height: 410px;
        width: 590px;
        background-color: #69bf14;
        border: 15px solid #4c8d53;
        h6{
          font-weight: 700;
          font-size: .9rem;
        }
        h2{
          font-weight: bold;
          font-size: 2.5rem;
          margin: 8px 0;
          border-bottom: 2px solid #8fce53;
          padding-bottom: 20px;
        }
        p{
          font-size: .8rem;
          width: 75%;
          margin-top: 10px;
        }
        button{
          margin-top:25px;
          font-size: .7rem;
          font-weight: bold;
          padding: 8px 20px;
          border-radius: 15px;
        }
      }
    }
  }
</style>