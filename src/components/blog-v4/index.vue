<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <HeaderThree />
    <FancyHero/>
    <BlogArea/>
    <ShortBanner :spacing="true" />
    <FooterThree/>
  </div>
</template>

<script>
import HeaderThree from '../common/Headers/HeaderThree.vue';
import FancyHero from './fancy-hero.vue';
import BlogArea from './blog-area.vue';
import ShortBanner from '../doc-landing/ShortBanner.vue';
import FooterThree from '../common/Footers/FooterThree.vue';

export default {
  name:'Blog_v4_Main',
  components: { HeaderThree,FancyHero, BlogArea, ShortBanner, FooterThree },
}
</script>
