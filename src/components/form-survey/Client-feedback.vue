<template>
  <div class="pt-180 md-pt-110" data-aos="fade-up" id="feedback">
    <div class="client-feedback-slider-eight lg-container">
      <div class="container">
        <div class="main-content position-relative">
          <div class="clientSliderSeven">
            <swiper
              ref="mySwiper"
              :modules="modules"
              :loop="true"
              :effect="'fade'"
              :fade-effect="{ crossFade: true }"
              :navigation="{ nextEl: '.prev_cs1', prevEl: '.next_cs1' }"
              :slides-per-view="1"
            >
              <swiper-slide v-for="item in slider_data" :key="item.id">
                <div class="item">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-7">
                      <div class="feedback-wrapper">
                        <div class="tag">{{ item.tag }}</div>
                        <p class="pe-xl-5">{{ item.desc }}</p>
                        <h4 class="name">{{ item.name }}</h4>
                        <div class="cr-position">{{ item.position }}</div>
                      </div>
                      <!-- /.feedback-wrapper -->
                    </div>
                    <div class="col-lg-6 col-md-5">
                      <div class="img-meta sm-mb-30">
                        <img :src="item.img" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <ul
            class="slider-arrow d-flex align-items-center justify-content-center mt-45"
          >
            <li class="prev_cs1 slick-arrow" style="">
              <i class="flaticon-right-arrow-1"></i>
            </li>
            <li class="next_cs1 slick-arrow" style="">
              <i class="flaticon-right-arrow-1"></i>
            </li>
          </ul>
        </div>
        <!-- /.main-content -->
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectFade, Autoplay } from "swiper";

export default {
  name: "ClientFeedback",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slider_data: [
        {
          id: 1,
          tag: "Client Feedback",
          desc: "Form builders are as old as the web, but Typeform elevates the medium substantially.",
          name: "Sara Harsa",
          position: "Head of Content Marketing",
          img: require(`@/assets/images/media/img_113.jpg`),
        },
        {
          id: 2,
          tag: "Client Feedback",
          desc: "Whether you’re promoting your business, showcasing your work or opening your store.",
          name: "Hasan Masud",
          position: "Head of Content Marketing",
          img: require(`@/assets/images/media/img_114.jpg`),
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation, EffectFade, Autoplay],
    };
  },
};
</script>
