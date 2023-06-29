<template>
  <div class="main-page-wrapper overflow-hidden">
    <HeaderFour />
    <HeroBanner />
    <FancyFeature />
    <FancyTextBlock />
    <CounterArea />
    <FancyTextBlockTwo/>
    <Features/>
    <UseableTools/>
    <ClientFeedback/>
    <ShortBanner/>
    <FooterFour/>
  </div>
</template>

<script>
import HeaderFour from '../common/Headers/HeaderFour.vue';
import HeroBanner from './HeroBanner.vue';
import FancyFeature from './FancyFeature.vue';
import FancyTextBlock from './FancyTextBlock.vue';
import CounterArea from './CounterArea.vue';
import FancyTextBlockTwo from './FancyTextBlockTwo.vue';
import Features from './Features.vue';
import UseableTools from './UseableTools.vue';
import ClientFeedback from './ClientFeedback.vue';
import ShortBanner from './ShortBanner.vue';
import FooterFour from '../common/Footers/FooterFour.vue';


export default {
  name: 'CustomerSupportMain',
  components: {
    HeaderFour,
    HeroBanner,
    FancyFeature,
    FancyTextBlock,
    CounterArea,
    FancyTextBlockTwo,
    Features,
    UseableTools,
    ClientFeedback,
    ShortBanner,
    FooterFour,
}
}
</script>