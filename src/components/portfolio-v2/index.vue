<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <FancyHero/>
    <PortfolioItems/>
    <FooterSeven :dark_btn="true" />
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from './fancy-hero.vue';
import PortfolioItems from './portfolio-items.vue';
import FooterSeven from '../common/Footers/FooterSeven.vue';
export default {
    name: "Portfolio_v2_Main",
    components: { Header, FancyHero, PortfolioItems, FooterSeven }
}
</script>