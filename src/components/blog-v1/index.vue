<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <FancyHero/>
    <FeatureBlog/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from './fancy-hero.vue'
import FeatureBlog from './feature-blog.vue';
import Footer from '../common/Footers/Footer.vue';

export default {
  name:'Blog_v1_Main',
  components: { Header,FancyHero,FeatureBlog, Footer },
}
</script>,
    FeatureBlog