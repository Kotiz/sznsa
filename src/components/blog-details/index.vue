<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <FancyHero/>
    <DetailsArea/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from './fancy-hero.vue';
import DetailsArea from './details-area.vue';
import Footer from '../common/Footers/Footer.vue';

export default {
  name:'BlogDetailsMain',
  components: { Header, FancyHero, DetailsArea, Footer },
}
</script>