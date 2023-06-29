<template>
  <div class="main-page-wrapper font-gordita overflow-hidden">
    <HeaderFive :doc_signature="true" />
    <HeroBanner />
    <FancyFeature />
    <FancyFeature2 />
    <VideoBox />
    <FancyTextBlock />
    <UseableTools />
    <FancyFeature3 />
    <PricingSection />
    <FaqArea />
    <ShortBanner />
    <FooterSeven :dark_btn="true" />
  </div>
</template>

<script>
import HeaderFive from "../common/Headers/HeaderFive.vue";
import HeroBanner from "./HeroBanner.vue";
import FancyFeature from "./FancyFeature.vue";
import FancyFeature2 from "./FancyFeature-2.vue";
import VideoBox from "./VideoBox.vue";
import FancyTextBlock from "./Fancy-text-block.vue";
import UseableTools from "./Useable-tools.vue";
import FancyFeature3 from "./Fancy-feature-3.vue";
import PricingSection from "./Pricing-section.vue";
import FaqArea from "./FaqArea.vue";
import ShortBanner from "./ShortBanner.vue";
import FooterSeven from "../common/Footers/FooterSeven.vue";
export default {
  name: "DocSignatureMain",
  components: {
    HeaderFive,
    HeroBanner,
    FancyFeature,
    FancyFeature2,
    VideoBox,
    FancyTextBlock,
    UseableTools,
    FancyFeature3,
    PricingSection,
    FaqArea,
    ShortBanner,
    FooterSeven,
  },
};
</script>
