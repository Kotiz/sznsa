<template>
   <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <FancyHero/>
    <BlogArea/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from '../blog-v1/fancy-hero.vue';
import BlogArea from './blog-area.vue';
import Footer from '../common/Footers/Footer.vue';

export default {
  name:'Blog_v2_Main',
  components: { Header, FancyHero,BlogArea, Footer },
}
</script>