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
  <header class="d-flex justify-content-center ">
    <div class="container-header d-flex">
      <div class="h-left d-flex text-white align-items-center pt-2">
        <i class="fa-solid fa-phone-flip me-3"></i>
        <p>Call us for a Free Quote: 1.800.555.6789</p>
      </div>
      <div class="h-right d-flex align-items-center justify-content-end pt-2">        
          <ul class="list-inline ">
            <li
              v-for="icon in store.socialIcon"
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
    height: 50px;
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