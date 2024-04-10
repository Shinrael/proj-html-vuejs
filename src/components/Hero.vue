<script>
import { store } from '../data/store'

  export default {
    data(){
      return{
        store,
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
        <div class="logo-container d-flex align-items-center">
          <img src="../../public/img/avada-movers-logo.png" alt="">
        </div>
        <div class="menu-container d-flex align-items-center justify-content-end">
          <ul>
          <li
            v-for="(list,index) in store.menuList"
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
    height: 700px;
    .container-hero{
      width: 60%;
      .hero-head{
        width: 100%;
        height: 100px;
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
        height: calc(800px - 100px);
        h4{
          color: #8f8f8f;
          font-weight: 700;
          font-size: .9rem;
        }
        h1{
          font-size: 3.5rem;
        }

      }
    }
  }
</style>