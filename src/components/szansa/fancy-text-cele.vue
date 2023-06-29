<template>
<div>
  <div class="fancy-text-block-eleven mt-200 md-mt-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-last">
          <div class="text-wrapper pt-0">
            <div class="title-style-one mb-35 md-mb-20">
              <h2><span>Najważniejszymi zadaniami stowarzyszenia są: <img src="../../assets/images/shape/line-shape-5.svg" alt=""></span>

              </h2>
            </div> <!-- /.title-style-two -->
            <!-- <p>With Benefits from deski Pro, Earn rewards & Score discounts on purchases* Foryourself and your
              customers.</p> -->
          </div>
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="video-box">
            <img src="../../assets/images/media/img_106.png" alt="">
            <button data-bs-toggle="modal" data-bs-target="#videoModal"
              class="fancybox video-button d-flex align-items-center justify-content-center"><img
                src="../../assets/images/icon/170.svg" alt=""></button>
          </div> <!-- /.video-box -->
        </div>
      </div>
    </div>
    

    <div class="mt-70">
      <div class="container">
        <div class="row">
          
          <div v-for="item in block_data" :key="item.id" class="col-lg-4">
            <div class="block-style-thirtyThree pe-lg-5 mt-40">
              <div class="icon"><img :src="item.icon" alt=""></div>
              <h3 class="title" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; bold;"><span>{{item.title}}</span></h3>
              <p>{{item.subtitle}}</p>
            </div> <!-- /.block-style-thirtyThree -->
          </div>

        </div>
      </div>
    </div>
  </div>

      <!-- VideoModal start -->
    <VideoModal videoId="aXFSJTjVjw0" />
    <!-- VideoModal end -->
</div>
</template>

<style>

</style>

<script>
import VideoModal from '../common/Modal/VideoModal.vue';

export default {
    name: "FancyTextBlock",
    data() {
        return {
            block_data: [
                { id: 1, icon: require(`@/assets/images/icon/171.svg`), title: "Rozwijanie i propagowanie inicjatyw", subtitle: "oraz działań mających na celu dobro i szczęście dzieci, młodzieży oraz wspierających rodziny, zwłaszcza ubogie i z problemami" },
                { id: 2, icon: require(`@/assets/images/icon/171.svg`), title: "Poprawa losu dzieci i młodzieży ", subtitle: "oraz rodzin potrzebujących pomocy terapeutycznej, wychowawczej i materialnej" },
                { id: 3, icon: require(`@/assets/images/icon/171.svg`), title: "Wspieranie organizacyjne i rzeczowe ", subtitle: "osób fizycznych i jednostek organizacyjnych podejmujących działanie na rzecz dzieci i młodzieży z rodzin potrzebujących pomocy" },
            ]
        };
    },
    components: { VideoModal }
}
</script>