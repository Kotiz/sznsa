<template>
  <div class="client-feedback-slider-six pt-250 md-pt-120" id="feedback">
    <div class="inner-container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <img src="../../assets/images/icon/100.svg" alt="" class="m-auto" />
            <div class="title-style-seven text-center mt-20">
              <h2><span>Client</span> love us & we love them</h2>
              <p>Kind words from our deski Clients.</p>
            </div>
            <!-- /.title-style-six -->
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
                <p class="text-start">{{ testimonial.desc }}</p>
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
  name: "TestimonialArea",
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
          country: "USA",
          desc: "Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!",
        },
        {
          id: 2,
          user: require(`@/assets/images/media/img_79.png`),
          name: "Elias Brett,",
          country: "USA",
          desc: "Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!",
        },
        {
          id: 3,
          user: require(`@/assets/images/media/img_80.png`),
          name: "Rashed Ka,",
          country: "USA",
          desc: "Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!",
        },
        {
          id: 4,
          user: require(`@/assets/images/media/img_78.png`),
          name: "Martin Jonas,",
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
