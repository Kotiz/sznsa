<template>
  <div
    class="fancy-text-block-twentyThree lg-container pt-200 pt-30 md-mt-90"
    id="feature"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-6 order-lg-last" data-aos="fade-left">
          <div class="text-wrapper ps-xl-5">
            <div class="cl-text">Over <span>150,000+</span> client</div>
            <div class="title-style-twelve">
              <h2>Signture that work Smoothly.</h2>
              <p class="mt-35 mb-60 md-mb-40">
                Commonly used in the graphic, prit quis due & publishing indust
                for previewing lightly visual mockups.
              </p>
            </div>
            <a href="#" class="theme-btn-eight">Start Free Trial</a>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-right">
          <div class="img-container position-relative md-mt-60">
            <img
              src="../../assets/images/assets/screen_30.png"
              alt=""
              class="main-screen"
            />
            <img
              src="../../assets/images/assets/screen_31.png"
              alt=""
              class="screen-one"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-90 md-mt-50">
      <div class="container">
        <div class="row justify-content-between">
          <div
            v-for="item in textBlockData"
            :key="item.id"
            class="col-xl-3 col-md-4"
            data-aos="fade-up"
            :data-aos-delay="item.delay"
          >
            <div class="block-style-twentyEight text-center mt-40">
              <div class="icon d-flex justify-content-center align-items-end">
                <img :src="item.icon" alt="" />
              </div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.subtitle }}</p>
            </div>
            <!-- /.block-style-twentyEight -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FancyTextBlock",
  data() {
    return {
      textBlockData: [
        {
          id: 1,
          icon: require(`@/assets/images/icon/149.svg`),
          title: "Sign Doc Anywhere",
          subtitle:
            "Deski Web offers a complete lineup of features from any major browser.",
        },
        {
          id: 2,
          icon: require(`@/assets/images/icon/150.svg`),
          title: "Simple to use",
          subtitle:
            "Lorem ipsum began as scrambl nonsensical Latin derived from Cicero's quis",
          delay: "100",
        },
        {
          id: 3,
          icon: require(`@/assets/images/icon/151.svg`),
          title: "Save time & Effort",
          subtitle:
            "Creation timelines for the standard lorem ipsum passage vary, with qius some citing.",
          delay: "200",
        },
      ],
    };
  },
};
</script>
