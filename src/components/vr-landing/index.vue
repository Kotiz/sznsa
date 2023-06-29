<template>
  <div class="main-page-wrapper p0 font-gordita overflow-hidden">
    <Header13/>
    <HeroBanner/>
    <FancyFeature/>
    <Features/>
    <CounterArea/>
    <VideoBox/>
    <FancyFeature2/>
    <ClientFeedback/>
    <FancyFeature3/>
    <FooterSeven :dark_btn="true" />
  </div>
</template>

<script>
import Header13 from '../common/Headers/Header-13.vue';
import HeroBanner from './hero-banner.vue';
import FancyFeature from './fancy-feature.vue';
import Features from './features.vue';
import CounterArea from './counter-area.vue';
import VideoBox from './video-box.vue';
import FancyFeature2 from './Fancy-feature-2.vue';
import ClientFeedback from './client-feedback.vue';
import FancyFeature3 from './fancy-feature-3.vue';
import FooterSeven from '../common/Footers/FooterSeven.vue';
export default {
    name: "VR_LandingMain",
    components: { Header13, HeroBanner, FancyFeature, Features, CounterArea, VideoBox, FancyFeature2, ClientFeedback, FancyFeature3, FooterSeven }
}
</script>