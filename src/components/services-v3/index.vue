<template>
  <div class="main-page-wrapper overflow-hidden">
    <HeaderThree/>
    <FancyHero/>
    <Services/>
    <TextBlock/>
    <CounterArea :ser_v3="true"/>
    <ShortBanner/>
    <FooterNine/>
  </div>
</template>

<script>
import HeaderThree from '../common/Headers/HeaderThree.vue';
import FancyHero from './fancy-hero.vue';
import Services from './services.vue';
import TextBlock from './text-block.vue';
import CounterArea from '../website-builder/CounterArea.vue';
import ShortBanner from './short-banner.vue';
import FooterNine from '../common/Footers/FooterNine.vue';

export default {
  name:'Services_v3_Main',
  components: { HeaderThree, FancyHero, Services, TextBlock, CounterArea, ShortBanner, FooterNine },
}
</script>