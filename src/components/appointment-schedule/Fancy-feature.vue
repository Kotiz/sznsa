<template>
  <div class="fancy-feature-twentyTwo pt-200 md-pt-120">
    <div class="container">
      <div class="row">
        <div
          class="col-xl-7 col-md-8 m-auto"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div class="title-style-eight text-center mb-40 md-mb-10">
            <h2>
              One Platform. For any
              <span
                >business <img src="../../assets/images/shape/191.svg" alt=""
              /></span>
            </h2>
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
            <div
              class="icon d-flex align-items-center justify-content-center"
              :style="{ background: item.color }"
            >
              <img :src="item.icon" alt="" />
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
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
          color: "#FF4A8B",
          icon: require(`@/assets/images/icon/121.svg`),
          title: "Appoinments",
          desc: "Online video meetings image Online Video Meetings SimplyBook",
        },
        {
          id: 2,
          color: "#6D49FF",
          icon: require(`@/assets/images/icon/122.svg`),
          title: "Class Booking",
          desc: "Add video meeting links to your appointments with the Zoom Ror Teleport integrations.",
          delay: "100",
        },
        {
          id: 3,
          color: "#FFB951",
          icon: require(`@/assets/images/icon/123.svg`),
          title: "Fast Support",
          desc: "Customize your virtual office with personalized page URLs, logos, colors and more.",
          delay: "200",
        },
      ],
    };
  },
};
</script>
