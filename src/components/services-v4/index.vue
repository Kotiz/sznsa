<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <!-- <Header :center_white="true" /> -->
    <HeroBanner/>
    <FancyTextBlock/>
    <ExploreServices/>
    <!-- <FooterNine/> -->
  </div>
</template>

<script>
import HeroBanner from './hero-banner.vue';
// import Header from '../common/Headers/Header.vue';
import FancyTextBlock from './fancy-text-block.vue';
import ExploreServices from './explore-services.vue';
// import FooterNine from '../common/Footers/FooterNine.vue';

export default {
  name:'Services_v4_Main',
  components: { HeroBanner, FancyTextBlock, ExploreServices },
}
</script>