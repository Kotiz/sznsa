<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <HeaderFour/>
    <FancyHero/>
    <FancyFeature/>
    <FancyTextBlock/>
    <UseAbleTools :feature="true"/>
    <AboutArea/>
    <ShortBanner :product_cs="true" />
    <FooterFour/>
  </div>
</template>

<script>
import HeaderFour from '../common/Headers/HeaderFour.vue';
import FancyHero from './fancy-hero.vue';
import FancyFeature from './fancy-feature.vue';
import FancyTextBlock from './fancy-text-block.vue';
import UseAbleTools from '../common/use-able-tools.vue';
import AboutArea from './about-area.vue';
import ShortBanner from '../customer-support/ShortBanner.vue';
import FooterFour from '../common/Footers/FooterFour.vue';

export default {
    name: "Product_Cs_Main",
    components: { HeaderFour, FancyHero, FancyFeature, FancyTextBlock, UseAbleTools, AboutArea, ShortBanner, FooterFour }
}
</script>