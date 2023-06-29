<template>
  <div class="hero-banner-seven lg-container">
    <div class="container">
      <div class="illustration-container">
        <img src="../../assets/images/assets/ils_20.svg" alt="" />
      </div>
      <div class="row">
        <div class="col-lg-6">
          <h1 class="hero-heading">
            <span>Capture</span> Idea & find it later.
          </h1>
          <p class="hero-sub-heading">
            Deski delivered blazing fast, striking soludtion
          </p>
          <form @submit.prevent="onSubmit">
            <input type="email" placeholder="ihidago@ujufidnan.gov" />
            <button>Try free demo</button>
          </form>
          <p class="term-text">
            For teams & individuals — web, mobile, Mac, Windows
          </p>
          <div class="dropdown download-btn">
            <button
              class="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Download
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item d-flex align-items-center" href="#">
                <img src="../../assets/images/icon/103.svg" alt="" />
                <span>IOS & Android</span>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <img src="../../assets/images/icon/104.svg" alt="" />
                <span>Mac & Windows</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="partner-slider-two mt-130 md-mt-80">
      <div class="container">
        <p class="text-center">
          Over <span>32K+</span> software businesses growing with Deski.
        </p>
        <div class="partnerSliderTwo">
          <carousel
            :items-to-show="5"
            :wrap-around="true"
            :autoplay="4000"
            :mouseDrag="true"
            :breakpoints="breakpoints"
          >
            <slide v-for="logo in logoSliderData" :key="logo.id">
              <div class="item"><img :src="logo.img" alt="" /></div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
    <!-- /.partner-slider-two -->
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "HeroArea",
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
          snapAlign: "left",
        },
        576: {
          itemsToShow: 3,
          snapAlign: "left",
        },
        768: {
          itemsToShow: 4,
          snapAlign: "left",
        },
        992: {
          itemsToShow: 5,
          snapAlign: "left",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
  },
  methods: {
    onSubmit() {
      console.log("Submitted");
    },
  },
};
</script>
