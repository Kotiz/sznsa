<template>
  <div>
    <div
      class="fancy-feature-twentyEight lg-container pt-150 pt-50 md-mt-70"
      id="story"
    >
      <div class="container">
        <div class="row">
          <div class="col-xl-11 m-auto" data-aos="fade-up">
            <div class="title-style-twelve text-center pb-80 md-pb-30">
              <div class="upper-title">Customer Stories</div>
              <h2>
                <span
                  >1,000,000+
                  <img src="../../assets/images/shape/line-shape-13.svg" alt=""
                /></span>
                organizations are already becoming more agreeable.
              </h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            v-for="item in featureData"
            :key="item.id"
            class="col-lg-6 mt-40"
            data-aos="fade-up"
            :data-aos-delay="item.delay"
          >
            <div
              class="block-style-twentyNine"
              :style="{ background: item.bg_color }"
            >
              <div class="logo"><img :src="item.logo" alt="" /></div>
              <button
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
                class="fancybox d-flex video-icon tran3s"
                tabindex="0"
              >
                <img src="../../assets/images/icon/152.svg" alt="" />
              </button>
              <h3>
                <router-link to="/blog-details">{{ item.title }}</router-link>
              </h3>
              <router-link
                to="/blog-details"
                class="read-more-btn d-flex justify-content-between align-items-center w-100"
              >
                <span>Continue Reading</span>
                <img src="../../assets/images/icon/153.svg" alt="" />
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center mt-80 md-mt-50">
          <a href="#" class="theme-btn-ten"
            >Read all customer stories
            <i class="fa fa-chevron-right" aria-hidden="true"></i
          ></a>
        </div>
      </div>
    </div>

    <!-- VideoModal start -->
    <VideoModal videoId="aXFSJTjVjw0" />
    <!-- VideoModal end -->
  </div>
</template>

<script>
import VideoModal from "../common/Modal/VideoModal.vue";

export default {
  name: "FancyFeature",
  components: {
    VideoModal,
  },
  data() {
    return {
      featureData: [
        {
          id: 1,
          bg_color: "#623A75",
          logo: require(`@/assets/images/logo/logo-53.png`),
          videoId: "aXFSJTjVjw0",
          title:
            "Seattle Opera Simplifies Performance Planning with deski eSignature.",
        },
        {
          id: 2,
          bg_color: "#314B7D",
          logo: require(`@/assets/images/logo/logo-54.png`),
          videoId: "aXFSJTjVjw0",
          title: "How DocuSign CLM Helps Celonis Scale Its Global Business",
          delay: "100",
        },
        {
          id: 3,
          bg_color: "#2B4E56",
          logo: require(`@/assets/images/logo/logo-55.png`),
          videoId: "aXFSJTjVjw0",
          title:
            "Sunrun makes solar contracts convenient with deski and Salesforce",
        },
        {
          id: 4,
          bg_color: "#7A4040",
          logo: require(`@/assets/images/logo/logo-56.png`),
          videoId: "aXFSJTjVjw0",
          title:
            "McCloskey Motors builds a touchless car sale process with Design.",
          delay: "100",
        },
      ],
    };
  },
};
</script>
