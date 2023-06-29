<template>
  <div class="fancy-feature-four mt-20">
    <div class="bg-wrapper">
      <img src="../../assets/images/shape/18.svg" alt="" class="shapes shape-right">
      <img src="../../assets/images/shape/19.svg" alt="" class="shapes shape-left">
      <div class="container">
        <div class="title-style-two text-center mb-100 md-mb-50">
          <div class="row">
            <div class="col-xl-8 col-lg-9 col-md-10 m-auto">
              <p>What we do</p>
              <h2>Use deski to drive growth at
                <span>your business. <img src="../../assets/images/shape/line-shape-2.svg" alt=""></span>
              </h2>
            </div>
          </div>
        </div>
        <div class="inner-content">
          <img src="../../assets/images/shape/20.svg" alt="" class="shapes shape-one">
          <img src="../../assets/images/shape/21.svg" alt="" class="shapes shape-two">
          <div class="row justify-content-center">
            <div v-for="item in fancyFeatureData" :key="item.id" class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
              <div class="block-style-five">
                <div class="icon"><img :src="item.icon" alt=""></div>
                <h6 class="title"><span>{{item.title}}</span></h6>
                <p>{{item.subtitle}}</p>
              </div> <!-- /.block-style-five -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FancyFeature',
  data () {
    return {
      fancyFeatureData:[
        {
          id:1,
          icon:require(`@/assets/images/icon/20.svg`),
          title:'Smart popups',
          subtitle:'Create customized popups and show the right message at the right time. lorem dummy.'
        },
        {
          id:2,
          icon:require(`@/assets/images/icon/21.svg`),
          title:'Embeded Forms',
          subtitle:'Collect website leads with embedded forms and integrate easily.',
          delay:'100'
        },
        {
          id:3,
          icon:require(`@/assets/images/icon/22.svg`),
          title:'Autoresponder',
          subtitle:'Send welcome email to your new subscribers with a code.',
          delay:'200'
        },
      ]
    }
  }
}
</script>