<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <FancyHero/>
    <ContactStyleLight/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from './fancy-hero.vue';
import ContactStyleLight from './contact-style.vue';
import Footer from '../common/Footers/Footer.vue';

export default {
  name:'ContactManagementMain',
  components: { Header,FancyHero,ContactStyleLight,Footer },
}
</script>