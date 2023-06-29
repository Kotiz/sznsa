<template>
  <div :class="`fancy-short-banner-four ${spacing ? 'm0 pt-150 md-pt-100' : ''}`">
    <div class="container">
      <div class="bg-wrapper">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="title">
              <h6>Subscribe Now</h6>
              <h2>Subscriber to our Newsletter</h2>
            </div> <!-- /.title-style-one -->
          </div>
          <div class="col-lg-6">
            <div class="form-wrapper">
              <form @submit.prevent="onSubmit">
                <input type="text" placeholder="Email address">
                <button>Subscribe</button>
              </form>
              <p class="font-rubik">Already a member? <router-link to="/login">Sign in.</router-link></p>
            </div> <!-- /.form-wrapper -->
          </div>
        </div>
      </div> <!-- /.bg-wrapper -->
    </div> <!-- /.container -->
  </div>
</template>

<script>
export default {
  name: 'ShortBanner',
  props:{spacing:Boolean},
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>