<template>
  <div class="clearfix">
    <HeaderThree />
    <FancyHero/>
    <DocArea :doc_banner="true" />
  </div>
</template>

<script>
import HeaderThree from '../common/Headers/HeaderThree.vue';
import FancyHero from '../doc-full-width-banner/fancy-hero.vue';
import DocArea from '../doc-box/doc-area.vue';

export default {
  name:'DocBoxBannerMain',
  components: { HeaderThree, FancyHero, DocArea },
}
</script>