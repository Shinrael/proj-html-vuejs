<script>
import { store } from '../data/store'

  export default {
    data(){
      return{
        store,
        menuList : [
          'Home',
          'Rates',
          'Testimonials',
          'FAQ',
          'Blog',
          'Contact'
        ]
      }
    }
  }
</script>


<template>
  <div class="hero d-flex justify-content-center">
    <div class="container-hero">
      <div class="hero-head d-flex">
        <div class="logo-container d-flex align-items-center">
          <img src="../../public/img/avada-movers-logo.png" alt="">
        </div>
        <div class="menu-container d-flex align-items-center justify-content-end">
          <ul>
          <li
            v-for="(list,index) in menuList"
            :key="index"
            class="list-unstyled list-inline-item">
            <a class="text-black text-decoration-none ms-4 fw-bold " href="#">{{ list }}</a>
          </li>
        </ul>
        </div>

      </div>
      <div class="hero-center d-flex align-items-center justify-content-end">
        
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
  .hero{
    background-image: url("../../public/img/avada-movers-homeherobackground-final.jpg");
    background-size: cover;
    height: 1590px;
    .container-hero{
      width: 60%;
      .hero-head{
        width: 100%;
        height: 200px;
        border: 1px solid black;
        .logo-container{
          width: 30%;
          height: 100%;
        }
        .menu-container{
          width: 70%;
          height: 100%;
        }
      }
      .hero-center{
        height: calc(1590px - 200px);
        border: 1px solid black;

      }
    }
  }
</style>