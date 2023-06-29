<template>
  <div class="fancy-feature-thirtyTwo pt-110 pb-160 md-pt-90 md-pb-100">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
          <div class="title-style-eleven">
            <h2>Explore our service.</h2>
          </div>
        </div>

        <div v-for="item in services.slice(10,15)" :key="item.id" class="col-lg-4 col-md-6" data-aos="fade-up"
          data-aos-duration="1200" :data-aos-delay="item.delay">
          <div class="block-style-twentyTwo">
            <router-link :to="`/service-details/${item.id}`">
              <div class="icon d-flex align-items-center justify-content-center" 
              :style="{ background: item.bg_color }">
                <img :src="item.img" alt="">
              </div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.subtitle }}</p>
            </router-link>
          </div> <!-- /.block-style-twentyTwo -->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import servicesMixin from '@/mixin/services-mixin';

export default {
  name: 'ServicesArea',
  mixins: [servicesMixin]
}
</script>