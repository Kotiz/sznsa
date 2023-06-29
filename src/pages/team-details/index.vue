<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header />
    <!-- fancy hero start -->
    <div class="fancy-hero-one">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-lg-11 m-auto">
            <h2 class="font-rubik">Single Profile</h2>
          </div>
        </div>
      </div>
      <div class="bubble-one"></div>
      <div class="bubble-two"></div>
      <div class="bubble-three"></div>
      <div class="bubble-four"></div>
      <div class="bubble-five"></div>
      <div class="bubble-six"></div>
    </div>
    <!-- fancy hero end -->

    <!-- team details start -->
    <div class="team-details mb-50 md-mb-10">
      <div class="container position-relative">
        <div class="main-bg d-lg-flex align-items-center">
          <div class="img-meta">
            <img src="../../assets/images/media/img_104.png" alt="" class="w-100">
          </div>
          <div class="text-wrapper">
            <div class="name font-gilroy-bold">Jannatul Ferdaus</div>
            <div class="position">Senior Product Designer</div>
            <h6 class="font-gilroy-bold">ABOUT ME</h6>
            <p class="pb-45">Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dole magna aliqua. Ut enim </p>
            <h6 class="font-gilroy-bold">Experties</h6>
            <p class="pb-45">Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod tempor incididunt </p>
            <h6 class="font-gilroy-bold">FOLLOW & CONTACT</h6>
            <ul class="social-icon d-flex pt-15">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a href="#"><i class="fa fa-envelope-o"></i></a></li>
            </ul>
          </div> <!-- /.text-wrapper -->
        </div> <!-- /.main-bg -->

        <div class="pager d-flex justify-content-between">
          <a href="#"><i class="flaticon-right-arrow"></i></a>
          <a href="#"><i class="flaticon-right-arrow"></i></a>
        </div>
      </div>
      <img src="../../assets/images/shape/214.svg" alt="" class="shapes shape-one">
      <img src="../../assets/images/shape/215.svg" alt="" class="shapes shape-two">
    </div>
    <!-- team details end -->

    <!-- footer start -->
    <Footer/>
    <!-- footer end -->
  </div>
</template>

<script>
import Header from '@/components/common/Headers/Header.vue';
import Footer from '@/components/common/Footers/Footer.vue';

export default {
  name:'TeamDetails',
   components: {
    Header,
    Footer,
  },
}
</script>