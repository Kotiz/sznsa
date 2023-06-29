<template>
  <div class="fancy-text-block-eighteen mt-170 md-mt-80">
    <img src="../../assets/images/assets/ils_13.svg" alt="" class="illustration" data-aos="fade-up" data-aos-duration="1200">
    <!-- counter area start -->
    <CounterInfo :about_doc="true"/>
    <!-- counter area end -->
  </div>
</template>

<script>
import CounterInfo from '../about-us(management)/counter-info.vue';

export default {
  name: 'CounterArea',
  components:{
    CounterInfo,
  }
}
</script>