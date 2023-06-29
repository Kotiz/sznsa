<template>
  <footer class="theme-footer-seven mt-120 md-mt-100">
    <div class="lg-container">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-2 mb-40" data-aos="fade-up" data-aos-duration="1200">
            <div class="logo"><router-link to="/">
              <img src="../../../assets/images/logo/deski_06.svg" alt=""></router-link>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 mb-40" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            <h5 class="title">Links</h5>
            <ul class="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-40" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <h5 class="title">Legal</h5>
            <ul class="footer-list">
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Terms & conditions</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Cookie policy</a></li>
            </ul>
          </div>
          <div class="col-xl-4 col-lg-5 mb-40" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <div class="newsletter">
              <h5 class="title">Newslettert</h5>
              <p>Join over <span>68,000</span> people getting our emails</p>
              <form @submit.prevent="onSubmit">
                <input type="email" placeholder="Enter your email">
                <button class="dark-btn">Sign Up</button>
              </form>
              <div class="info">We only send interesting and relevant emails.</div>
            </div> <!-- /.newsletter -->
          </div>
        </div>
      </div>

      <div class="container">
        <div class="bottom-footer">
          <div class="row">
            <div class="col-lg-4 order-lg-1 mb-20">
              <ul class="d-flex justify-content-center justify-content-lg-start footer-nav">
                <li><a href="#">Privacy & Terms.</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div class="col-lg-4 order-lg-3 mb-20">
              <ul class="d-flex justify-content-center justify-content-lg-end social-icon">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
            <div class="col-lg-4 order-lg-2 mb-20">
              <p class="copyright text-center">Copyright @2022 deski inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- /.lg-container -->

  </footer>
</template>

<script>
export default {
  name: 'FooterEight',
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>