<template>
  <div class="client-feedback-slider-nine lg-container position-relative mt-250 md-mt-150" id="testimonials">
    <img src="../../assets/images/shape/245.svg" alt="" class="shapes shape-one">
    <div class="container">
      <div class="title-style-sixteen text-center">
        <div class="upper-title">Testimonials</div>
        <h2 class="text-white">Client Feedback</h2>
      </div>
      <div class="main-content position-relative mt-60">
        <div class="clientSliderEight row">

          <carousel :items-to-show="1" :wrap-around="true" :autoplay="6000" 
          :mouseDrag="true" :breakpoints="breakpoints">
            <slide v-for="testimonial in testimonialData" :key="testimonial.id">
              <div class="item">
                <div class="bg-wrapper">
                  <div class="d-flex align-items-center">
                    <img :src="testimonial.user" alt="" class="avatar rounded-circle">
                    <div class="ps-4">
                      <h6 class="name text-start">{{testimonial.name}}</h6>
                      <span class="region text-start d-block">{{testimonial.country}}</span>
                    </div>
                  </div>
                  <p class="pt-25 pb-30 text-start">{{testimonial.desc}}</p>
                  <div class="d-flex align-items-center justify-content-between">
                    <ul class="d-flex justify-content-center rating">
                      <li v-for="(rating,index) in testimonial.ratings" :key="index">
                      <i class="fa fa-star" aria-hidden="true"></i></li>
                    </ul>
                    <img src="../../assets/images/icon/198.svg" alt="">
                  </div>
                </div> <!-- /.bg-wrapper -->
              </div>
            </slide>
            <template #addons>
              <pagination />
            </template>
          </carousel>

        </div>
      </div> <!-- /.main-content -->
    </div>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
  name: 'ClientFeedback',
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
          user: require(`@/assets/images/media/img_46.png`),
          name: 'Martin Jonas,',
          country: 'USA',
          desc: "Pellentesque gravida sceleri pretium. Quisque ut lacus quis neque lac lacinia eget augue mauris at magna. some lorem quis.",
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
          user: require(`@/assets/images/media/img_47.png`),
          name: 'Elias Brett,',
          country: 'New york',
          desc: "Pellentesque gravida sceleri pretium. Quisque ut lacus quis neque lac lacinia eget augue mauris at magna. some lorem quis.",
          ratings: [
            { rating: 1 },
            { rating: 2 },
            { rating: 3 },
            { rating: 4 },
          ]
        },
        {
          id: 3,
          user: require(`@/assets/images/media/img_48.png`),
          name: 'Rashed Ka,',
          country: 'California',
          desc: "Pellentesque gravida sceleri pretium. Quisque ut lacus quis neque lac lacinia eget augue mauris at magna. some lorem quis.",
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
          user: require(`@/assets/images/media/img_48.png`),
          name: 'Martin Jonas,',
          country: 'London',
          desc: "Pellentesque gravida sceleri pretium. Quisque ut lacus quis neque lac lacinia eget augue mauris at magna. some lorem quis.",
          ratings: [
            { rating: 1 },
            { rating: 2 },
            { rating: 3 },
            { rating: 4 },
          ]
        },
      ],

      breakpoints: {
        576: {
          itemsToShow: 1,
          snapAlign: 'left'
        },
        768: {
          itemsToShow: 2,
          snapAlign: 'left'
        },
        992: {
          itemsToShow: 3,
          snapAlign: 'left'
        },
      },
    };
  },
}
</script>