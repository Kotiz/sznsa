<template>
  <div class="fancy-feature-seventeen pt-150 md-pt-90" id="product">
    <div class="bg-wrapper">
      <div class="container">
        <div class="row">
          <div
            v-for="item in featureData"
            :key="item.id"
            class="col-lg-4 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            :data-aos-delay="item.delay"
          >
            <div class="block-meta">
              <div class="icon d-flex align-items-end">
                <img :src="item.icon" alt="" />
              </div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
            <!-- /.block-meta -->
          </div>
        </div>
      </div>
    </div>
    <!-- /.bg-wrapper -->
  </div>
</template>

<script>
export default {
  name: "FancyFeatureThree",
  data() {
    return {
      featureData: [
        {
          id: 1,
          icon: require(`@/assets/images/icon/94.svg`),
          title: "Web Clipper",
          desc: "Deski Web offers a complete lineup of features from any major browser.",
        },
        {
          id: 2,
          icon: require(`@/assets/images/icon/95.svg`),
          title: "All Platform",
          desc: "Lorem ipsum began as scrambl nonsensical Latin derived from Cicero's quis",
          delay: "100",
        },
        {
          id: 3,
          icon: require(`@/assets/images/icon/96.svg`),
          title: "Character Finding",
          desc: "Creation timelines for the standard lorem ipsum passage vary, with qius some citing.",
          delay: "200",
        },
        {
          id: 4,
          icon: require(`@/assets/images/icon/97.svg`),
          title: "App Integrations",
          desc: "Lorem ipsum began as scrambl nonsensical Latin derived from Cicero's quis",
        },
        {
          id: 5,
          icon: require(`@/assets/images/icon/98.svg`),
          title: "Web Application",
          desc: "Lorem ipsum began as scrambl nonsensical Latin derived from Cicero's quis",
          delay: "100",
        },
        {
          id: 6,
          icon: require(`@/assets/images/icon/99.svg`),
          title: "Notes & Docs",
          desc: "Letraset's dry-transfer sheets later entered the digital world via Aldus PageMaker.",
          delay: "200",
        },
      ],
    };
  },
};
</script>
