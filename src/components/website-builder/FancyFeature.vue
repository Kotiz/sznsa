<template>
  <div class="fancy-feature-seventeen lg-container mt-150 md-mt-90" id="feature">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 m-auto">
          <div class="title-style-thirteen text-center mb-130 md-mb-90">
            <div class="upper-title">Features</div>
            <h2> We’ve ton of features for give you
              <span>the best website<img src="../../assets/images/shape/line-shape-14.svg" alt=""></span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bottom-border pb-50">
        <div class="row">
    
          <div v-for="item in featureData" :key="item.id" class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
            <div class="block-meta">
              <div class="icon d-flex align-items-end">
                <img :src="item.icon" alt="">
              </div>
              <h4>{{item.title}}</h4>
              <p>{{item.subtitle}}</p>
            </div> <!-- /.block-meta -->
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
      featureData : [
        {id:1,icon:require(`@/assets/images/icon/94.svg`),title:'Drag & Drop',subtitle:'The intuitive and flexible drag & drop editor saves time on development with great speed.'},
        {id:2,icon:require(`@/assets/images/icon/95.svg`),title:'Edited by Device',subtitle:"Lorem ipsum began as scrambl nonsensical Latin derived from Cicero's quis",delay:'100'},
        {id:3,icon:require(`@/assets/images/icon/96.svg`),title:'Global Design',subtitle:"Creation timelines for the standard lorem ipsum passage vary, with qius some citing.",delay:'200'},
        {id:4,icon:require(`@/assets/images/icon/97.svg`),title:'App Integrations',subtitle:"Lorem ipsum began as scrambl nonsensical Latin derived from Cicero's quis"},
        {id:5,icon:require(`@/assets/images/icon/98.svg`),title:'Developer Mode',subtitle:"Lorem ipsum was purposefully designed to have no meaning, but appear like text",delay:'100'},
        {id:6,icon:require(`@/assets/images/icon/99.svg`),title:'Content Import',subtitle:"Letraset's dry-transfer sheets later entered the digital world via Aldus PageMaker.",delay:'200'},
      ]
    }
  }
}
</script>