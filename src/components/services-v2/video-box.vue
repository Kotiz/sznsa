<template>
 <div>
    <div class="container">
    <div class="fancy-video-box-two">
      <img src="../../assets/images/media/img_107.png" alt="" class="main-img">
      <button data-bs-toggle="modal" data-bs-target="#videoModal"
        class="fancybox video-button d-flex align-items-center justify-content-center">
        <img src="../../assets/images/icon/170.svg" alt=""></button>
    </div>
  </div>

    <!-- VideoModal start -->
    <VideoModal videoId="aXFSJTjVjw0" />
    <!-- VideoModal end -->
 </div>
</template>

<script>
import VideoModal from '../common/Modal/VideoModal.vue';

export default {
  name: 'VideoBox',
  components: { VideoModal },
}
</script>