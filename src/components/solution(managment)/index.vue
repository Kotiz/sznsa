<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <FancyHero/>
    <FancyTextBlock/>
    <FancyTextBlock2/>
    <FeatureBlog/>
    <Faq :sol_m="true" />
    <ShortBanner />
    <Footer/>
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from './fancy-hero.vue';
import FancyTextBlock from './fancy-text-block.vue';
import FancyTextBlock2 from './fancy-text-block-2.vue';
import FeatureBlog from './feature-blog.vue';
import Faq from '../Home/Faq.vue';
import ShortBanner from '../Home/ShortBanner.vue';
import Footer from '../common/Footers/Footer.vue';

export default {
  name:'SolutionManagementMain',
  components: { Header, FancyHero, FancyTextBlock, FancyTextBlock2, FeatureBlog, Faq, ShortBanner, Footer },
}
</script>