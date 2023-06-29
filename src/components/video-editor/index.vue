<template>
  <div class="main-page-wrapper font-gordita overflow-hidden">
    <HeaderEight/>
    <HeroBanner/>
    <FancyFeature/>
    <FancyFeature2/>
    <FancyFeature3/>
    <FancyFeature4/>
    <ClientFeedback/>
    <ShortBanner/>
    <FooterEight/>
  </div>
</template>

<script>
import HeaderEight from '../common/Headers/HeaderEight.vue';
import HeroBanner from './HeroBanner.vue';
import FancyFeature from './FancyFeature.vue';
import FancyFeature2 from './Fancy-feature-2.vue';
import FancyFeature3 from './Fancy-feature-3.vue';
import FancyFeature4 from './Fancy-feature-4.vue';
import ClientFeedback from './ClientFeedback.vue';
import ShortBanner from './ShortBanner.vue';
import FooterEight from '../common/Footers/FooterEight.vue';

export default {
    name: "VideoEditorMain",
    components: { HeaderEight, HeroBanner, FancyFeature, FancyFeature2, FancyFeature3, FancyFeature4, ClientFeedback, ShortBanner, FooterEight }
}
</script>