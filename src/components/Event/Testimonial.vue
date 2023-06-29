<template>
  <div class="client-feedback-slider-three mb-250 md-mb-150">
    <div class="container">
      <div class="title-style-five text-center mb-80 md-mb-50">
        <div class="row">
          <div class="col-lg-7 col-md-9 m-auto">
            <h2><span>Check what’s our client </span>say about us.</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-7 col-lg-9 m-auto">
          <div class="testimonial-slider-wrapper">
            <img src="../../assets/images/icon/65.svg" alt="" class="m-auto" />
            <swiper class="clientSliderThree" ref="mySwiper" :modules="modules" :loop="true" 
            :navigation="{ nextEl: '.nextT',prevEl: '.prevT'}">
              <swiper-slide v-for="testimonial in testimonialData" :key="testimonial.id">
                <div class="item">
                  <p>
                    {{ testimonial.desc }}
                  </p>
                  <h6 class="name">{{ testimonial.name }}</h6>
                  <span class="desig">{{ testimonial.title }}</span>
                </div>
              </swiper-slide>

              <ul class="slider-arrow d-flex align-items-center justify-content-center mt-45 ">
                <li class="prevT"><i class="flaticon-right-arrow-1"></i></li>
                <li class="nextT"><i class="flaticon-right-arrow-1"></i></li>
              </ul>
            </swiper>
          </div>
          <!-- /.testimonial-slider-wrapper -->
        </div>
      </div>
    </div>
    <!-- /.container -->
    <img src="../../assets/images/media/img_59.png" alt="" class="shapes shape_1" />
    <img src="../../assets/images/media/img_60.png" alt="" class="shapes shape_2" />
    <img src="../../assets/images/media/img_61.png" alt="" class="shapes shape_3" />
    <img src="../../assets/images/media/img_62.png" alt="" class="shapes shape_4" />
    <img src="../../assets/images/media/img_63.png" alt="" class="shapes shape_5" />
    <img src="../../assets/images/media/img_64.png" alt="" class="shapes shape_6" />
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