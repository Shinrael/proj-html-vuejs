<script>
  export default {
    props:{
      img: String,
      name: String,
      description: String,
    }
  }
</script>


<template>
  <div class="card-test">
    <div class="test-image mb-4">
    <img :src="img" :alt="name" class="rounded-circle" width="90">
    </div>
    <div class="test-content text-center d-flex flex-column align-items-center ">
    <h4 class="mb-4">{{ name }}</h4>
    <p>{{ description }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .test-content{
    h4{
      color: #1975c0;
      font-weight: 600;
    }
    p{
      color: #6b6b6b;
      font-size: .8rem;
      width: 80%;
    }
  }
</style>