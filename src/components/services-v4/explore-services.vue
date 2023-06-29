<template>
  <div class="fancy-feature-thirtyThree mt-60 md-mt-20">
    <div class="container">
      <div class="title-style-eleven text-center pb-50 md-pb-30">
        <h2>Explore Service.</h2>
        <p class="pt-20">Get to know all deski features, that are part of the complex multi-channel</p>
      </div>

      <div class="row">

        <div v-for="item in services.slice(15,21)" :key="item.id" class="col-lg-4 col-md-6">
          <div class="block-style-thirtyFour">
            <img :src="item.img" alt="" class="w-100 tran5s">
            <div class="hover-content">
              <h4 class="font-gordita">
                <router-link :to="`/service-details/${item.id}`" v-html="item.title"></router-link>
              </h4>
              <router-link :to="`/service-details/${item.id}`" class="arrow">
              <i class="flaticon-right-arrow-1"></i></router-link>
            </div> <!-- /.hover-content -->
          </div> <!-- /.block-style-thirtyFour -->
        </div>

      </div>

      <div class="bottom-border">
        <div class="text-center mt-130 md-mt-80 pb-150 md-pb-80">
          <div class="row">
            <div class="col-xl-8 col-lg-10 m-auto">
              <h2 class="contact-title font-gordita">Convinced to work on a new project?</h2>
              <router-link to="/contact-us-cs" class="theme-btn-one mt-40">Contact Now</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import servicesMixin from '@/mixin/services-mixin';

export default {
  name: 'ExploreServices',
  mixins:[servicesMixin]
}
</script>