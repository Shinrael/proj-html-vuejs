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
        ],
        title : 'WE MAKE IT SIMPLE',
        pt : 'MOVING WITHOUT THE HASSLE',
        pb : 'PROFESSIONAL SERVICE WITH QUALITY AND CUSTOMERS SATISFACTION'
      }
    }
  }
</script>


<template>
  <div class="hero d-flex justify-content-center">
    <div class="container-hero">
      <div class="hero-head d-flex">
        <div class="logo-container d-flex align-items-center pb-4">
          <img src="../../public/img/avada-movers-logo.png" alt="">
        </div>
        <div class="menu-container d-flex align-items-center justify-content-end">
          <ul>
          <li
            v-for="(list,index) in menuList"
            :key="index"
            class="list-unstyled list-inline-item">
            <a class="text-decoration-none ms-4 fw-bold " href="#">{{ list }}</a>
          </li>
          <button type="button" class="btn btn-primary ms-4">FREE QUOTE</button>
        </ul>
        </div>

      </div>
      <div class="hero-center d-flex flex-column align-items-center justify-content-center">

        <h4>{{ pt }}</h4>
        <h1 class="fw-bold">{{ title }}</h1>
        <h4>{{ pb }}</h4>
        
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
        .logo-container{
          width: 30%;
          height: 100%;
        }
        .menu-container{
          width: 70%;
          height: 100%;
          a{
            color:black;
            &:hover{
              color: #6bbb14;
            }
            
          }
          button{
            font-size: .7rem;
            font-weight: bold;
            padding: 8px 20px;
            border-radius: 15px;
          }
        }
      }
      .hero-center{
        height: calc(1590px - 200px);
        h4{
          color: #8f8f8f;
          font-weight: 700;
          font-size: .9rem;
        }
        h1{
          font-size: 3rem;
        }

      }
    }
  }
</style>