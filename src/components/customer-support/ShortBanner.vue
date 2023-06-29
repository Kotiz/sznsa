<template>
  <div :class="`fancy-short-banner-three ${ser_page ? 'mt-200 md-mt-150' : !contact_cs && !product_cs && !feature_cs && 'mt-100 md-mt-40'} ${contact_cs ? 'mt-200 md-mt-130' : ''} ${product_cs ? 'mt-225 md-mt-150' : ''} ${feature_cs ? 'mt-250 md-mt-150' : ''}`">
    <div class="container">
      <div class="bg-wrapper">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="title-style-one">
              <h6 class="font-rubik" style="color:#F96F60">Start your free trial.</h6>
              <h2>New here? Start your free trial now.</h2>
            </div> <!-- /.title-style-one -->
          </div>
          <div class="col-lg-6">
            <div class="form-wrapper">
              <form @submit.prevent="onSubmit">
                <input type="text" placeholder="Email address">
                <button>Start trial</button>
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
  props:{
    ser_page : Boolean,
    contact_cs : Boolean,
    product_cs : Boolean,
    feature_cs : Boolean,
  },
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>