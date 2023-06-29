<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <FancyHero/>
    <PortfolioSlider/>
    <FooterSeven :dark_btn="true" />
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from './fancy-hero.vue';
import PortfolioSlider from './portfolio-slider.vue';
import FooterSeven from '../common/Footers/FooterSeven.vue';

export default {
    name: "Portfolio_v4_Main",
    components: { Header, FancyHero, PortfolioSlider, FooterSeven }
}
</script>