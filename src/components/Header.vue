<script>
import { store } from '../data/store'

  export default {
    data(){
      return{
        store,
        socialIcon : [
    {
      icon: 'fa-brands fa-facebook-f',
      title: 'Facebook'
    },
    {
      icon: 'fa-brands fa-twitter',
      title: 'Twitter'
    },
    {
      icon:'fa-brands fa-instagram',
      title: 'Instagram'
    },
    {
      icon: 'fa-brands fa-youtube',
      title: 'Youtube'
    }
  ],
      }
    }
    
  }
</script>


<template>
  <header class="d-flex justify-content-center ">
    <div class="container-header d-flex">
      <div class="h-left d-flex text-white align-items-center ">
        <i class="fa-solid fa-phone-flip me-3"></i>
        <p>Call us for a Free Quote: 1.800.555.6789</p>
      </div>
      <div class="h-right d-flex align-items-center justify-content-end">        
          <ul class="list-inline ">
            <li
              v-for="icon in socialIcon"
              :key="icon.title"
              class="list-unstyled list-inline-item ms-2">
              <a class="text-white" href="#"><i :class="icon.icon"></i></a>
            </li>
          </ul>
        
      </div>
    </div>    
  </header>
</template>



<style lang="scss" scoped>
  header{
    height: 90px;
    background-color: #6bbb14;
    .container-header{
      width: 60%;
      .h-left{
        width: 50%;
        i{
          padding-bottom: 16px;
        }
      }  
      .h-right{
        width: 50%;
      }  
      
    }
  }
</style>