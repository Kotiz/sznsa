<template>
  <div class="fancy-hero-one">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 m-auto">
          <h2 class="font-rubik">Help & Support</h2>
          <p class="sub-heading">Advice and answers from our expert and proffesional deski Team</p>
        </div>
      </div>
      <form @submit.prevent="onSubmit" class="search-form">
        <input type="text" placeholder="Search for articles...">
        <button><img src="../../assets/images/icon/47.svg" alt=""></button>
      </form>
    </div>
    <div class="bubble-one"></div>
    <div class="bubble-two"></div>
    <div class="bubble-three"></div>
    <div class="bubble-four"></div>
    <div class="bubble-five"></div>
    <div class="bubble-six"></div>
  </div>
</template>

<script>
export default {
  name: 'HeroArea',
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>