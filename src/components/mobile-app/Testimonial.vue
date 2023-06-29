<template>
  <div class="client-feedback-slider-seven pt-250 md-pt-100" id="feedback">
    <div class="inner-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto">
            <img src="../../assets/images/icon/143.svg" alt="" class="m-auto" />
            <div class="title-style-eleven text-center mt-30">
              <h2>Check what’s our client say about us.</h2>
            </div>
            <!-- /.title-style-eleven -->
          </div>
        </div>

        <div class="row">
          <div class="col-xl-8 col-lg-10 m-auto">
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
                    <span>{{ testimonial.title }}</span>
                  </div>
                </swiper-slide>

                <ul class="d-flex justify-content-center slider-arrow mt-40">
                  <li class="prev_f slick-arrow" style="">
                    <i class="flaticon-right-arrow"></i>
                  </li>
                  <li class="next_f slick-arrow" style="">
                    <i class="flaticon-right-arrow"></i>
                  </li>
                </ul>
              </swiper>
            </div>
            <!-- /.clientSliderFive -->
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
    </div>
    <!-- /.inner-container -->
    <img src="../../assets/images/shape/bg7.svg" alt="" class="bg-image" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

export default {
  name: "TestimonialArea",
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
