<template>
  <div class="fancy-text-block-four pt-130 pb-120 md-pt-100 md-pb-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-8">
          <div class="title-style-one mb-40 md-mb-20">
            <h2>For all kinds of Teams</h2>
            <p class="font-rubik">Duis aute irure dolor in reprehenderit in voluptate velit io cillum dolore eu fugiat nulla pariatur non labrum.</p>
          </div> <!-- /.title-style-one -->
        </div>
      </div>

      <div class="wrapper">
        <div class="row justify-content-center">

          <div v-for="item in text_block_data" :key="item.id" class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
            <div class="block-style-three">
              <div class="icon"><img :src="item.icon" alt=""></div>
              <h4>{{item.title}}</h4>
              <p class="font-rubik">{{item.subtitle}} </p>
            </div> <!-- /.block-style-three -->
          </div>
      
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FancyTextBlock',
  data () {
    return {
      text_block_data : [
        {
          id:1,
          icon:require(`@/assets/images/icon/09.svg`),
          title:'Project management',
          subtitle:'tempor incididunt ut labor culpa dolore magna aliqua. Ut enim qui minim veniam,'
        },
        {
          id:2,
          icon:require(`@/assets/images/icon/10.svg`),
          title:'Customer Support',
          subtitle:'Excepteur sint occaecat cupidatat non proident, sunt in culpa non officia.'
        },
        {
          id:3,
          icon:require(`@/assets/images/icon/11.svg`),
          title:'Marketing',
          subtitle:'consectetur adipiscing elit, sed dou eiusmod tempor incididu ut lab et dolore.'
        },
      ]
    }
  }
}
</script>