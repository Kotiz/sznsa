<template>
  <div class="faqs-inner-page">
    <img src="../../assets/images/shape/66.svg" alt="" class="shapes shape-one">
    <div class="shapes shape-two"></div>
    <div class="shapes shape-three"></div>
    <div class="shapes shape-four"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-11 m-auto">
          <div class="faqs-header pb-60 md-pb-50">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex">
                  <img src="../../assets/images/icon/48.svg" alt="" class="icon">
                  <div class="md-mb-30">
                    <h3>FAQs</h3>
                    <p class="collection-preview">Selling tickets for a raffle, lottery or sweepstake is prohibited on
                      Eventsmatic.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="avatar d-flex align-items-center">
                  <img src="../../assets/images/media/img_41.png" alt="">
                  <img src="../../assets/images/media/img_42.png" alt="">
                  <span class="avatar_image avatar_fallback font-rubik">+1</span>
                </div>
                <p class="collection-info"><span>63 articles</span> in this collection <br> Written by Jonny White,
                  Emily Coddington and <span>1</span> other</p>
              </div>
            </div>
          </div> <!-- /.faqs-header -->


          <div class="all-faqs">
            <div class="faqs-all-qus">

              <div v-for="faq in faq_data" :key="faq.id" class="article-preview d-flex">
                <router-link :to="`/faq-details/${faq.id}`">
                  <img :src="faq.img" alt="" class="avatar-img">
                  <div>
                    <h3 class="font-rubik">{{ faq.title }}</h3>
                    <div class="avatar-info" v-html="faq.info">
                    </div>
                  </div>
                </router-link>
              </div> <!-- /.article-preview -->

            </div> <!-- /.faqs-all-qus -->
          </div> <!-- /.all-faqs -->

          <div class="text-center more-faq-ask">
            <h3 class="mb-35 font-rubik">Don’t find your answer?</h3>
            <router-link to="contact-us-cs" class="theme-btn-one">Contact us</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faqMixin from '@/mixin/faq-mixin';

export default {
  name: 'FaqArea',
  mixins: [faqMixin]
}
</script>