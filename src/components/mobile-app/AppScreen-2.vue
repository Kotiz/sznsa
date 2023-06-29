<template>
  <div class="app-screen-preview-two pt-200 md-pt-130">
    <div class="container">
      <div class="title-style-eleven text-center mb-120 md-mb-70">
        <h2>App Screenshot</h2>
      </div>
    </div>

    <div class="app-preview-slider-two">
      <carousel
        :items-to-show="1"
        :wrap-around="true"
        :autoplay="4000"
        :mouseDrag="true"
        :breakpoints="breakpoints"
      >
        <slide v-for="screen in appScreenData" :key="screen.id">
          <div class="item">
            <div class="img-holder">
              <img :src="screen.img" alt="" />
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <!-- /.app-preview-slider-two -->
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "AppScreenTwo",
  data() {
    return {
      appScreenData: [
        { id: 1, img: require(`@/assets/images/assets/screen_25.png`) },
        { id: 2, img: require(`@/assets/images/assets/screen_26.png`) },
        { id: 3, img: require(`@/assets/images/assets/screen_27.png`) },
        { id: 4, img: require(`@/assets/images/assets/screen_28.png`) },
        { id: 5, img: require(`@/assets/images/assets/screen_27.png`) },
        { id: 6, img: require(`@/assets/images/assets/screen_25.png`) },
      ],
      breakpoints: {
        0: {
          itemsToShow: 1,
          snapAlign: "left",
        },
        576: {
          itemsToShow: 2,
          snapAlign: "left",
        },
        768: {
          itemsToShow: 3,
          snapAlign: "left",
        },
        992: {
          itemsToShow: 4,
          snapAlign: "left",
        },
        1200: {
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
};
</script>
