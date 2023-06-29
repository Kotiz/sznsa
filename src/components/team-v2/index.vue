<template>
  <div class="main-page-wrapper overflow-hidden">
     <Header/>
     <FancyHero/>
     <TeamSection :team_v2="true"/>
     <ShortBanner/>
     <Footer />
  </div>
</template>

<script>
import Header from '../common/Headers/Header.vue';
import FancyHero from './fancy-hero.vue';
import TeamSection from '../about-us(management)/team-section.vue';
import ShortBanner from './short-banner.vue';
import Footer from '../common/Footers/Footer.vue';

export default {
    name: "Team_v2_Main",
    components: { Header, FancyHero, TeamSection, ShortBanner , Footer }
}
</script>