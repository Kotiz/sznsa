<template>
  <div class="client-feedback-slider-six pt-170 md-pt-120" id="feedback">
    <div class="inner-container">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-7 m-auto"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div class="title-style-eight text-center">
              <h6>FEEDBACK</h6>
              <h2>Trusted by millions of creators.</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="clientSliderSix row">
        <carousel
          :items-to-show="1"
          :wrap-around="true"
          :autoplay="6000"
          :mouseDrag="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="testimonial in testimonialData" :key="testimonial.id">
            <div class="item">
              <div class="feedback-wrapper">
                <span
                  class="ribbon"
                  :style="{ background: testimonial.color }"
                ></span>
                <p>{{ testimonial.desc }}</p>
                <div class="d-flex align-items-center">
                  <img :src="testimonial.user" alt="" class="avatar" />
                  <h6 class="name">
                    {{ testimonial.name }}
                    <span>{{ testimonial.country }}</span>
                  </h6>
                </div>
              </div>
              <!-- /.feedback-wrapper -->
            </div>
          </slide>
          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
    <!-- /.inner-container -->
  </div>
</template>

<script>
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  name: "ClientFeedback",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      testimonialData: [
        {
          id: 1,
          user: require(`@/assets/images/media/img_78.png`),
          name: "Martin Jonas,",
          color: "#FF47E2",
          country: "USA",
          desc: "Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!",
        },
        {
          id: 2,
          user: require(`@/assets/images/media/img_79.png`),
          name: "Elias Brett,",
          color: "#00E5F3",
          country: "USA",
          desc: "Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!",
        },
        {
          id: 3,
          user: require(`@/assets/images/media/img_80.png`),
          name: "Rashed Ka,",
          color: "#FFCF24",
          country: "USA",
          desc: "Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!",
        },
        {
          id: 4,
          user: require(`@/assets/images/media/img_78.png`),
          name: "Martin Jonas,",
          color: "#8F6BF6",
          country: "USA",
          desc: "Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!",
        },
      ],
      breakpoints: {
        576: {
          itemsToShow: 1,
          snapAlign: "left",
        },
        768: {
          itemsToShow: 2,
          snapAlign: "left",
        },
        992: {
          itemsToShow: 3,
          snapAlign: "left",
        },
      },
    };
  },
};
</script>
