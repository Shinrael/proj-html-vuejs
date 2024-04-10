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
  <footer class="d-flex justify-content-center">
    <div class="footer-container text-white ">
      <div class="footer-top d-flex justify-content-center align-items-end">
        <p> &copy Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Right Reserved | Powered by WordPress</p>
      </div>
      <div class="footer-down d-flex justify-content-center align-items-start">
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
  </footer>
</template>



<style lang="scss" scoped>
footer{
  height: 130px;
  background-color: #6bbb14;
  .footer-container{
    width: 60%;
    .footer-top{
      width: 100%;
      height: 50%;
      p{
        font-size: .9rem;
        
      }
    }
    .footer-down{
      width: 100%;
      height: 50%;
    }
  }
}
</style>