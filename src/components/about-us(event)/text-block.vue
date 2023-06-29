<template>
  <div>
    <div class="fancy-text-block-twenty">
      <img src="../../assets/images/shape/124.svg" alt="" class="shapes shape-one">
      <img src="../../assets/images/shape/125.svg" alt="" class="shapes shape-two">
      <div class="container">
        <h1 class="title font-slab">About us</h1>
        <div class="fancy-video-box-one mb-130 md-mb-70">
          <img src="../../assets/images/media/img_65.png" alt="" class="main-img">
          <button data-bs-toggle="modal" data-bs-target="#videoModal"
            class="fancybox video-button d-flex align-items-center">
            <img src="../../assets/images/icon/66.svg" alt="">
          </button>
        </div> <!-- /.fancy-video-box-one -->

        <div class="row">
          <div class="col-lg-5" data-aos="fade-right" data-aos-duration="1200">
            <div class="client-info font-rubik">Over <span>150,000+ client</span></div>
            <div class="title-style-five">
              <h2><span>Best event</span><br> & ticket platform platform.</h2>
            </div>
          </div>
          <div class="col-lg-6 ms-auto" data-aos="fade-left" data-aos-duration="1200">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs md-mt-50">
              <li v-for="(item, index) in tab_content" :key="index" class="nav-item">
                <a :class="`nav-link font-slab ${item.active ? 'active' : ''}`" data-bs-toggle="tab"
                  :href="`#${item.id}`">{{ item.title }}</a>
              </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content mt-20">

              <div v-for="(item, index) in tab_content" :key="index"
                :class="`tab-pane ${item.active ? 'active' : 'fade'}`" :id="item.id">
                <p class="font-rubik">{{ item.desc_1 }} </p>
                <p class="font-rubik">{{ item.desc_2 }}</p>
              </div>

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

<script>
import VideoModal from '../common/Modal/VideoModal.vue'
export default {
    name: "TextBlock",
    data() {
        return {
            tab_content: [
                { id: "our-story", title: "Our Story", active: true, desc_1: "Lorem ipsum dolor sit amet, consecteur adipiscng elit sed do eiusmod tempor non sunt", desc_2: "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore nulla pariaturExcepteur sint occaecat cu proident, sunter in culpa qui officia deserunt mollit ." },
                { id: "our-mission", title: "Our Mission", desc_1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", desc_2: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor." },
                { id: "our-vision", title: "Our Vision", desc_1: "There are many variations of passages of Lorem Ipsum available, but the majority,", desc_2: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." },
            ]
        };
    },
    components: { VideoModal }
}
</script>