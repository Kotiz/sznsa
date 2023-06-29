<template>
  <div class="main-page-wrapper overflow-hidden">
    <router-view></router-view>
    <sideBar />
    <!-- <Header/> -->
    <FancyHero/>
    <!-- <PortfolioItems/> -->
    <!-- <FooterSeven :dark_btn="true" /> -->
  </div>
</template>

<script>
// import Header from '../common/Headers/Header.vue';
import FancyHero from './fancy-hero.vue';
// import PortfolioItems from './portfolio-items.vue';
// import FooterSeven from '../common/Footers/FooterSeven.vue';
import sideBar from '../portfolio-v3/side-bar.vue'; 
// import sideBar from './side-bar-awesome.vue'


export default {
    name: "Portfolio_v3_Main",
    components: { FancyHero, sideBar}
}

</script>