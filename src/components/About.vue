<script>
import { store } from '../data/store'

  export default {
    data(){
      return{
        store,
      }
    }
  }
</script>


<template>
  <section class="d-flex justify-content-center flex-column align-items-center ">
    <div class="about-container d-flex align-items-center justify-content-between">

      <div class="about-section d-flex flex-column justify-content-between">
        <h6 class="fw-bold">ABOUT</h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Duis convallis ex ut sem accumsan vehicula. Integer elit arcu, hendrerit id sapien ut, facilisis accumsan arcu.</p>
        <div class="img-container">
          <img src="../../public/img/avada-movers-logo.png" alt="">
        </div>
      </div>

      <div class="avada-movers d-flex flex-column justify-content-between">
        <h6 class="fw-bold">AVADA MOVERS</h6>
        <a
          href="#"
          v-for="(el,index) in store.avadaMovers"
          :key="index">{{ el }}</a>
      </div>

      <div class="recent-posts d-flex flex-column justify-content-between">
        <h6 class="fw-bold">RECENT POSTS</h6>
        <a
          href="#"
          v-for="(elmts,index) in store.recentPosts"
          :key="index">
        {{ elmts }}
        </a>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  section{
    height: 500px;
    background-color: white;
    border-top: 15px solid #6bbb14;
    padding-top: 15px;
    .line-green{
      height: 15px;
      width: 100%;
      background-color: #6bbb14;
    }
    .about-container{
      width: 60%;
      height: calc(600px - 15px);
      .about-section{
        width: 30%;
        height: 50%;
        p{
          font-size: .9rem;
        }
      }
      .avada-movers{
        width: 30%;
        height: 50%;
        a{
          font-size: .9rem;
          text-decoration: none;
          color: black;
          &:hover{
            color: #6bbb14
          }
        }
      }
      .recent-posts{
        width: 30%;
        height: 50%;
        a{
          font-size: .9rem;
          text-decoration: none;
          color: black;
          &:hover{
            color: #6bbb14
          }
        }
      }
    }
  }
</style>