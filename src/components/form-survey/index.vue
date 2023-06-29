<template>
  <div class="main-page-wrapper p0 font-gordita overflow-hidden">
    <Header12 />
    <HeroBanner/>
    <FancyFeature/>
    <BlockStyle/>
    <FeatureSlider/>
    <BlockStyle2/>
    <IntegratedApps/>
    <ClientFeedback/>
    <PricingSection/>
    <FeatureBlog/>
    <ShortBanner/>
    <FooterTen/>
  </div>
</template>

<script>
import Header12 from '../common/Headers/Header-12.vue';
import HeroBanner from './HeroBanner.vue';
import FancyFeature from './Fancy-feature.vue';
import BlockStyle from './Block-style.vue';
import FeatureSlider from './Feature-slider.vue';
import BlockStyle2 from './Block-style-2.vue';
import IntegratedApps from './Integrated-apps.vue';
import ClientFeedback from './Client-feedback.vue';
import PricingSection from './Pricing-section.vue';
import FeatureBlog from './Feature-blog.vue';
import ShortBanner from './ShortBanner.vue';
import FooterTen from '../common/Footers/FooterTen.vue';

export default {
  name: "FormSurveyMain",
  components: { Header12, HeroBanner, FancyFeature, BlockStyle, FeatureSlider, BlockStyle2, IntegratedApps, ClientFeedback, PricingSection, FeatureBlog, ShortBanner, FooterTen }
}
</script>