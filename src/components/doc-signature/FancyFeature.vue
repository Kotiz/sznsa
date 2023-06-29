<template>
  <div class="fancy-feature-twentySix lg-container pt-160 md-pt-100">
    <div class="container">
      <div class="row">

        <div v-for="item in featureData" :key="item.id" class="col-md-6" :data-aos="item.fade">
          <div class="block-style-twentySix text-center mb-40" :style="{background:item.bg_color}">
            <h6 :style="{color:item.color}">{{item.title}}</h6>
            <h4>{{item.subtitle}}</h4>
            <a href="#" class="try-btn" :style="{borderColor:item.border_color,display:'inline-block'}">Try it Free</a>
            <img :src="item.shape_1" alt="" class="shapes shape-one">
            <img :src="item.shape_2" alt="" class="shapes shape-two">
          </div> <!-- /.block-style-twentySix -->
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
        {
          id:1,
          fade:'fade-right',
          bg_color:'#E8FBFF',
          color:'#8BBDC8',
          border_color:'#C0E9F2',
          title:'Deski eSignature',
          subtitle:'Join 1,000,000 customers & hundreds of millions of signers',
          shape_1:require(`@/assets/images/shape/222.jpg`),
          shape_2:require(`@/assets/images/shape/223.jpg`),
        },
        {
          id:2,
          fade:'fade-left',
          bg_color:'#FFEFE7',
          color:'#DCAC91',
          border_color:'#F5D1BD',
          title:'Agreement Cloud',
          subtitle:'Connect and automate your entire agreement process.',
          shape_1:require(`@/assets/images/shape/224.jpg`),
          shape_2:require(`@/assets/images/shape/225.jpg`),
        },
      ]
    }
  }
}
</script>