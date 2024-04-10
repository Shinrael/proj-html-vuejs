<script>
import { store } from '../data/store'

  export default {
    data(){
      return{
        store,
        title : 'Award Winning Moving Company',
        paragraph : 'Lorem ipsum dolor sit amet, consecteur adipiscing elit. Nullam ac augue. Orci varius natoque penatibus et magnis dis parturient montes, ridiculus mus. Aliquam enim leo, condimentum facilisis nulla sed, cursus arcu. Aliquam enim leo.'
      }
    }
  }
</script>


<template>
  <section class="d-flex justify-content-center align-items-center flex-column">    
    <div class="award-top d-flex justify-content-center align-items-center text-white">
      <i class="fa-regular fa-paper-plane me-3 pb-3"></i>
      <p>GET A FREE QUOTE ONLINE NOW!</p>
    </div>
    <div class="container-award">  
      <div class="award-bottom d-flex justify-content-center align-items-center flex-column text-center">
        <h6>HEADACHE FREE</h6>
        <h2>{{ title }}</h2>
        <p>{{ paragraph }}</p>
        <button type="button" class="btn btn-primary ms-4">READ OUR TESTIMONIALS</button>
      </div>
    </div>

  </section>
</template>



<style lang="scss" scoped>
  section{
    height: 800px;
    background-color: #e9e9e9;
    .award-top{
        height: 140px;
        width: 100%;
        background-color: #1975c0;
        p{
          letter-spacing: 1px;
        }
      }
    .container-award{
      width: 36%;      
      .award-bottom{
        height: calc(800px - 140px);
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
          padding-bottom: 15px;
          width: 59%;
        }
        p{
          color: #6b6b6b;
          font-size: .9rem;
          padding-bottom: 15px;
        }
        button{
          font-size: .7rem;
          font-weight: bold;
          padding: 8px 20px;
          border-radius: 15px;
        }
      }
    }
  }
    
</style>