<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <FancyHero/>
    <FancyPortfolio/>
    <FooterSeven :dark_btn="true" />
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from './Fancy-hero.vue';
import FancyPortfolio from './Fancy-portfolio.vue';
import FooterSeven from '../common/Footers/FooterSeven.vue';

export default {
    name: "Portfolio_v1_Main",
    components: { Header, FancyHero, FancyPortfolio, FooterSeven }
}
</script>