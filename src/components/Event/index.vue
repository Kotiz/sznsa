<template>
  <div class="main-page-wrapper p0">
    <HeaderTwo/>
    <HeroArea/>
    <FancyTextBlock/>
    <FancyFeatureNine/>
    <ChooseUs/>
    <Pricing/>
    <Testimonial/>
    <FaqArea/>
    <ShortBanner/>
    <FooterTwo/>
  </div>
</template>

<script>
import HeaderTwo from '../common/Headers/HeaderTwo.vue';
import HeroArea from './HeroArea.vue';
import FancyTextBlock from './FancyTextBlock.vue';
import FancyFeatureNine from './FancyFeatureNine.vue';
import ChooseUs from './ChooseUs.vue';
import Pricing from './Pricing.vue';
import Testimonial from './Testimonial.vue';
import FaqArea from './FaqArea.vue';
import ShortBanner from './ShortBanner.vue';
import FooterTwo from '../common/Footers/FooterTwo.vue';

export default {
  name:'EventMain',
  components:{
    HeaderTwo,
    HeroArea,
    FancyTextBlock,
    FancyFeatureNine,
    ChooseUs,
    Pricing,
    Testimonial,
    FaqArea,
    ShortBanner,
    FooterTwo,
  }
}
</script>