<template>
  <div class="main-page-wrapper p0 font-gordita overflow-hidden">
    <HeaderNine/>
    <HeroBanner/>
    <FancyFeature/>
    <FancyFeature2/>
    <FancyFeature3/>
    <Testimonial/>
    <Partners/>
    <ShortBanner/>
    <FooterNine/>
  </div>
</template>

<script>
import HeaderNine from '../common/Headers/HeaderNine.vue';
import HeroBanner from './HeroBanner.vue';
import FancyFeature from './Fancy-feature.vue';
import FancyFeature2 from './Fancy-feature-2.vue';
import FancyFeature3 from './Fancy-feature-3.vue';
import Testimonial from './Testimonial.vue';
import Partners from './Partners.vue';
import ShortBanner from './ShortBanner.vue';
import FooterNine from '../common/Footers/FooterNine.vue';
export default {
    name: "AppointmentScheduleMain",
    components: { HeaderNine, HeroBanner, FancyFeature, FancyFeature2, FancyFeature3, Testimonial, Partners, ShortBanner, FooterNine }
}
</script>