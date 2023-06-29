<template>
  <div class="fancy-short-banner-ten mt-130 md-mt-20">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-8 m-auto" data-aos="fade-up" data-aos-duration="1200">
          <div class="text-center pb-60">
            <h2 class="font-gordita">Convinced to work on a new project?</h2>
          </div>
        </div>
      </div>
      <div class="text-center pb-40 md-pb-10" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
        <router-link to="/contact-us-doc" class="theme-btn-eleven">Contact us</router-link>
      </div>
    </div> <!-- /.container -->
    <img src="../../assets/images/shape/210.svg" alt="" class="shapes shape-one">
    <img src="../../assets/images/shape/211.svg" alt="" class="shapes shape-two">
  </div>
</template>

<script>
export default {
  name: 'ShortBanner'
}
</script>