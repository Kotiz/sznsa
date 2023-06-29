<template>
  <div class="main-page-wrapper overflow-hidden">
    <HeaderFour/>
    <FancyHero/>
    <FancyTextBlock/>
    <CounterArea :about="true" />
    <FancyTextBlockTwo/>
    <FancyFeature/>
    <TeamSection/>
    <ShortBanner/>
    <FooterFour/>
  </div>
</template>

<script> 
import HeaderFour from '../common/Headers/HeaderFour.vue';
import FancyHero from './fancy-hero.vue';
import FancyTextBlock from './fancy-text-block.vue';
import CounterArea from '../customer-support/CounterArea.vue';
import FancyTextBlockTwo from './fancy-text-block-2.vue';
import FancyFeature from './fancy-feature.vue';
import TeamSection from './team-section.vue';
import ShortBanner from '../customer-support/ShortBanner.vue';
import FooterFour from '../common/Footers/FooterFour.vue';

export default {
  name:'AboutUs(cs)',
  components:{
    HeaderFour,
    FancyHero,
    FancyTextBlock,
    CounterArea,
    FancyTextBlockTwo,
    FancyFeature,
    TeamSection,
    ShortBanner,
    FooterFour
}
}
</script>