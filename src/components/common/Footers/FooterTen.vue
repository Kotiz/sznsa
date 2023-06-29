<template>
  <div class="theme-footer-nine lg-container">
    <div class="container">
      <div class="d-lg-flex align-items-center justify-content-between">
        <div class="logo text-center"><router-link to="/">
          <img src="../../../assets/images/logo/deski_06.svg" alt=""></router-link>
        </div>
        <ul class="style-none footer-nav d-flex flex-wrap justify-content-center md-pt-10 md-pb-20">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
        <ul class="d-flex justify-content-center social-icon style-none">
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterTen'
}
</script>