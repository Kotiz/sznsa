<template>
  <footer :class="`theme-footer-four ${contact_event ? 'mt-200 md-mt-150' : ''}`">
    <div class="top-footer">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-xl-4 col-lg-3 col-12 footer-about-widget">
            <div class="logo"><router-link to="/event">
              <img src="../../../assets/images/logo/deski_05.svg" alt=""></router-link>
            </div>
            <ul class="font-rubik mt-10">
              <li><a href="mailto:deskiinc@gmail.com">deskiinc@gmail.com</a></li>
              <li><a href="tel:+761 412 3224">+761 412 3224</a></li>
            </ul>
          </div> <!-- /.about-widget -->
          <div class="col-lg-3 col-md-4 footer-list">
            <h5 class="footer-title font-slab">Links</h5>
            <ul>
              <li><router-link to="/event">Home</router-link></li>
              <li><a href="#">Product</a></li>
              <li><router-link to="/pricing-event">Pricing</router-link></li>
              <li><router-link to="/about-us-event">About us</router-link></li>
              <li><a href="#">Features</a></li>
              <li><router-link to="/blog-v1">Blog</router-link></li>
              <li><a href="#">Help &amp; support</a></li>
              <li><router-link to="/doc-full-width" target="_blank">API documentation</router-link></li>
            </ul>
          </div> <!-- /.footer-list -->
          <div class="col-lg-3 col-md-4 footer-list">
            <h5 class="footer-title font-slab">Legal</h5>
            <ul>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Terms &amp; conditions</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Cookie policy</a></li>
            </ul>
          </div> <!-- /.footer-list -->
          <div class="col-xl-2 col-lg-3 col-md-4 footer-list">
            <h5 class="footer-title font-slab">Products</h5>
            <ul class="pe-5">
              <li><a href="#">Take the tour</a></li>
              <li><a href="#">Live chat</a></li>
              <li><a href="#">Self-service</a></li>
              <li><a href="#">Social</a></li>
              <li><a href="#">Mobile</a></li>
              <li><a href="#">deski Reviews</a></li>
            </ul>
          </div> <!-- /.footer-list -->
        </div> <!-- /.row -->
      </div> <!-- /.container -->
    </div>
    
    <div class="container">
      <div class="bottom-footer-content">
        <p>Copyright @2022 deski inc.</p>
      </div> <!-- /.bottom-footer -->
    </div>
  </footer>
</template>

<script>
export default {
  name:'FooterTwo',
  props:{contact_event:Boolean}
}
</script>