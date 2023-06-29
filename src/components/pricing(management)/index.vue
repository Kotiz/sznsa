<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <PricingSection/>
    <CounterArea/>
    <FancyTextBlock/>
    <Faq :price_management="true" />
    <ShortBanner />
    <Footer />
  </div>
</template>

<script>
import Header from "../common/Headers/Header.vue";
import PricingSection from './pricing-section.vue';
import CounterArea from "./counter-area.vue";
import FancyTextBlock from "./fancy-text-block.vue";
import Faq from "../Home/Faq.vue";
import ShortBanner from '../Home/ShortBanner.vue';
import Footer from '../common/Footers/Footer.vue';

export default {
  name:'PricingManagementMain',
  components: { Header, PricingSection, CounterArea, FancyTextBlock, Faq,ShortBanner,Footer }
}
</script>