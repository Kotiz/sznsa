<template>
  <div
    class="fancy-feature-twentySeven lg-container pt-100 pt-20 md-mt-60"
    id="product"
  >
    <div class="container">
      <div class="title-style-twelve text-center mb-70 md-mb-20">
        <div class="row">
          <div class="col-xl-10 col-lg-11 m-auto">
            <div class="upper-title">Working Process</div>
            <h2>
              <span
                >Works the way you already do
                <img src="../../assets/images/shape/line-shape-13.svg" alt=""
              /></span>
            </h2>
            <p class="mt-40 md-mt-30">
              Together with useful notifications, collaboration insights, and
              improvement tips – it’s time for your documents to start working
              for you.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          v-for="item in featureData"
          :key="item.id"
          class="col-lg-3 col-sm-6"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
        >
          <div class="block-style-twentySeven">
            <div class="icon d-flex align-items-end justify-content-center">
              <img :src="item.icon" alt="" />
            </div>
            <h4 class="font-gordita">{{ item.title }}</h4>
            <p>{{ item.subtitle }}</p>
          </div>
          <!-- /.block-style-twentySeven -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FancyFeatureTwo",
  data() {
    return {
      featureData: [
        {
          id: 1,
          icon: require(`@/assets/images/icon/144.svg`),
          title: "Contracts",
          subtitle: "Simplify the process to create proposals.",
        },
        {
          id: 2,
          icon: require(`@/assets/images/icon/145.svg`),
          title: "Proposal",
          subtitle: "Create interactive, error-free quotes.",
          delay: "100",
        },
        {
          id: 3,
          icon: require(`@/assets/images/icon/146.svg`),
          title: "eSignature",
          subtitle: "Create interactive, error-free quotes.",
          delay: "200",
        },
        {
          id: 4,
          icon: require(`@/assets/images/icon/147.svg`),
          title: "Collect Doc",
          subtitle: "Create interactive, error-free quotes.",
          delay: "300",
        },
      ],
    };
  },
};
</script>
