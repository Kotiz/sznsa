<template>
  <div class="h-100">
    <div class="full-height-layout d-flex align-items-center">
      <div class="coming-soon-content font-gordita">
        <h6>COMING SOON</h6>
        <h1>Get notified when we’r ready to launch!</h1>
        <div class="row">
          <div class="col-lg-9 m-auto">
            <p>We're under construction. Check back for an update soon. Stay in touch!</p>
          </div>
        </div>
        <form @submit.prevent="onSubmit">
          <input type="email" placeholder="ihidago@ujufidnan.gov">
          <button>Notify Me</button>
        </form>

        <ul class="social-icon d-flex justify-content-center">
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>

        <img src="../../assets/images/shape/179.svg" alt="" class="shapes shape-one">
        <img src="../../assets/images/shape/180.svg" alt="" class="shapes shape-two">
        <img src="../../assets/images/shape/181.svg" alt="" class="shapes shape-three">
        <img src="../../assets/images/shape/182.svg" alt="" class="shapes shape-four">
        <img src="../../assets/images/shape/183.svg" alt="" class="shapes shape-five">
        <img src="../../assets/images/shape/184.svg" alt="" class="shapes shape-six">
        <img src="../../assets/images/shape/185.svg" alt="" class="shapes shape-seven">
        <img src="../../assets/images/shape/186.svg" alt="" class="shapes shape-eight">
        <img src="../../assets/images/shape/187.svg" alt="" class="shapes shape-nine">
        <img src="../../assets/images/shape/188.svg" alt="" class="shapes shape-ten">
      </div> <!-- /.coming-soon-content -->
    </div> <!-- /.full-height-layout -->

  </div>
</template>

<script>
export default {
  name: 'ComingSoonMain',
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>