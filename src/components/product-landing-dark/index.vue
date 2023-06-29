<template>
  <div class="main-page-wrapper font-gordita dark-style lg-container overflow-hidden">
    <HeaderSix :dark="true" />
    <HeroArea/>
    <Features/>
    <FeatureTwo/>
    <FeaturesThree/>
    <FancyPortfolio/>
    <ClientFeedback/>
    <Pricing/>
    <div class="overflow-hidden">
      <ShortBanner/>
      <FooterSix/>
    </div>
  </div>
</template>

<script>
import HeaderSix from '../common/Headers/HeaderFive.vue';
import HeroArea from './HeroArea.vue';
import Features from './Features.vue';
import FeatureTwo from './Feature-2.vue';
import FeaturesThree from './Feature-3.vue';
import FancyPortfolio from './Fancy-portfolio.vue';
import ClientFeedback from './Client-feedback.vue';
import Pricing from './Pricing.vue';
import ShortBanner from './Short-banner.vue';
import FooterSix from '../common/Footers/FooterSix.vue';

export default {
  name:'ProductLandingDarkMain',
  components:{
    HeaderSix,
    HeroArea,
    Features,
    FeatureTwo,
    FeaturesThree,
    FancyPortfolio,
    ClientFeedback,
    Pricing,
    ShortBanner,
    FooterSix,
}
}
</script>