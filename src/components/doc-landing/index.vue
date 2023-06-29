<template>
  <div class="main-page-wrapper home-three">
    <HeaderThree />
    <HeroBanner />
    <FancyFeature />
    <FancyTextBlock />
    <FancyFeatureTwo />
    <ClientFeedback />
    <UseableTools />
    <FaqArea />
    <ShortBanner />
    <FooterThree/>
  </div>
</template>

<script>
import HeaderThree from '../common/Headers/HeaderThree.vue';
import HeroBanner from './HeroBanner.vue';
import FancyFeature from './FancyFeature.vue';
import FancyTextBlock from './FancyTextBlock.vue';
import FancyFeatureTwo from './FancyFeatureTwo.vue';
import ClientFeedback from './ClientFeedback.vue';
import UseableTools from './UseableTools.vue';
import FaqArea from './FaqArea.vue';
import ShortBanner from './ShortBanner.vue';
import FooterThree from '../common/Footers/FooterThree.vue';

export default {
  name: "DocLandingMain",
  components: {
    HeaderThree,
    HeroBanner,
    FancyFeature,
    FancyTextBlock,
    FancyFeatureTwo,
    ClientFeedback,
    UseableTools,
    FaqArea,
    ShortBanner,
    FooterThree,
},

};
</script>