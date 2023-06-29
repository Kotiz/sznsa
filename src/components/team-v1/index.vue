<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <FancyHero/>
    <TeamArea/>
    <ShortBanner/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from './fancy-hero.vue';
import TeamArea from './team-area.vue';
import ShortBanner from './short-banner.vue';
import Footer from '../common/Footers/Footer.vue';

export default {
  name:'Team_v1_Main',
  components:{
    Header,
    FancyHero,
    TeamArea,
    ShortBanner,
    Footer
}
}
</script>