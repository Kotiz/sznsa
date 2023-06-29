<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <HeaderThree />
    <FancyHero />
    <ContactStyle :contact_doc="true" />
    <ShortBanner :spacing="true" />
    <FooterThree />
  </div>
</template>

<script>
import HeaderThree from "../common/Headers/HeaderThree.vue";
import FancyHero from "./fancy-hero.vue";
import ContactStyle from "../common/contact-style.vue";
import ShortBanner from "../doc-landing/ShortBanner.vue";
import FooterThree from "../common/Footers/FooterThree.vue";

export default {
  name: "ContactDocMain",
  components: {
    HeaderThree,
    FancyHero,
    ContactStyle,
    FooterThree,
    ShortBanner,
  },
};
</script>