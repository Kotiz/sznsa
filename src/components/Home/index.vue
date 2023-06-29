<template>
  <div class="main-page-wrapper">
    <Header />
    <HeroArea />
    <FeatureOne />
    <FeatureTwo />
    <UseableTools />
    <FeatureThree />
    <ShortBanner />
    <Faq />
    <Footer />
  </div>
</template>

<script>
import Header from "../common/Headers/Header.vue";
import HeroArea from "./HeroArea.vue";
import FeatureOne from "./FeatureOne.vue";
import FeatureTwo from "./FeatureTwo.vue";
import UseableTools from "./UseableTools.vue";
import FeatureThree from "./FeatureThree.vue";
import ShortBanner from "./ShortBanner.vue";
import Faq from "./Faq.vue";
import Footer from "./Footer.vue";

export default {
  name: "HomeMain",
  components: {
    Header,
    HeroArea,
    FeatureOne,
    FeatureTwo,
    UseableTools,
    FeatureThree,
    ShortBanner,
    Faq,
    Footer,
  },
};
</script>