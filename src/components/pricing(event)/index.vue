<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <HeaderTwo/>
    <PricingSection/>
    <FaqArea/>
    <ShortBanner :price_event="true" />
    <FooterTwo/>
  </div>
</template>

<script>
import HeaderTwo from '../common/Headers/HeaderTwo.vue';
import PricingSection from './pricing-section.vue';
import FaqArea from './faq-area.vue';
import ShortBanner from '../Event/ShortBanner.vue';
import FooterTwo from '../common/Footers/FooterTwo.vue';

export default {
    name: "PricingEvent",
    components: { HeaderTwo, PricingSection, FaqArea, ShortBanner, FooterTwo }
}
</script>