<template>
  <div class="pt-225 md-pt-120" id="product">
    <div class="fancy-feature-thirtyFive position-relative lg-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="block-style-thirtySix">
              <div class="title-style-fourteen">
                <div class="upper-title">TEMPLATE LIBRARY</div>
                <h2>Ton of Built in Library.</h2>
              </div>
              <div class="tag-line">
                Template library help you to create your won style.
              </div>
              <ul
                class="slider-arrows d-flex justify-content-center justify-content-lg-end pt-25 md-pt-10 md-pb-30"
              >
                <li class="prev_case2 ripple-btn slick-arrow" style="">
                  <i class="flaticon-right-arrow"></i>
                </li>
                <li class="next_case2 ripple-btn slick-arrow" style="">
                  <i class="flaticon-right-arrow"></i>
                </li>
              </ul>
            </div>
            <!-- /.block-style-thirtySix -->
          </div>
        </div>
      </div>
      <div class="slider-wrapper">
        <div class="portfolio_slider_two">
          <swiper
            ref="mySwiper"
            :modules="modules"
            :loop="true"
            :navigation="{ nextEl: '.prev_case2', prevEl: '.next_case2' }"
            :breakpoints="breakpoints"
          >
            <swiper-slide v-for="item in feature_slider" :key="item.id">
              <div class="item">
                <div class="card-block">
                  <img :src="item.img" alt="" class="w-100" />
                  <div
                    class="hover tran3s d-flex align-items-center justify-content-center flex-column"
                  >
                    <a href="#" class="edit tran3s">Edit</a>
                    <a href="#" class="view tran3s">View</a>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- /.portfolio_slider_two -->
      </div>
      <!-- /.slider-wrapper -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

export default {
  name: "FeatureSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      feature_slider: [
        { id: 1, img: require(`@/assets/images/media/img_110.jpg`) },
        { id: 2, img: require(`@/assets/images/media/img_111.jpg`) },
        { id: 3, img: require(`@/assets/images/media/img_112.jpg`) },
        { id: 4, img: require(`@/assets/images/media/img_111.jpg`) },
      ],
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
    };
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
