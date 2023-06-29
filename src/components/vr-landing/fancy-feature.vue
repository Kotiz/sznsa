<template>
  <div class="fancy-feature-thirtySix lg-container pt-170 pb-110 md-pt-120 md-pb-60">
    <div class="container position-relative">
      <div class="row">
        <div class="col-xl-3 col-lg-4" data-aos="fade-right" data-aos-duration="1200">
          <div class="title-style-eleven md-mb-40 text-center text-lg-start">
            <h2 class="text-white">Our latest Arrival.</h2>
          </div>
        </div>
        <div class="col-xl-9 col-lg-8">
          <div class="product_slider_one row">

            <swiper ref="mySwiper" :modules="modules" :loop="true"
              :navigation="{ nextEl: '.prev_p1', prevEl: '.next_p1' }" :breakpoints="breakpoints">
              <swiper-slide v-for="item in products_slider" :key="item.id">
                <div class="item">
                  <div class="block-style-thirtySeven">
                    <div class="img-meta d-flex align-items-center justify-content-center">
                      <img :src="item.img" alt=""></div>
                    <h4 class="p-title mt-25"><a href="#">{{item.title}}</a></h4>
                    <div class="price mt-15 mb-15">${{item.price}}.00</div>
                    <ul class="d-flex justify-content-center rating">
                      <li v-for="(rating,index) in item.ratings" :key="index">
                      <i class="fa fa-star" aria-hidden="true"></i></li>
                    </ul>
                  </div> <!-- /.block-style-thirtySeven -->
                </div>
              </swiper-slide>
            </swiper>

          </div>
        </div>
        <ul class="slider-arrows d-flex justify-content-center justify-content-lg-start style-none">
          <li class="prev_p1 slick-arrow" style=""><i class="flaticon-right-arrow"></i></li>
          <li class="next_p1 slick-arrow" style=""><i class="flaticon-right-arrow"></i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

export default {
  name: 'FancyFeature',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products_slider: [
        {
          id: 1,
          img: require(`@/assets/images/media/img_115.png`),
          price: 72.00,
          title: 'Oculus Quest',
          ratings: [
            { rating: 1 },
            { rating: 2 },
            { rating: 3 },
            { rating: 4 },
            { rating: 5 },
          ]
        },
        {
          id: 2,
          img: require(`@/assets/images/media/img_116.png`),
          price: 27.00,
          title: 'VR Controller',
          ratings: [
            { rating: 1 },
            { rating: 2 },
            { rating: 3 },
            { rating: 4 },
            { rating: 5 },
          ]
        },
        {
          id: 3,
          img: require(`@/assets/images/media/img_117.png`),
          price: 382.00,
          title: 'Play Station 2',
          ratings: [
            { rating: 1 },
            { rating: 2 },
            { rating: 3 },
            { rating: 4 },
            { rating: 5 },
          ]
        },
        {
          id: 4,
          img: require(`@/assets/images/media/img_116.png`),
          price: 27.00,
          title: 'VR Controller',
          ratings: [
            { rating: 1 },
            { rating: 2 },
            { rating: 3 },
            { rating: 4 },
            { rating: 5 },
          ]
        },
      ],
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