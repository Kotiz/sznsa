<template>
  <div class="clearfix">
    <DocArea :doc_banner="true"/>
    <!-- <HeaderThree /> -->
    <FancyHero />

  </div>
</template>

<script>
// import HeaderThree from "../common/Headers/HeaderThree.vue";
import FancyHero from "./fancy-hero.vue";
import DocArea from '../doc-fullwidth/doc-area.vue';

export default {
  name: "DocFullWidthBannerMain",
  components: { FancyHero, DocArea },
};
</script>