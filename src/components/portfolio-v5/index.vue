<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <FancyHero/>
    <PortfolioArea/>
    <FooterSeven :dark_btn="true" />
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from './fancy-hero.vue';
import PortfolioArea from './portfolio-area.vue';
import FooterSeven from '../common/Footers/FooterSeven.vue';

export default {
  name:'Portfolio_v5_Main',
  components:{
    Header,
    FancyHero,
    PortfolioArea,
    FooterSeven,
  }
}
</script>