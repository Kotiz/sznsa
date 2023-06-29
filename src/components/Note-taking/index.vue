<template>
  <div class="main-page-wrapper font-gordita overflow-hidden">
    <HeaderSeven />
    <HeroArea />
    <FancyFeature />
    <FancyFeature2 />
    <FancyTextBlock />
    <FancyFeature3 />
    <PricingArea />
    <Testimonial />
    <ShortBanner />
    <FooterSeven />
  </div>
</template>

<script>
import HeaderSeven from "../common/Headers/HeaderSeven.vue";
import HeroArea from "./Hero-area.vue";
import FancyFeature from "./Fancy-feature.vue";
import FancyFeature2 from "./Fancy-feature-2.vue";
import FancyTextBlock from "./Fancy-text-block.vue";
import FancyFeature3 from "./Fancy-feature-3.vue";
import PricingArea from "./Pricing-area.vue";
import Testimonial from "./Testimonial.vue";
import ShortBanner from "./ShortBanner.vue";
import FooterSeven from "../common/Footers/FooterSeven.vue";

export default {
  name: "NoteTakingMain",
  components: {
    HeaderSeven,
    HeroArea,
    FancyFeature,
    FancyFeature2,
    FancyTextBlock,
    FancyFeature3,
    PricingArea,
    Testimonial,
    ShortBanner,
    FooterSeven,
  },
};
</script>
