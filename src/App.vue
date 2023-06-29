<template>
  <!-- <sideBar/> -->
  <Header  />
  <router-view/>
  <FooterNine />
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Header from './components/common/Headers/Header.vue'
import FooterNine from './components/common/Footers/FooterNine.vue';
// import sideBar from './side-bar-awesome.vue';
// import sideBar from './components/portfolio-v3/side-bar-awesome.vue'


onMounted(() => {
  AOS.init({
    duration: 1200,
  });
});
</script>

