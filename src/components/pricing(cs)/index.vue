<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <HeaderFour/>
    <PricingSection/>
    <TextBlock/>
    <UseAbleTools/>
    <FaqArea/>
    <ShortBanner/>
    <FooterFour/>
  </div>
</template>

<script>
import HeaderFour from '../common/Headers/HeaderFour.vue';
import PricingSection from './pricing-section.vue';
import TextBlock from './text-block.vue';
import UseAbleTools from '../common/use-able-tools.vue';
import FaqArea from './faq-area.vue';
import ShortBanner from '../customer-support/ShortBanner.vue';
import FooterFour from '../common/Footers/FooterFour.vue';

export default {
  components: { HeaderFour, PricingSection, TextBlock, UseAbleTools, FaqArea, ShortBanner, FooterFour },
  name:'PricingCsMain'
}
</script>