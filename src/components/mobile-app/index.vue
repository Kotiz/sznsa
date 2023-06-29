<template>
  <div class="main-page-wrapper font-gordita overflow-hidden">
    <HeaderTen/>
    <HeroBanner/>
    <AppScreen/>
    <FancyFeature/>
    <FancyFeature2/>
    <AppScreen2/>
    <Pricing/>
    <Testimonial/>
    <Partners/>
    <ShortBanner/>
    <FooterSeven :dark_btn="true" />
  </div>
</template>

<script>
import HeaderTen from '../common/Headers/HeaderTen.vue';
import HeroBanner from './HeroBanner.vue';
import AppScreen from './AppScreen.vue';
import FancyFeature from './FancyFeature.vue';
import FancyFeature2 from './FancyFeature-2.vue';
import AppScreen2 from './AppScreen-2.vue';
import Pricing from './Pricing.vue';
import Testimonial from './Testimonial.vue';
import Partners from './Partners.vue';
import ShortBanner from './ShortBanner.vue';
import FooterSeven from '../common/Footers/FooterSeven.vue';

export default {
  name:'MobileAppMain',
  components:{
    HeaderTen,
    HeroBanner,
    AppScreen,
    FancyFeature,
    FancyFeature2,
    AppScreen2,
    Pricing,
    Testimonial,
    Partners,
    ShortBanner,
    FooterSeven
}
}
</script>