<template>
  <div
    class="fancy-feature-twentyTwo mt-200 pt-130 md-pt-80 sm-pt-100"
    id="product"
  >
    <div class="container">
      <div class="title-style-ten mb-40 md-mb-20">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <h2>The Product we work with.</h2>
          </div>
          <div class="col-lg-5">
            <p class="md-pt-20">
              Commonly used in the graphic, print& publishing industris for
              previewing visual mockups.
            </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div
          v-for="item in featureData"
          :key="item.id"
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          :data-aos-delay="item.delay"
        >
          <div class="block-style-twentyTwo">
            <router-link to="/service-details">
              <div
                class="icon d-flex align-items-center justify-content-center"
                :style="{ background: item.color }"
              >
                <img :src="item.icon" alt="" />
              </div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.subtitle }}</p>
              <a href="#" class="arrow-icon"
                ><img src="../../assets/images/icon/135.svg" alt=""
              /></a>
            </router-link>
          </div>
          <!-- /.block-style-twentyTwo -->
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
          color: "#FFEBDB",
          icon: require(`@/assets/images/icon/132.svg`),
          title: "Core PHP",
          subtitle: "Elit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          id: 2,
          color: "#E0F8F8",
          icon: require(`@/assets/images/icon/133.svg`),
          title: "Easy Customizable",
          subtitle: "quis nostrud exerct ullamo ea nisi ut aliqu dolor",
          delay: "100",
        },
        {
          id: 3,
          color: "#F7EDFF",
          icon: require(`@/assets/images/icon/134.svg`),
          title: "Fast Support",
          subtitle: "Duis aute irure dolor reprehen derit in voluptat velit.",
          delay: "200",
        },
      ],
    };
  },
};
</script>
