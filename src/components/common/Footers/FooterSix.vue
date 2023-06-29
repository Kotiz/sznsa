<template>
  <footer class="theme-footer-six">
    <div class="inner-container">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-4">
            <div class="logo"><router-link to="/">
              <img src="../../../assets/images/logo/deski_07.svg" alt=""></router-link>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="title">Find us on Social Media</div>
            <ul class="d-flex justify-content-center social-icon">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div class="col-lg-4">
            <div class="title">We’r always happy to help.</div>
            <div class="text-center"><a href="#" class="email">ask@jdeski.com</a></div>
          </div>
        </div>
        <p class="copyright">Copyright @2022 deski inc.</p>
      </div>
      <img src="../../../assets/images/shape/167.png" alt="" class="shapes shape-one">
    </div> <!-- /.inner-container -->
  </footer> <!-- /.theme-footer-six -->
</template>

<script>
export default {
  name: 'FooterSix'
}
</script>