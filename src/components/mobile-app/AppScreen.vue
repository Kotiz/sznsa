<template>
  <div class="app-screen-preview-one">
    <div class="container">
      <div class="app-preview-slider-one">

        <carousel :items-to-show="1" :wrap-around="true" :autoplay="4000" :mouseDrag="true" 
        :breakpoints="breakpoints">
          <slide v-for="screen in appScreenData" :key="screen.id">
            <div class="item">
              <div class="img-holder">
                <img :src="screen.img" alt="">
              </div>
            </div>
          </slide>
        </carousel>

      </div>
    </div>
    <img src="../../assets/images/shape/bg5.svg" alt="" class="shapes round-bg">
    <img src="../../assets/images/shape/216.svg" alt="" class="shapes shape-one">
    <img src="../../assets/images/shape/217.svg" alt="" class="shapes shape-two">
    <img src="../../assets/images/shape/218.svg" alt="" class="shapes shape-three">
    <img src="../../assets/images/shape/219.svg" alt="" class="shapes shape-four">
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';

export default {
  name: 'AppScreen',
  data() {
    return {
      appScreenData: [
        { id: 1, img: require(`@/assets/images/assets/screen_21.png`) },
        { id: 2, img: require(`@/assets/images/assets/screen_22.png`) },
        { id: 3, img: require(`@/assets/images/assets/screen_23.png`) },
        { id: 4, img: require(`@/assets/images/assets/screen_22.png`) },
      ],
       breakpoints: {
        0: {
          itemsToShow: 1,
          snapAlign: 'left'
        },
        576: {
          itemsToShow: 2,
          snapAlign: 'left'
        },
        992: {
          itemsToShow: 3,
          snapAlign: 'left'
        },
      },
    }
  },
  components: {
    Carousel,
    Slide,
  },
}
</script>