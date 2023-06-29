<template>
  <div class="main-page-wrapper font-gordita overflow-hidden">
    <HeaderFive/>
    <HeroArea/>
    <FancyFeature/>
    <FancyTextBlock/>
    <CounterArea/>
    <FancyFeatureTwo/>
    <PricingArea/>
    <ClientFeedBack/>
    <ShortBanner/>
    <FooterFive/>
  </div>
</template>

<script>
import HeaderFive from '../common/Headers/HeaderFive.vue';
import HeroArea from './HeroArea.vue';
import FancyFeature from './FancyFeature.vue';
import FancyTextBlock from './FancyTextBlock.vue';
import CounterArea from './CounterArea.vue';
import FancyFeatureTwo from './FancyFeatureTwo.vue';
import PricingArea from './PricingArea.vue';
import ClientFeedBack from './ClientFeedBack.vue';
import ShortBanner from './ShortBanner.vue';
import FooterFive from '../common/Footers/FooterFive.vue';

export default {
  name:'productLandingMain',
  components:{
    HeaderFive,
    HeroArea,
    FancyFeature,
    FancyTextBlock,
    CounterArea,
    FancyFeatureTwo,
    PricingArea,
    ClientFeedBack,
    ShortBanner,
    FooterFive,
}
}
</script>