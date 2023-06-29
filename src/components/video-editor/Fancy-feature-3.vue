<template>
  <div class="fancy-feature-twenty mt-225 md-mt-150">
    <div class="container">

      <div v-for="item in featureData" :key="item.id" :class="`block-style-twenty ${item.item_2 ? item.item_2 : ''}`">
        <div class="row align-items-center">
          <div :class="`col-lg-6 ${item.order_first ? item.order_first : ''}`" 
          :data-aos="item.fade_first" data-aos-duration="1200">
            <div :class="`text-wrapper ${item.padd}`">
              <h6>{{item.sm_text}}</h6>
              <h3 class="title">{{item.title}}</h3>
              <p>{{item.subtitle}}</p>
              <button class="d-flex align-items-center video-button fancybox order-sm-last" data-bs-toggle="modal" data-bs-target="#videoModal">
                <i class="fa fa-caret-right" aria-hidden="true"></i>
                <span>WATCH VIDEO</span>
              </button>
            </div> <!-- /.text-wrapper -->
          </div>
          <div :class="`col-lg-6 col-md-8 m-auto ${item.order_last ? item.order_last : ''}`" 
          :data-aos="item.fade_last" data-aos-duration="1200">
            <img :src="item.img" alt="" class="m-auto">
          </div>
        </div>
        <!-- VideoModal start  -->
        <VideoModal :videoId="item.video_id" />
        <!-- VideoModal end  -->
      </div> <!-- /.block-style-twenty -->
    </div>
  </div>

</template>

<script>
import VideoModal from '../common/Modal/VideoModal.vue';

export default {
  name: 'FancyFeatureThree',
  components: {
    VideoModal,
  },
  data () {
    return {
      featureData : [
        {
          id:1,
          order_first:'order-lg-last',
          fade_first:'fade-left',
          padd:'ps-5',
          sm_text:'SUPPORTED',
          title:'Import & Export all format.',
          subtitle:'Go paperless. Back up important documents to all your devices, and keep the information not the clutter.',
          video_id:'aXFSJTjVjw0',
          order_last:'order-lg-first',
          img:require(`@/assets/images/media/img_82.png`),
          fade_last:'fade-right',
        },
        {
          id:2,
          item_2:'mt-170 md-mt-120',
          fade_first:'fade-right',
          padd:'pe-5',
          sm_text:'SHARE CoNTENT',
          title:'Share content all platform.',
          subtitle:'Upload, edit, and share files with a team in a single place. Secure, backed up, and cross-device - now, work can happen from anywhere.',
          video_id:'hIVTVDqzR4I',
          img:require(`@/assets/images/media/img_83.png`),
          fade_last:'fade-left',
        },
      ]
    }
  }
}
</script>