<template>
  <div class="fancy-feature-six mt-140 md-mt-70">
    <div class="bg-wrapper">
      <div class="shapes shape-one"></div>
      <div class="shapes shape-two"></div>
      <div class="shapes shape-three"></div>
      <div class="shapes shape-four"></div>
      <div class="shapes shape-five"></div>
      <img src="../../assets/images/shape/51.svg" alt="" class="shapes shape-six">
      <div class="container">
        <div class="title-style-two text-center mb-85 md-mb-40">
          <h2>Our
            <span>Features <img src="../../assets/images/shape/line-shape-2.svg" alt=""></span>
            list
          </h2>
          <div class="sub-text mt-15">Get to know all deski features, that are part of the complex multi-channel</div>
        </div>

        <div class="row">
     
          <div v-for="item in feature_data" :key="item.id" class="col-md-6 d-flex" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
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
</template>

<script>
export default {
  name: 'FancyFeature',
  data () {
    return {
      feature_data : [
        {
          id:1,
          icon:require(`@/assets/images/icon/20.svg`),
          title:'Smart popups',
          subtitle:'Create customized popups and show the right message at the right time.'
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
        },
       {
          id:4,
          icon:require(`@/assets/images/icon/21.svg`),
          title:'Embeded Forms',
          subtitle:'Collect website leads with embedded forms and integrate easily.',
          delay:'100'
        },
        {
          id:5,
          icon:require(`@/assets/images/icon/22.svg`),
          title:'Autoresponder',
          subtitle:'Send welcome email to your new subscribers with a code.',
        },
        {
          id:6,
          icon:require(`@/assets/images/icon/20.svg`),
          title:'Smart popups',
          subtitle:'Create customized popups and show the right message at the right time.',
          delay:'100'
        },
      ]
    }
  }
}
</script>