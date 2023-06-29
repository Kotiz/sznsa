<template>
  <div class="fancy-feature-five mt-200 md-mt-100">
    <div class="bg-wrapper">
      <div class="shapes shape-one"></div>
      <div class="shapes shape-two"></div>
      <div class="shapes shape-three"></div>
      <div class="shapes shape-four"></div>
      <img src="../../assets/images/shape/47.svg" alt="" class="shapes shape-five">
      <div class="container">
        <div class="title-style-two text-center mb-60 md-mb-40">
          <div class="row">
            <div class="col-xl-8 col-lg-9 m-auto">
              <p>Our Values</p>
              <h2>We’r driven by our values</h2>
              <div class="sub-text">Deski stand with friendly interface with lots of features that help our team and csutomer to collbarate easily.</div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">

          <div v-for="item in feature_data" :key="item.id" class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
            <div class="block-style-seven">
              <div class="icon d-flex align-items-end"><img :src="item.icon" alt=""></div>
              <div class="feature-info">{{item.title}}</div>
              <p class="font-rubik">{{item.subtitle}}</p>
            </div> <!-- /.block-style-seven -->
          </div>

        </div>
      </div>
    </div> <!-- /.bg-wrapper -->
  </div>
</template>

<script>
export default {
  name: 'FancyFeature',
  data () {
    return {
      feature_data : [
        {id:1,icon:require(`@/assets/images/icon/35.svg`),title:'Customer Value',subtitle:'A place to think and track ideas for you and your team'},
        {id:2,icon:require(`@/assets/images/icon/36.svg`),title:'Trusted & Reliable',subtitle:'A home for your team, best practices and thoughts.',delay:'100'},
        {id:3,icon:require(`@/assets/images/icon/37.svg`),title:'Fast Response',subtitle:'Beautiful docs for your APIs, Products, FAQs, & User Guides,',delay:'200'},
      ]
    }
  }
}
</script>