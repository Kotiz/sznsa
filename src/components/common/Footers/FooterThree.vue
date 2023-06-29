<template>
  <footer class="theme-footer-three pt-100">
    <div class="top-footer">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-4 col-12 footer-about-widget" data-aos="fade-up" data-aos-duration="1200">
            <router-link to="/doc-landing" class="logo"><img src="../../../assets/images/logo/deski_01.svg" alt=""></router-link>
          </div> <!-- /.about-widget -->
          <div class="col-lg-2 col-md-4 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            <h5 class="footer-title">Services</h5>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Wordpress</a></li>
              <li><a href="#">Online Marketing</a></li>
              <li><a href="#">Content</a></li>
            </ul>
          </div> <!-- /.footer-list -->
          <div class="col-lg-2 col-md-4 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            <h5 class="footer-title">About us</h5>
            <ul>
              <li><router-link to="/about-us-doc">About us</router-link></li>
              <li><a href="#">Work Portfolio</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Plan & Pricing</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div> <!-- /.footer-list -->
          <div class="col-lg-3 col-md-4 address-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <h5 class="footer-title">Contact Info</h5>
            <p class="font-rubik">432 Mirpur National Stadium Market <br>Dhaka, Bangladesh</p>
            <ul class="info">
              <li><a href="#">deskisupportinc@gmail.com</a></li>
              <li><a href="#" class="mobile-num">+761 412 3224</a></li>
            </ul>
            <ul class="social-icon d-flex pt-15">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div> <!-- /.footer-list -->
        </div> <!-- /.row -->
      </div> <!-- /.container -->
    </div> <!-- /.top-footer -->

    <div class="container">
      <div class="bottom-footer-content">
        <div class="row">
          <div class="col-lg-8 ms-auto">
            <div class="d-md-flex align-items-center justify-content-between">
              <ul class="order-md-last" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="50"
                data-aos-anchor=".theme-footer-three">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
              <p class="order-md-first" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="50"
                data-aos-anchor=".theme-footer-three">Copyright @2022 deski inc.</p>
            </div>
          </div>
        </div>
      </div> <!-- /.bottom-footer -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterThree'
}
</script>