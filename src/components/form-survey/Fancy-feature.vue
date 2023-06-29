<template>
  <div class="fancy-feature-thirtyFour pt-150 md-pt-100">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-12 m-auto"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div class="title-style-eleven text-center mb-70 md-mb-10">
            <div class="upper-title">HOW IT WORKS</div>
            <h2>
              Create forms, surveys, & quizzes that people enjoy answering.
            </h2>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div
          v-for="item in featureData"
          :key="item.id"
          class="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          :data-aos-delay="item.delay"
        >
          <div class="block-style-thirtyFive text-center mt-30">
            <div
              class="icon d-flex align-items-center justify-content-center"
              :style="{ background: item.bg_color }"
            >
              <img :src="item.icon" alt="" />
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.subtitle }}</p>
          </div>
          <!-- /.block-style-thirtyFive -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FancyFeature",
  data() {
    return {
      featureData: [
        {
          id: 1,
          bg_color: "#F0F0FF",
          icon: require(`@/assets/images/icon/190.svg`),
          title: "Choose",
          subtitle: "Simplify the process to create proposals.",
        },
        {
          id: 2,
          bg_color: "#FCF2DA",
          icon: require(`@/assets/images/icon/191.svg`),
          title: "Create",
          subtitle: "Create interactive, error-free quotes.",
          delay: "100",
        },
        {
          id: 3,
          bg_color: "#EBFBED",
          icon: require(`@/assets/images/icon/192.svg`),
          title: "Check",
          subtitle: "Create interactive, error-free quotes.",
          delay: "200",
        },
        {
          id: 4,
          bg_color: "#FFEEEE",
          icon: require(`@/assets/images/icon/193.svg`),
          title: "Final",
          subtitle: "Create interactive, error-free quotes.",
          delay: "300",
        },
      ],
    };
  },
};
</script>
