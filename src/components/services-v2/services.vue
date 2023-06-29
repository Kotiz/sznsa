<template>
  <div class="fancy-feature-thirtyOne pt-120 pb-160 md-pt-80 md-pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 m-auto">
          <div class="title-style-four text-center pb-50 md-pb-20">
            <h2>Our Services</h2>
            <p class="sub-text pt-20">Duis aute irure dolor in reprehenderit in voluptate velit io cillum dolore eu
              fugiat nulla pariatur non labrum.</p>
          </div>
        </div>
      </div>
      <div class="row">
   
        <div v-for="item in services.slice(6,10)" :key="item.id" class="col-md-6" data-aos="fade-up" 
        :data-aos-delay="item.delay">
          <div class="block-style-thirtyTwo d-flex">
            <div class="icon d-flex align-items-center justify-content-center" 
            :style="{background:item.bg_color}">
            <img :src="item.img" alt=""></div>
            <div class="text">
              <h4>{{item.title}}</h4>
              <p>{{item.subtitle}} </p>
              <router-link :to="`/service-details/${item.id}`" class="tran3s">
                <img src="../../assets/images/icon/182.svg" alt="">
              </router-link>
            </div>
          </div> <!-- /.block-style-thirtyTwo -->
        </div>
    
      </div>
    </div>
  </div>
</template>

<script>
import servicesMixin from '@/mixin/services-mixin';

export default {
  name: 'ServicesArea',
  mixins:[servicesMixin]
}
</script>