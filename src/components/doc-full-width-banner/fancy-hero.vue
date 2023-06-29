<template>
  <div class="fancy-hero-five">
    <div class="bg-wrapper">
      <div class="container">
        <h1 class="heading">
        <img src="../../assets/images/logo/Stowarzyszenie_Szansa_logo.svg" alt="">
      </h1>
      <blackquote>  
      <p class="">Bogatym nie jest ten, kto posiada, lecz ten, kto daje.</p>
      <p>- Jan Paweł II</p>
    </blackquote>
      </div>
    </div> <!-- /.bg-wrapper -->
  </div>
</template>

<script>
export default {
  name: 'FancyHero',
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>