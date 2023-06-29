<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <HeaderFour />
    <FancyHero />
    <ContactStyle />
    <ShortBanner :contact_cs="true" />
    <FooterFour />
  </div>
</template>

<script>
import HeaderFour from "../common/Headers/HeaderFour.vue";
import FancyHero from "./fancy-hero.vue";
import ContactStyle from "../common/contact-style.vue";
import ShortBanner from "../customer-support/ShortBanner.vue";
import FooterFour from "../common/Footers/FooterFour.vue";
export default {
  name: "ContactUsCsMain",
  components: { HeaderFour, FancyHero, ContactStyle, ShortBanner, FooterFour },
};
</script>