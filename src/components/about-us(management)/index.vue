<template>
  <div class="main-page-wrapper overflow-hidden">
    <Header/>
    <FancyHero/>
    <FancyTextBlock/>
    <CounterInfo/>
    <FancyTextBlockTwo/>
    <TextBlock3/>
    <TeamSection/>
    <UseableTools :about_m="true" />
    <BlogArea/>
    <ShortBanner />
    <Footer />
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from './fancy-hero.vue';
import FancyTextBlock from './fancy-text-block.vue';
import CounterInfo from './counter-info.vue';
import FancyTextBlockTwo from './fancy-text-block-2.vue';
import TextBlock3 from './text-block-3.vue';
import TeamSection from './team-section.vue';
import UseableTools from '../Home/UseableTools.vue';
import BlogArea from './blog-area.vue';
import ShortBanner from '../Home/ShortBanner.vue';
import Footer from '../common/Footers/Footer.vue';

export default {
    name: "AboutUsManagementMain",
    components: { Header, FancyHero, FancyTextBlock, CounterInfo, FancyTextBlockTwo, TextBlock3, TeamSection, UseableTools, BlogArea, ShortBanner, Footer }
}
</script>