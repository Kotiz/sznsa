<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <FancyHero/>
    <VideoBox/>
    <CounterInfo :ser_v2="true" />
    <Services/>
    <FancyTextBlock/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from './fancy-hero.vue';
import VideoBox from './video-box.vue';
import CounterInfo from '../about-us(management)/counter-info.vue';
import Services from './services.vue';
import FancyTextBlock from './fancy-text-block.vue';
import Footer from '../Home/Footer.vue';

export default {
    name: "Services_v2_Main",
    components: { Header, FancyHero, VideoBox, CounterInfo, Services, FancyTextBlock, Footer }
}
</script>