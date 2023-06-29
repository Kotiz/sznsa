<template>
  <div class="fancy-hero-six mx-auto containerBackground">
    <div class="container">
      <div class="d-flex align-items-center">
        <div class="p-2">
          <h1 class="heading">
            <img src="../../assets/images/logo/Stowarzyszenie_Szansa_logo.svg" alt="">
          </h1>
        </div>
        <div class="p-2">
          <div class="wrapperGallery">
            <img class="IMGGallery" src="../../assets/images/gallery_main_page/1.jpg" alt="">
            <img class="IMGGallery" src="../../assets/images/gallery_main_page/2.jpg" alt="">
            <img class="IMGGallery" src="../../assets/images/gallery_main_page/3.jpg" alt="">
            <img class="IMGGallery" src="../../assets/images/gallery_main_page/4.jpg" alt="">
          </div>
        </div>
      </div>
        <blackquote>  
          <p class="sub-heading p-4">Bogatym nie jest ten, kto posiada, lecz ten, kto daje.</p>
          <p>- Jan Paweł II</p>
        </blackquote>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FancyHero',
}
</script>
<style scoped>
.containerBackground {
  /* background-color: rgba(0, 163, 224, 1);
background-image: linear-gradient(180deg, rgba(0, 163, 224, 1) 0%, rgba(255, 255, 255, 1) 18%); */
} 

.wrapperGallery {
  /* position: absolute; */
  /* top: 250px; */
  /* right: 300px; */
  flex-grow: 1;
  margin: auto;
  max-width: 650px;
  max-height: 650px;
  
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 4vmin;
  justify-items: center;
  align-items: center;
  filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));

}

.IMGGallery {
  z-index: 1;
  grid-column: span 2;
  max-width: 100%;
  margin-bottom: -52%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transform: scale(1);
  transition: all .25s;
  animation: pulse-animation 2s;
  
  
  &:nth-child(7n + 1) {
    grid-column: 2 / span 2;
    
  }
  
  
  &:hover {
    z-index: 2;
    transform: scale(1.2);
  }
}
@keyframes pulse-animation {
  0% {
    transform: scale(0.1);
  }
  1% {
    transform: scale(0.2);
  }
  2% {
    transform: scale(0.3);
  }
  5% {
    transform: scale(0.2);
  }
}
</style>