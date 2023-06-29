<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <HeaderThree />
    <FancyHero/>
    <TextBlock/>
    <CounterArea/>
    <TeamSection/>
    <UseableTools/>
    <MapArea/>
     <ShortBanner />
    <FooterThree/>
  </div>
</template>

<script>
import HeaderThree from '../common/Headers/HeaderThree.vue';
import FancyHero from './fancy-hero.vue';
import TextBlock from './text-block.vue';
import CounterArea from './counter-area.vue';
import TeamSection from './team-section.vue';
import UseableTools from './useable-tools.vue';
import MapArea from './map-area.vue';
import ShortBanner from '../doc-landing/ShortBanner.vue';
import FooterThree from '../common/Footers/FooterThree.vue';

export default {
  components: { HeaderThree, FancyHero, TextBlock, CounterArea, TeamSection, UseableTools, MapArea, ShortBanner, FooterThree },
  name:'AboutDocMain'
}
</script>