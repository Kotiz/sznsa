<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <HeaderTwo/>
    <TextBlock/>
    <CounterArea :about_event="true" />
    <TeamSection/>
    <ChooseUs :about_event="true"/>
    <FeatureBlog/>
    <ShortBanner/>
    <FooterTwo/>
  </div>
</template>

<script>
import HeaderTwo from '../common/Headers/HeaderTwo.vue';
import TextBlock from './text-block.vue';
import CounterArea from '../customer-support/CounterArea.vue';
import TeamSection from './team-section.vue';
import ChooseUs from '../Event/ChooseUs.vue';
import FeatureBlog from './feature-blog.vue';
import ShortBanner from '../Event/ShortBanner.vue';
import FooterTwo from '../common/Footers/FooterTwo.vue';

export default {
    name: "AboutUsEventMain",
    components: { HeaderTwo, TextBlock, CounterArea, TeamSection, ChooseUs, FeatureBlog,ShortBanner, FooterTwo }
}
</script>