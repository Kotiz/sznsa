<template>
  <div class="fancy-portfolio-five lg-container top-border bottom-border pb-90 pt-90">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-6 col-sm-8">
          <div class="title-style-one white-vr text-center text-sm-start">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-4 d-flex justify-content-center justify-content-sm-end">
          <ul class="slider-arrows d-flex style-none">
            <li class="prev_case1 ripple-btn slick-arrow" style=""><i class="flaticon-right-arrow"></i></li>
            <li class="next_case1 ripple-btn slick-arrow" style=""><i class="flaticon-right-arrow"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slider-wrapper pt-80 md-pt-50">
      <div class="portfolio_slider_one">

        <swiper class="clientSliderOne" ref="mySwiper" :modules="modules" :loop="true" :breakpoints="breakpoints" :navigation="{ nextEl: '.prev_case1', prevEl: '.next_case1' }">
          <swiper-slide v-for="item in portfolioItems.slice(23,27)" :key="item.id">
            <div class="item">
              <div class="portfolio-block-three">
                <router-link :to="`/portfolio-details/${item.id}`" class="img-holder">
                  <img :src="item.img" alt="" class="w-100 tran5s">
                </router-link>
                <div class="text">
                  <div class="tag">{{item.title}}</div>
                  <h4><router-link :to="`/portfolio-details/${item.id}`">{{item.subtitle}}</router-link></h4>
                </div>
              </div> <!-- /.portfolio-block-three -->
            </div>
          </swiper-slide>

        </swiper>

      </div> <!-- /.portfolio_slider_one -->
    </div> <!-- /.slider-wrapper -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import portfolioMixin from "@/mixin/portfolio-mixin";

export default {
  name: 'PortfolioSlider',
  mixins:[portfolioMixin],
  components: {
    Swiper,
    SwiperSlide,
  },
  data () {
    return {
        breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }
    }
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
}
</script>