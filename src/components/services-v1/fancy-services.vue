<template>
  <div class="fancy-feature-six mt-140 md-mt-90">
    <div class="bg-wrapper">
      <div class="shapes shape-one"></div>
      <div class="shapes shape-two"></div>
      <div class="shapes shape-three"></div>
      <div class="shapes shape-four"></div>
      <div class="shapes shape-five"></div>
      <img src="../../assets/images/shape/51.svg" alt="" class="shapes shape-six">
      <div class="container">
        <div class="title-style-two text-center mb-85 md-mb-40">
          <h2>
            <span>Explore Services<img src="../../assets/images/shape/line-shape-2.svg" alt=""></span>
          </h2>
          <div class="sub-text mt-15">Get to know all deski features, that are part of the complex multi-channel</div>
        </div>

        <div class="row justify-content-center">

          <div v-for="item in services.slice(0,6)" :key="item.id" class="col-lg-4 col-md-6 d-flex" data-aos="fade-up"
            data-aos-duration="1200" :data-aos-delay="item.delay">
            <!-- <router-link :to="`/service-details/${item.id}`"> -->
            <div class="block-style-five">
              <router-link :to="`/service-details/${item.id}`">
                <div class="icon"><img :src="item.img" alt=""></div>
                <h6 class="title"><span>{{ item.title }}</span></h6>
                <p>{{ item.subtitle }}</p>
              </router-link>
            </div>
            <!-- </router-link>  -->
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import servicesMixin from '@/mixin/services-mixin';

export default {
  name: 'FancyServices',
  mixins: [servicesMixin],
}
</script>