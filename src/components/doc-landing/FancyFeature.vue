<template>
  <div class="fancy-feature-eight mt-110 md-mt-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 m-auto">
          <div class="title-style-four text-center mb-80 md-mb-30">
            <h2>Create documentation with technical-free writing,
              <span> & effortless <img src="../../assets/images/shape/line-shape-3.svg" alt=""></span>
              hosting.
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-11 m-auto">
          <div class="row">
            <div v-for="item in fancyFeatureData" :key="item.id" class="col-md-6" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
              <div class="block-style-ten">
                <div class="icon"><img :src="item.img" alt=""></div>
                <h6 class="title">{{item.category}}</h6>
                <p>{{item.title}}</p>
                <a href="#"><img src="../../assets/images/icon/56.svg" alt=""></a>
              </div> <!-- /.block-style-ten -->
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
          img:require(`@/assets/images/icon/55.svg`),
          category:'Personal',
          title:'With deski docs, you can write, edit, and collaborate wherever you are. For Free.',
        },
        {
          id:2,
          img:require(`@/assets/images/icon/57.svg`),
          category:'Business',
          title:'The deski Docs you love with added security and control for teams.',
          delay:'100'
        },
      ]
    }
  }
}
</script>