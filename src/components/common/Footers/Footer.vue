<template>
  <footer class="theme-footer-one pt-130 md-pt-70">
    <div class="top-footer">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-lg-3 col-md-12 footer-about-widget" data-aos="fade-up" data-aos-duration="1200">
            <router-link to="/" class="logo">
              <img src="../../../assets/images/logo/deski_02.svg" alt="" />
            </router-link>
          </div>
          <!-- /.about-widget -->
          <div class="col-lg-3 col-md-4 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            <h5 class="footer-title">Services</h5>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Wordpress</a></li>
              <li><a href="#">Online Marketing</a></li>
              <li><a href="#">Content</a></li>
            </ul>
          </div>
          <!-- /.footer-list -->
          <div class="col-lg-3 col-md-4 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            <h5 class="footer-title">About us</h5>
            <ul>
              <li><router-link to="/about-us-management">About us</router-link></li>
              <li><a href="#">Work Portfolio</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Plan & Pricing</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
          <!-- /.footer-list -->
          <div class="col-lg-3 col-md-4 address-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <h5 class="footer-title">Address</h5>
            <ul>
              <li><a href="#">companyinfo@mail.com</a></li>
              <li><a href="#" class="mobile-num">+761 412 3224</a></li>
            </ul>
          </div>
          <!-- /.footer-list -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.top-footer -->

    <div class="container">
      <div class="bottom-footer-content">
        <div class="d-sm-flex align-items-center justify-content-between">
          <ul class="order-sm-last" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="100"
            data-aos-anchor=".theme-footer-one">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
          <p class="order-sm-first" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100"
            data-aos-anchor=".theme-footer-one">
            Copyright @2022 deski inc.
          </p>
        </div>
      </div>
      <!-- /.bottom-footer -->
    </div>
  </footer>
  <!-- /.theme-footer-one -->
</template>

<script>
export default {
  name: "FooterArea",
};
</script>