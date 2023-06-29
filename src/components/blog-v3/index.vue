<template>
  <div class="main-page-wrapper overflow-hidden">
    <HeaderFour />
    <HeroArea/>
    <BlogArea/>
    <ShortBanner :ser_page="true" />
    <FooterFour/>
  </div>
</template>

<script>
import HeaderFour from '../common/Headers/HeaderFour.vue';
import HeroArea from './hero-area.vue';
import BlogArea from './blog-area.vue';
import ShortBanner from '../customer-support/ShortBanner.vue';
import FooterFour from '../common/Footers/FooterFour.vue';

export default {
  name: "Blog_v3_Main",
  components: { HeaderFour, HeroArea,BlogArea, ShortBanner, FooterFour },
};
</script>