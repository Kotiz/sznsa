<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <HeaderFour/>
    <FancyHero/>
    <FancyTextBlock/>
    <CounterArea :feature_cs="true"/>
    <FancyFeature/>
    <FancyTextBlockTwo/>
    <UseAbleTools :feature="true"/>
    <FancyTextBlockThree/>
     <ShortBanner :feature_cs="true" />
    <FooterFour/>
  </div>
</template>

<script>
import HeaderFour from '../common/Headers/HeaderFour.vue';
import FancyHero from './fancy-hero.vue';
import FancyTextBlock from './fancy-text-block.vue';
import CounterArea from '../customer-support/CounterArea.vue';
import FancyFeature from './fancy-feature.vue';
import FancyTextBlockTwo from './fancy-text-block-2.vue';
import UseAbleTools from '../common/use-able-tools.vue';
import FancyTextBlockThree from './fancy-text-block-3.vue';
import ShortBanner from '../customer-support/ShortBanner.vue';
import FooterFour from '../common/Footers/FooterFour.vue';

export default {
  name:'FeatureCsMain',
  components: { HeaderFour, FancyHero, FancyTextBlock, CounterArea, FancyFeature, FancyTextBlockTwo, UseAbleTools, FancyTextBlockThree, ShortBanner, FooterFour },
}
</script>