<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <HeaderThree />
    <FancyHero />
    <ContactStyle />
    <FooterTwo :contact_event="true" />
  </div>
</template>

<script>
import HeaderThree from "../common/Headers/HeaderThree.vue";
import FancyHero from "./fancy-hero.vue";
import ContactStyle from "../common/contact-style.vue";
import FooterTwo from "../common/Footers/FooterTwo.vue";

export default {
  name: "ContactEventMain",
  components: { HeaderThree, FancyHero, ContactStyle, FooterTwo },
};
</script>