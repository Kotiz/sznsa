<template>
  <div>
    <div class="video-box-two lg-container mt-200 md-mt-100">
      <div class="container">
        <div class="video-meta position-relative" data-aos="fade-up">
          <img src="../../assets/images/media/img_105.png" alt="">
          <button data-bs-toggle="modal" data-bs-target="#videoModal" class="fancybox video-icon d-flex align-items-center justify-content-center" data-fancybox=""
            href="https://www.youtube.com/embed/aXFSJTjVjw0" tabindex="0">
            <img src="../../assets/images/icon/148.svg" alt="">
          </button>
        </div>
      </div>
    </div>
    <!-- VideoModal start -->
    <VideoModal videoId="--DUa3eK2es" />
    <!-- VideoModal end -->
  </div>
</template>

<script>
import VideoModal from '../common/Modal/VideoModal.vue';

export default {
  name: 'VideoBox',
   components: {
    VideoModal,
  }
}
</script>