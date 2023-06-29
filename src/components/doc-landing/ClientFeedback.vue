<template>
  <div class="client-feedback-slider-two mt-180 md-mt-100">
    <img src="../../assets/images/shape/78.svg" alt="" class="shapes shape-one">
    <img src="../../assets/images/shape/79.svg" alt="" class="shapes shape-two">
    <img src="../../assets/images/shape/80.svg" alt="" class="shapes shape-three">
    <img src="../../assets/images/shape/81.svg" alt="" class="shapes shape-four">
    <img src="../../assets/images/shape/82.svg" alt="" class="shapes shape-five">
    <img src="../../assets/images/shape/83.svg" alt="" class="shapes shape-six">
    <img src="../../assets/images/shape/84.svg" alt="" class="shapes shape-seven">
    <img src="../../assets/images/shape/85.svg" alt="" class="shapes shape-eight">
    <div class="container">
      <div class="title-style-four text-center mb-100 md-mb-60">
        <div class="row">
          <div class="col-lg-7 col-md-9 m-auto">
            <h6>Feedback</h6>
            <h2>What’s Our Client Say
              <span>About Us <img src="../../assets/images/shape/line-shape-2.svg" alt=""></span>
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="slider-content">
        <carousel :items-to-show="1" :wrap-around="true" :autoplay="6000" :mouseDrag="true"
        :breakpoints="breakpoints" 
        class="clientSliderTwo">
          <slide v-for="testimonial in testimonialData" :key="testimonial.id">
            <div class="item">
              <div class="bg-wrapper">
                <img :src="testimonial.img" alt="" class="logo">
                <p >{{testimonial.desc}}</p>
                <div class="name font-rubik">{{testimonial.name}}</div>
                <div class="desig">{{testimonial.title}}</div>
              </div> <!-- /.bg-wrapper -->
            </div>
          </slide>
          <template #addons>
            <pagination />
          </template>
        </carousel>
    </div> <!-- /.slider-content -->
  </div>
</template>

<script>
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
  name: 'ClientFeedBack',
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
          img: require(`@/assets/images/logo/logo-8.png`),
          name: 'Rashed Ka..',
          title: 'Founder CreativeGigs',
          desc: 'Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.'
        },
        {
          id: 2,
          img: require(`@/assets/images/logo/logo-9.png`),
          name: 'Zubayer Hasan.',
          title: 'CEO & Founder Heloshape',
          desc: 'Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.'
        },
        {
          id: 3,
          img: require(`@/assets/images/logo/logo-10.png`),
          name: 'Eh Jewel',
          title: 'Senior Developer',
          desc: 'Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.'
        },
        {
          id: 4,
          img: require(`@/assets/images/logo/logo-9.png`),
          name: 'Zubayer Hasan.',
          title: 'CEO & Founder Heloshape',
          desc: 'Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.'
        },
        {
          id: 5,
          img: require(`@/assets/images/logo/logo-10.png`),
          name: 'Eh Jewel',
          title: 'Senior Developer',
          desc: 'Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.'
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