<template>
  <div :class="`fancy-short-banner-five ${price_event ? 'with-bg pt-130 pb-150 md-pt-100 md-pb-120'
  : 'pt-150 pb-150 md-pt-100 md-pb-100'}`">
    <img v-if="price_event" src="../../assets/images/shape/131.svg" alt="" class="shapes shape-one">
    <img v-if="price_event" src="../../assets/images/shape/132.svg" alt="" class="shapes shape-two">
    <div class="container">
      <div class="title-style-five text-center">
        <h2><span>Sign up & get started</span></h2>
      </div>
      <div class="row">
        <div class="col-xl-7 col-lg-8 col-md-9 m-auto">
          <p class="font-rubik sub-heading">Our ticketing platform is made for you - & loved by everyone lorem ipsum.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-7 col-lg-8 col-md-10 m-auto">
          <form @submit.prevent="onSubmit">
            <input type="text" placeholder="Email address">
            <button>Start Trial</button>
          </form>
          <p class="info-text">Already a member? <router-link to="/login">Sign in.</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShortBanner',
  props: {
    price_event: Boolean,
  },
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>