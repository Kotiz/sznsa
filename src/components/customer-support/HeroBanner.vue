<template>
  <div class="hero-banner-two">
    <div class="container">
      <div class="row align-items-start justify-content-between">
        <div class="col-lg-6 order-lg-last">
          <div class="illustration-holder">
            <img src="../../assets/images/assets/ils-01.png" alt="" class="illustration_01">
            <img src="../../assets/images/assets/ils-01.1.png" alt="" class="shapes shape-one">
            <img src="../../assets/images/assets/ils-01.2.png" alt="" class="shapes shape-two">
            <img src="../../assets/images/assets/ils-01.3.png" alt="" class="shapes shape-three">
          </div>
        </div>

        <div class="col-xl-5 col-lg-6 order-lg-first">
          <div class="hero-text-wrapper md-mt-50">
            <h1>
              <span>
                Great ticketing
                <img src="../../assets/images/shape/line-shape-1.svg" alt="" class="cs-screen">
              </span>
              system for your customer.
            </h1>
            <p class="sub-text">For hassale free event, we are here to help you by creating online ticket.</p>
            <form @submit.prevent="onSubmit">
              <input type="email" placeholder="Enter your email">
              <button>Get Started</button>
            </form>
            <ul class="list-item d-flex mt-20">
              <li>Live chat</li>
              <li>Ticketing</li>
              <li>14 days free trial</li>
            </ul>
          </div> <!-- /.hero-text-wrapper -->
        </div>
      </div> <!-- /.row -->
    </div> <!-- /.container -->

    <div class="mt-65 md-mt-50 trusted-companies">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <p>Over <span>13,000+ Client</span> all over the world.</p>
          </div>
          <div class="col-12">
            <carousel :items-to-show="6" :wrap-around="true" :autoplay="4000" 
            :mouseDrag="true" :breakpoints="breakpoints" class="companies-logo-slider">
              <slide v-for="logo in logoSliderData" :key="logo.id">
                <div class="item"><img :src="logo.img" alt=""></div>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div> <!-- /.trusted-companies -->
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
          img: require(`@/assets/images/logo/logo-1.png`),
        },
        {
          id: 2,
          img: require(`@/assets/images/logo/logo-2.png`),
        },
        {
          id: 3,
          img: require(`@/assets/images/logo/logo-3.png`),
        },
        {
          id: 4,
          img: require(`@/assets/images/logo/logo-4.png`),
        },
        {
          id: 5,
          img: require(`@/assets/images/logo/logo-5.png`),
        },
        {
          id: 6,
          img: require(`@/assets/images/logo/logo-6.png`),
        },
        {
          id: 7,
          img: require(`@/assets/images/logo/logo-7.png`),
        },
        {
          id: 8,
          img: require(`@/assets/images/logo/logo-3.png`),
        },
        {
          id: 9,
          img: require(`@/assets/images/logo/logo-1.png`),
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
        1200: {
          itemsToShow: 6,
          snapAlign: 'left'
        }
      },
    }
  },
   methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
  components: {
    Carousel,
    Slide,
  },
}
</script>