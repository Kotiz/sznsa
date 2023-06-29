<template>
  <div class="fancy-text-block-five pt-130 pb-160 md-pt-100 md-pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 ms-auto">
          <div class="title-style-one mb-50 md-mb-30">
            <h2>For all kinds of Startup</h2>
            <p class="font-rubik">Excepteur sint occaecat cupidat non proident, sunt in culpa qui officia deserunt mollit anim est laborum.</p>
          </div> <!-- /.title-style-one -->
        </div>
      </div>

      <div class="wrapper">
        <div class="row justify-content-center">

          <div v-for="item in text_block_data" :key="item.id" class="col-lg-4 col-md-6" 
          data-aos="fade-up" data-aos-duration="1200">
            <div class="block-style-four">
              <div class="icon"><img :src="item.icon" alt=""></div>
              <h4>{{item.title}}</h4>
              <p class="font-rubik">{{item.subtitle}} </p>
              <a href="#"><i class="flaticon-right-arrow"></i></a>
            </div> <!-- /.block-style-four -->
          </div>
     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FancyTextBlockTwo',
  data () {
    return {
      text_block_data : [
        {
          id:1,
          icon:require(`@/assets/images/icon/12.svg`),
          title:'Media & Hospital',
          subtitle:'Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim'
        },
        {
          id:2,
          icon:require(`@/assets/images/icon/13.svg`),
          title:'Educational',
          subtitle:'Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim'
        },
        {
          id:3,
          icon:require(`@/assets/images/icon/14.svg`),
          title:'Financial Service',
          subtitle:'Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod tempor incididunt ut labore et dole magna aliqua. Ut enim'
        },
      ]
    }
  }
}
</script>