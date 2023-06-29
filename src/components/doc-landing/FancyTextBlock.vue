<template>
  <div class="fancy-text-block-sixteen mt-200 md-mt-80">
    <div class="container">

      <carousel :items-to-show="1" :wrap-around="true" :autoplay="4000" 
      :mouseDrag="true" class="img-slick-slider">
        <slide v-for="testimonial in testimonialData" :key="testimonial.id">
          <div class="item"><img :src="testimonial.img" alt=""></div>
        </slide>

        <template #addons>
          <pagination />
        </template>
      </carousel>

      <div class="row justify-content-between">
        <div v-for="item in blockData" :key="item.id" class="col-lg-3 col-md-4">
          <div class="block-style-eleven mt-40">
            <div class="num font-rubik">0{{item.id}}</div>
            <div class="title">{{item.title}}</div>
            <p class="font-rubik">{{item.subtitle}}</p>
          </div> <!-- /.block-style-eleven -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
  name: 'FancyTextBlock',
  data() {
    return {
      testimonialData: [
        {
          id: 1,
          img: require(`@/assets/images/assets/feature-img-12.png`),
        },
        {
          id: 2,
          img: require(`@/assets/images/assets/feature-img-12.png`),
        },
        {
          id: 3,
          img: require(`@/assets/images/assets/feature-img-12.png`),
        },
      ],
      blockData:[
        {
          id:1,
          title:'Personal Notes',
          subtitle:'A place to think and track ideas for you and your team'
        },
        {
          id:2,
          title:'Knowledge Base',
          subtitle:'A home for your team, best practices and thoughts.'
        },
        {
          id:3,
          title:'Products Doc',
          subtitle:'Beautiful docs for your APIs, Products, FAQs, & User Guides,'
        },
      ]
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
}
</script>