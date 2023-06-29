<template>
  <div class="main-page-wrapper p0 font-gordita overflow-hidden">
    <Header11/>
    <HeroBanner/>
    <CounterArea/>
    <FancyFeature/>
    <FancyFeature2/>
    <FancyFeature3/>
    <Testimonial/>
    <ShortBanner/>
    <FooterSeven :dark_btn="true" />
  </div>
</template>

<script>
import Header11 from '../common/Headers/Header-11.vue';
import HeroBanner from './HeroBanner.vue';
import CounterArea from './CounterArea.vue';
import FancyFeature from './FancyFeature.vue';
import FancyFeature2 from './FancyFeature-2.vue';
import FancyFeature3 from './FancyFeature-3.vue';
import Testimonial from '../Note-taking/Testimonial.vue';
import ShortBanner from './ShortBanner.vue';
import FooterSeven from '../common/Footers/FooterSeven.vue';

export default {
    name: "WebsiteBuilderMain",
    components: { Header11, HeroBanner, CounterArea, FancyFeature, FancyFeature2, FancyFeature3, Testimonial, ShortBanner, FooterSeven }
}
</script>