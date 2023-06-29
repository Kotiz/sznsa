<template>
  <div class="client-feedback-slider-five pt-200 md-pt-80" id="feedback">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-10 col-md-9 m-auto">
          <img
            src="../../assets/images/icon/84.svg"
            alt=""
            class="icon m-auto"
          />
          <div class="title-style-six text-center mt-25">
            <h2>Check what’s <span>Customer </span>say about us.</h2>
          </div>
          <!-- /.title-style-six -->
        </div>
      </div>

      <div class="row">
        <div class="col-xl-7 col-lg-10 m-auto">
          <div class="clientSliderFive mt-80 md-mt-50">
            <swiper
              ref="mySwiper"
              :modules="modules"
              :loop="true"
              :navigation="{ nextEl: '.next_f', prevEl: '.prev_f' }"
            >
              <swiper-slide
                v-for="testimonial in testimonialData"
                :key="testimonial.id"
              >
                <div class="item">
                  <p>
                    {{ testimonial.desc }}
                  </p>
                  <h6 class="name">{{ testimonial.name }}</h6>
                  <span class="desig">{{ testimonial.title }}</span>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <!-- /.clientSliderFive -->
          <ul class="d-flex justify-content-center slider-arrow mt-40">
            <li class="prev_f slick-arrow" style="">
              <i class="flaticon-right-arrow"></i>
            </li>
            <li class="next_f slick-arrow" style="">
              <i class="flaticon-right-arrow"></i>
            </li>
          </ul>
          <img
            src="../../assets/images/shape/156.svg"
            alt=""
            class="shapes shape-one"
          />
          <img
            src="../../assets/images/shape/157.svg"
            alt=""
            class="shapes shape-two"
          />
          <img
            src="../../assets/images/shape/158.svg"
            alt=""
            class="shapes shape-three"
          />
        </div>
      </div>
    </div>
    <div class="circle-area">
      <img src="../../assets/images/shape/155.svg" alt="" class="main-img" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

export default {
  name: "ClientFeedback",
  data() {
    return {
      testimonialData: [
        {
          id: 1,
          name: "Rashed kabir",
          title: "Designer",
          desc: "Having a home based business is a wonderful asset to your life.The problem still stands it comes time advertise your business for a cheap cost.I know you have looked answer everywhere.",
        },
        {
          id: 2,
          name: "Zubayer Hasan",
          title: "Developer",
          desc: "Having a home based business is a wonderful asset to your life.The problem still stands it comes time advertise your business for a cheap cost.I know you have looked answer everywhere.",
        },
      ],
    };
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
};
</script>
