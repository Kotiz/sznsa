<template>
  <div class="fancy-feature-eight pt-150 md-pt-100">
    <div class="container">
      <div class="title-style-four text-center mb-60 md-mb-40">
        <div class="row">
          <div class="col-lg-10 m-auto">
            <h6>How it works</h6>
            <h2>Awesome place to start creating your
              <span>first doc with <img src="../../assets/images/shape/line-shape-2.svg" alt=""></span>deski
            </h2>
          </div>
        </div>
      </div>

      <div v-for="item in block_style_data" :key="item.id" class="block-style-twelve">
        <div class="row">
          <div :class="`col-lg-6 col-md-8 ${item.m} ${item.order_first ? item.order_first : ''}`" :data-aos="item.fade_first" data-aos-duration="1200">
            <div class="illustration-holder">
              <img :src="item.img" alt="">
            </div>
          </div>
          <div :class="`col-lg-5 ${item.order_last ? item.order_last : ''}`" 
          :data-aos="item.fade_last" data-aos-duration="1200">
            <div class="text-wrapper">
              <h6>{{item.sm_text}}</h6>
              <h2 class="font-rubik title">{{item.title}}</h2>
              <p> {{item.subtitle}} </p>
            </div> <!-- /.text-wrapper -->
          </div>
        </div>
      </div> <!-- /.block-style-twelve -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'FancyFeatureTwo',
  data () {
    return {
      block_style_data : [
        {
          id:1,
          img:require(`@/assets/images/assets/ils_10.svg`),
          order_first:'order-lg-last',
          order_last:'order-lg-first',
          fade_first:'fade-left',
          fade_last:'fade-right',
          m:'ms-auto',
          sm_text:'Documentation',
          title:'A home for your team, best-practices & thoughts.',
          subtitle:'With deksi docs, you can write, edit, let it collaborate wherever you are lorem dumy text introduction.',
        },
        {
          id:2,
          img:require(`@/assets/images/assets/ils_11.svg`),
          fade_first:'fade-right',
          fade_last:'fade-left',
          m:'me-auto',
          sm_text:'User Guides',
          title:'Docs for your APIs, products, FAQs and user guides,',
          subtitle:'With deksi docs, you can write, edit, let it collaborate wherever you are lorem dumy text introduction.',
        },
        {
          id:3,
          img:require(`@/assets/images/assets/ils_12.svg`),
          order_first:'order-lg-last',
          order_last:'order-lg-first',
          fade_first:'fade-left',
          fade_last:'fade-right',
          m:'ms-auto',
          sm_text:'Combine Idea',
          title:'A place to think and track ideas for you & your team',
          subtitle:'With deksi docs, you can write, edit, let it collaborate wherever you are lorem dumy text introduction.',
        },
      ]
    }
  }
}
</script>