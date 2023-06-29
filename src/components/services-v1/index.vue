<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <HeaderFour />
    <FancyHero />
    <FancyTextBlock />
    <FancyServices />
    <FancyTextBlockTwo />
    <CounterArea :ser_page="true" />
    <ShortBanner :ser_page="true" />
    <FooterFour />
  </div>
</template>

<script>
import HeaderFour from "../common/Headers/HeaderFour.vue";
import FancyHero from "./fancy-hero.vue";
import FancyTextBlock from "./fancy-text-block.vue";
import FancyServices from "./fancy-services.vue";
import FancyTextBlockTwo from "./fancy-text-block-2.vue";
import CounterArea from "../customer-support/CounterArea.vue";
import ShortBanner from "../customer-support/ShortBanner.vue";
import FooterFour from "../common/Footers/FooterFour.vue";

export default {
  name: "Services_v1_Main",
  components: {
    FancyHero,
    HeaderFour,
    FancyTextBlock,
    FancyServices,
    FancyTextBlockTwo,
    CounterArea,
    ShortBanner,
    FooterFour
  },
};
</script>