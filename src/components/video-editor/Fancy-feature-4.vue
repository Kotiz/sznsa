<template>
  <div class="fancy-feature-twentyOne mt-200 md-mt-100" id="template">
    <div class="container">
      <div class="title-style-eight text-center mb-80 md-mb-30" data-aos="fade-up" data-aos-duration="1200">
        <h2>Ready Stunning Templates</h2>
        <p>Quick and easy to customize. No experience required.</p>
      </div>
    </div>

    <div class="lg-container">
      <div class="container">
        <div class="row justify-content-center">

          <div v-for="item in featureData" :key="item.id" class="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up"
            data-aos-duration="1200" :data-aos-delay="item.delay">
            <div class="block-style-twentyOne">
              <img :src="item.img" alt="" class="w-100">
              <button data-bs-toggle="modal" data-bs-target="#videoModal"
                class="d-flex align-items-center justify-content-center flex-column video-button">
                <span v-html="item.title"></span>
                <span class="icon d-flex align-items-center justify-content-center">
                  <img src="../../assets/images/icon/118.svg" alt=""></span>
              </button>
            </div> <!-- /.block-style-twentyOne -->
            <!-- VideoModal start  -->
            <VideoModal :videoId="item.video_id" />
            <!-- VideoModal end  -->
          </div>

        </div> <!-- /.row -->

        <div class="text-center mt-70" data-aos="fade-up" data-aos-duration="1200"><a href="#"
            class="theme-btn-nine">Start Building</a></div>
      </div>
    </div> <!-- /.lg-container -->
  </div>
</template>

<script>
import VideoModal from '../common/Modal/VideoModal.vue';

export default {
  name: 'FancyFeatureFour',
  components: {
    VideoModal,
  },
  data() {
    return {
      featureData: [
        {
          id: 1,
          title: 'Promoty <br> your Event',
          img: require(`@/assets/images/media/img_84.png`),
          video_id: 'aXFSJTjVjw0'
        },
        {
          id: 2,
          title: 'Social Media <br> Promotion',
          img: require(`@/assets/images/media/img_85.png`),
          video_id: 'aXFSJTjVjw0',
          delay: '50'
        },
        {
          id: 3,
          title: 'Youtube Creator <br>Intro',
          img: require(`@/assets/images/media/img_86.png`),
          video_id: 'aXFSJTjVjw0',
          delay: '100'
        },
        {
          id: 4,
          title: 'Dancing <br>People adv',
          img: require(`@/assets/images/media/img_87.png`),
          video_id: 'aXFSJTjVjw0',
          delay: '150'
        },
        {
          id: 5,
          title: 'Cartoon for <br>children',
          img: require(`@/assets/images/media/img_88.png`),
          video_id: 'aXFSJTjVjw0',
          delay: '50'
        },
        {
          id: 6,
          title: 'Music <br>Learning',
          img: require(`@/assets/images/media/img_89.png`),
          video_id: 'aXFSJTjVjw0',
          delay: '100'
        },
        {
          id: 7,
          title: 'Greeting <br>intro',
          img: require(`@/assets/images/media/img_90.png`),
          video_id: 'aXFSJTjVjw0',
          delay: '150'
        },
        {
          id: 8,
          title: 'Work <br>From Home',
          img: require(`@/assets/images/media/img_91.png`),
          video_id: 'aXFSJTjVjw0',
          delay: '200'
        },
      ]
    }
  }
}
</script>