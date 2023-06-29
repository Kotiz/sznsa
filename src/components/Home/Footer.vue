<template>
  <div class="footer-bg-wrapper">
    <div class="bubble-one"></div>
    <div class="bubble-two"></div>
    <div class="bubble-three"></div>
    <div class="fancy-short-banner-two">
      <div class="container">
        <div class="content-wrapper">
          <div class="bg-wrapper d-lg-flex align-items-center justify-content-between">
            <h2 class="font-gilroy-bold">
              Don’t find the answer? contact us for any query.
            </h2>
            <router-link to="/contact-us-cs">Contact us</router-link>
            <div class="bubble-one"></div>
            <div class="bubble-two"></div>
            <div class="bubble-three"></div>
            <div class="bubble-four"></div>
            <div class="bubble-five"></div>
          </div>
          <!-- /.bg-wrapper -->
        </div>
        <!-- /.content-wrapper -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.fancy-short-banner-two -->
    <!-- /.theme-footer-one start -->
    <Footer/>
    <!-- /.theme-footer-one end-->
  </div>
</template>

<script>
import Footer from '../common/Footers/Footer.vue';

export default {
  name:'FooterWrapper',
  components:{
    Footer,
  }
}
</script>