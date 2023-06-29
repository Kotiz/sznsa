<template>
  <div class="hero-banner-nine lg-container">
    <img src="../../assets/images/shape/190.svg" alt="" class="shapes bg-shape">
    <div class="container">
      <div class="illustration-container">
        <img src="../../assets/images/assets/screen_17.png" alt="">
      </div>
      <div class="row">
        <div class="col-lg-6">
          <h1 class="hero-heading">Simplified <span>Scheduling <img src="../../assets/images/shape/189.svg" alt=""></span> app for
            all.</h1>
          <p class="hero-sub-heading">Deski is your hub for scheduling & meetings professionally and efficiently.</p>
          <form @submit.prevent="onSubmit">
            <input type="email" placeholder="ihidago@ujufidnan.gov">
            <button class="d-flex justify-content-center align-items-center">
              <img src="../../assets/images/icon/119.svg" alt="">
              </button>
          </form>
          <p class="term-text">Already using Deski? <router-link to="/login">Sign in.</router-link></p>
        </div>
      </div>
    </div>
    <div class="partner-slider-two mt-130 md-mt-100">
      <div class="container">
        <p>Simplified scheduling for more than <span>200,000,000</span> meetings</p>
        <div class="partnerSliderTwo">
          <carousel :items-to-show="5" :wrap-around="true" :autoplay="4000" :mouseDrag="true"
            :breakpoints="breakpoints">
            <slide v-for="logo in logoSliderData" :key="logo.id">
              <div class="item">
                <div class="img-meta d-flex align-items-center">
                  <img :src="logo.img" alt="">
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div> <!-- /.partner-slider-two -->
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';

export default {
  name: "HeroBanner",
  data() {
    return {
      logoSliderData: [
        {
          id: 1,
          img: require(`@/assets/images/logo/logo-21.png`),
        },
        {
          id: 2,
          img: require(`@/assets/images/logo/logo-22.png`),
        },
        {
          id: 3,
          img: require(`@/assets/images/logo/logo-23.png`),
        },
        {
          id: 4,
          img: require(`@/assets/images/logo/logo-24.png`),
        },
        {
          id: 5,
          img: require(`@/assets/images/logo/logo-25.png`),
        },
        {
          id: 6,
          img: require(`@/assets/images/logo/logo-21.png`),
        },
        {
          id: 7,
          img: require(`@/assets/images/logo/logo-24.png`),
        },
      ],
      breakpoints: {
        0: {
          itemsToShow: 2,
          snapAlign: 'left'
        },
        576: {
          itemsToShow: 3,
          snapAlign: 'left'
        },
        768: {
          itemsToShow: 4,
          snapAlign: 'left'
        },
        992: {
          itemsToShow: 5,
          snapAlign: 'left'
        },
      },
    }
  },
  components: {
    Carousel,
    Slide,
  },
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>