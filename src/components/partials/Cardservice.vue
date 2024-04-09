<script>
  export default {
    
    props:{
      img: String,
      title: String,
      paragraph: String,
    }
  }
</script>

<template>
  <div class="card" style="width: 18rem;">
    <img :src="img" class="card-img-top" :alt="title">
    <div class="card-body d-flex flex-column text-center ">
      <h5 class="card-title fw-bold my-3">{{ title }}</h5>
      <p class="card-text">{{ paragraph }}</p>
      <button type="button" class="btn btn-primary my-2">READ MORE</button>
    </div>
  </div>
</template>


<style lang="scss">
  .card{
    border: 15px solid #e9e9e9;
    border-radius: 0;
    .card-body{
      border-top: 15px solid #e9e9e9;
      h5{
        color: #1975c0;
      }
      p{
        color: #6b6b6b;
        font-size: .8rem;
      }
      button{
      font-size: .7rem !important;
      font-weight: bold !important;
      border-radius: 15px !important;
      }
    }  
  }
</style>