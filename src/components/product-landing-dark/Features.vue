<template>
  <div class="fancy-feature-twelve pt-250 md-pt-50" id="about">
    <div class="bg-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-10 col-md-8 m-auto">
            <div class="title-style-six text-center">
              <h2>Check why you <span>Should</span> Choose us</h2>
            </div>
            <!-- /.title-style-six -->
          </div>
        </div>

        <div class="row justify-content-center pt-50 md-pt-20">
          <div
            v-for="item in featureData"
            :key="item.id"
            class="col-lg-4 col-md-6"
          >
            <div class="block-style-seventeen mt-40">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <img :src="item.icon" alt="" />
              </div>
              <div class="static-text">
                <h3>{{ item.title }}</h3>
                <p>{{ item.subtitle }}</p>
              </div>
              <div class="hover-text">{{ item.hover_text }}</div>
            </div>
            <!-- /.block-style-seventeen -->
          </div>
        </div>
      </div>
    </div>
    <!-- /.bg-wrapper -->
    <img
      src="../../assets/images/shape/151.svg"
      alt=""
      class="shapes shape-one"
    />
  </div>
</template>

<script>
export default {
  name: "FeatureArea",
  data() {
    return {
      featureData: [
        {
          id: 1,
          icon: require(`@/assets/images/icon/78.svg`),
          title: "Easy Customizable",
          subtitle: "Duis aute irure dolor reprehen derit in voluptat velit.",
          hover_text: "Bring all team slit managment task quis togather.",
        },
        {
          id: 2,
          icon: require(`@/assets/images/icon/79.svg`),
          title: "Modern & Slick",
          subtitle: "Duis aute irure dolor reprehen derit in voluptat velit.",
          hover_text: "Bring all team slit managment task quis togather.",
        },
        {
          id: 3,
          icon: require(`@/assets/images/icon/80.svg`),
          title: "Trusted & Secure",
          subtitle: "Duis aute irure dolor reprehen derit in voluptat velit.",
          hover_text: "Bring all team slit managment task quis togather.",
        },
      ],
    };
  },
};
</script>
