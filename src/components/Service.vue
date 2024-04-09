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
  <section class="d-flex justify-content-center">
    <div class="container-service">
      <div class="service-top">

      </div>
      <div class="service-bottom d-flex">

        <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <h6>adssdsddsds</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <h6>adssdsddsds</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div><div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <h6>adssdsddsds</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>



<style lang="scss" scoped>
section{
  height: 1000px;
  background-color: white;
  .container-service{
    width: 60%;
  }
}

</style>