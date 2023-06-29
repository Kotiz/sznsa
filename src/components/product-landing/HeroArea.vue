<template>
  <div>
    <div class="hero-banner-five">
      <div class="container">
        <div class="row">
          <div class="col-xl-10 col-lg-11 col-md-10 m-auto">
            <h1 class="font-recoleta hero-heading">Build your <span>Product</span> with Deski pro app.</h1>
            <p class="hero-sub-heading">Deski delivered blazing fast performance, striking word soludtion</p>
          </div>
        </div>
        <div class="d-sm-flex align-items-center justify-content-center button-group">
          <a href="#" class="d-flex align-items-center ios-button">
            <img src="../../assets/images/icon/apple.svg" alt="" class="icon">
            <div>
              <span>Download on the</span>
              <strong>App store</strong>
            </div>
          </a>
          <a href="#" class="d-flex align-items-center windows-button">
            <img src="../../assets/images/icon/windows.svg" alt="" class="icon">
            <div>
              <span>Get it on</span>
              <strong>Windows pc</strong>
            </div>
          </a>
        </div>
        <p class="sing-in-call">Different Platform? <a href="#" data-bs-toggle="modal"
          data-bs-target="#contactModal">Contact  us</a></p>
      </div>

      <div class="img-gallery">
        <div class="container text-center">
          <div class="screen-container">
            <img src="../../assets/images/assets/screen_01.png" alt="" class="main-screen">
            <img src="../../assets/images/assets/screen_01.1.png" alt="" class="shapes screen-one">
            <img src="../../assets/images/assets/screen_01.2.png" alt="" class="shapes screen-two">
          </div> <!-- /.screen-container -->
        </div>
      </div> <!-- /.img-gallery -->
      <img src="../../assets/images/shape/133.svg" alt="" class="shapes shape-one">
      <img src="../../assets/images/shape/134.svg" alt="" class="shapes shape-two">
      <img src="../../assets/images/shape/135.svg" alt="" class="shapes shape-three">
      <img src="../../assets/images/shape/136.svg" alt="" class="shapes shape-four">

      <div class="partner-slider-two mt-110 md-mt-80">
        <div class="container">
          <p class="text-center">Over <span>32K+</span> software businesses growing with Deski.</p>
    
            <carousel :items-to-show="5" :wrap-around="true" :autoplay="5000" 
            :mouseDrag="true" :breakpoints="breakpoints" class="partnerSliderTwo">
              <slide v-for="logo in logoSliderData" :key="logo.id">
                <div class="item">
              <div class="img-meta d-flex align-items-center justify-content-center">
                <img :src="logo.img" alt="">
              </div>
            </div>
              </slide>
            </carousel>

      
        </div>
      </div> <!-- /.partner-slider-two -->
    </div>

    <!-- ContactModal start -->
    <ContactModal />
    <!-- ContactModal end -->
  </div>
</template>

<script>
import ContactModal from '../common/Modal/ContactModal.vue';
import { Carousel, Slide } from 'vue3-carousel';

export default {
  name: 'HeroArea',
  components: {
    ContactModal,
    Carousel,
    Slide,
  },
  data() {
    return {
      logoSliderData: [
        {
          id: 1,
          img: require(`@/assets/images/logo/logo-12.png`),
        },
        {
          id: 2,
          img: require(`@/assets/images/logo/logo-13.png`),
        },
        {
          id: 3,
          img: require(`@/assets/images/logo/logo-14.png`),
        },
        {
          id: 4,
          img: require(`@/assets/images/logo/logo-15.png`),
        },
        {
          id: 5,
          img: require(`@/assets/images/logo/logo-16.png`),
        },
        {
          id: 6,
          img: require(`@/assets/images/logo/logo-14.png`),
        },
        {
          id: 7,
          img: require(`@/assets/images/logo/logo-13.png`),
        },
        {
          id: 8,
          img: require(`@/assets/images/logo/logo-12.png`),
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
          itemsToShow: 4,
          snapAlign: 'left'
        },
        1200: {
          itemsToShow: 5,
          snapAlign: 'left'
        }
      },
    }
  },
}
</script>