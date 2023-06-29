<template>
  <div class="team-section-three">
    <div class="container">
      <div class="d-sm-flex align-items-center justify-content-between mb-50 sm-mb-10">
        <div class="title-style-four">
          <h2>
            <span>Our Members<img src="../../assets/images/shape/line-shape-2.svg" alt=""></span>
          </h2>
        </div>
        <ul class="slider-arrows d-flex">
          <li class="prev_c"><i class="fa fa-angle-left" aria-hidden="true"></i></li>
          <li class="next_c"><i class="fa fa-angle-right" aria-hidden="true"></i></li>
        </ul>
      </div>
    </div>
    <div class="clearfix">
      <div class="teamSliderOne">

        <swiper class="clientSliderOne" ref="mySwiper" :modules="modules" :loop="true"
          :navigation="{ nextEl: '.prev_c', prevEl: '.next_c' }" :breakpoints="breakpoints">
          <swiper-slide v-for="team in teams.slice(0, 6)" :key="team.id">
            <div class="item">
              <div class="team-member team-block-one">
                <div class="info">
                  <div class="desig">{{ team.title }}</div>
                  <div class="name">{{ team.name }}</div>
                </div>
                <div class="img-meta">
                  <img :src="team.img" alt="">
                </div>
              </div> <!-- /.team-member -->
            </div>
          </swiper-slide>
          </swiper>
      </div> <!-- /.teamSliderOne -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import teamMixin from '@/mixin/team-mixin';

export default {
  name: 'TeamSection',
  mixins: [teamMixin],
  data() {
    return {
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
}
</script>