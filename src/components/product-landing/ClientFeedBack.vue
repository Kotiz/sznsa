<template>
  <div class="client-feedback-slider-four mt-200 md-mt-100" id="feedback">
    <div class="inner-container">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-9 col-md-8 m-auto">
            <div class="title-style-six text-center">
              <h2><span>13,000+</span> Clients love Our product</h2>
            </div>
            <!-- /.title-style-six -->
          </div>
        </div>
      </div>

      <carousel
        :items-to-show="1"
        :wrap-around="true"
        :autoplay="6000"
        :mouseDrag="true"
        :breakpoints="breakpoints"
        class="clientSliderFour"
      >
        <slide v-for="testimonial in testimonialData" :key="testimonial.id">
          <div class="item">
            <div class="feedback-wrapper">
              <img src="../../assets/images/icon/77.svg" alt="" class="icon" />
              <p class="text-start">{{ testimonial.desc }}</p>
              <div class="d-sm-flex justify-content-between align-items-center">
                <h6 class="name text-start">
                  {{ testimonial.name }} <span>{{ testimonial.country }}</span>
                </h6>
                <ul class="d-flex">
                  <li
                    class="text-start"
                    v-for="(star, index) in testimonial.ratings"
                    :key="index"
                    v-html="star.rating"
                  ></li>
                </ul>
              </div>
            </div>
            <!-- /.feedback-wrapper -->
          </div>
        </slide>
        <template #addons>
          <pagination />
        </template>
      </carousel>

      <img
        src="../../assets/images/shape/141.svg"
        alt=""
        class="shapes shape-one"
      />
      <img
        src="../../assets/images/shape/142.svg"
        alt=""
        class="shapes shape-two"
      />
    </div>
    <!-- /.inner-container -->
  </div>
</template>

<script>
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  name: "ClientFeedBack",
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
          name: "Martin Jonas,",
          country: "USA",
          desc: "Latin derived from Cicero's 1st-century BC text De Finibus Bonoru et Malorum print demo version.",
          ratings: [
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
          ],
        },
        {
          id: 2,
          name: "Martin Jonas,",
          country: "USA",
          desc: "Placeholder text commonly used in the graphic, print, and  industries for preview layouts & visual",
          ratings: [
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
          ],
        },
        {
          id: 3,
          name: "Martin Jonas,",
          country: "USA",
          desc: "From its medieval origins to the digital er, learn everything there is to know about the ubiquitous",
          ratings: [
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
          ],
        },
        {
          id: 4,
          name: "Martin Jonas,",
          country: "USA",
          desc: "Latin derived from Cicero's 1st-century BC text De Finibus Bonoru et Malorum print demo version.",
          ratings: [
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
          ],
        },
        {
          id: 5,
          name: "Martin Jonas,",
          country: "USA",
          desc: "Placeholder text commonly used in the graphic, print, and  industries for preview layouts & visual",
          ratings: [
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
          ],
        },
        {
          id: 6,
          name: "Martin Jonas,",
          country: "USA",
          desc: "From its medieval origins to the digital er, learn everything there is to know about the ubiquitous",
          ratings: [
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
            { rating: '<i class="fa fa-star" aria-hidden="true"></i>' },
          ],
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
