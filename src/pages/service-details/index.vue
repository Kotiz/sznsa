<template>
  <div class="main-page-wrapper p0 overflow-hidden">
    <!-- header start -->
    <HeaderThree />
    <!-- header end -->
    <!-- hero area start -->
    <div class="fancy-hero-five">
      <div class="bg-wrapper">
        <div class="container">
          <div class="text-center row">
            <div class="col-xl-9 m-auto">
              <h1 class="heading">Web Design</h1>
              <p class="sub-heading space-xs font-gordita mt-15">We are a creative company that focuses on establishing
                long-term relationships with customers.</p>
            </div>
          </div>
        </div>
      </div> <!-- /.bg-wrapper -->
    </div>
    <!-- hero area end -->

    <!-- details area start -->
    <div class="service-details-one pt-150 md-pt-100">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-lg-8 order-lg-last">
            <div class="details-wrapper ps-xl-5">
              <h2 class="font-gordita">World best web design service provider.</h2>
              <p class="sub-heading font-gordita pt-30 pb-70 md-pb-40">
                Commonly used in the graphic, prit quis due & publishing indust for previewing lightly visual mockups.
              </p>
              <img src="../../assets/images/gallery/img_42.jpg" alt="" class="img-meta w-100">
              <p class="pt-40 pb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at
                dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Maecenas interdum.</p>
              <div class="row">
                <div class="col-md-6">
                  <h4 class="font-gordita pt-40">Our Goal</h4>
                  <ul class="list-item-one">
                    <li>Various analysis options.</li>
                    <li>Page Load (time, number of requests).</li>
                    <li>Big data analysis.</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h4 class="font-gordita pt-40">The Challange</h4>
                  <p>Deski Web offers a complete lineup of features from any major Maecena quis interdum, orci at euis
                    dapibus, mass ante pharetra tellus massa ante pharetra tellus.</p>
                </div>
              </div>
              <h3 class="font-gordita pt-90 pb-60 md-pt-50">Any Questions find here.</h3>

              <div id="accordionExample" class="accordion-style-three">

                <div v-for="item in faqData" :key="item.id" class="accordion-item">
                  <div class="accordion-header" :id="item.headingNum">
                    <h5 class="mb-0">
                      <button class="btn btn-link accordion-button" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#' + item.collapseNum" :aria-expanded="item.expanded ? 'true' : 'false'" :aria-controls="item.collapseNum">
                        {{ item.btnText }}
                      </button>
                    </h5>
                  </div>
                  <div :id="item.collapseNum" :class="item.collapseClass" :aria-labelledby="item.headingNum"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        {{ item.desc }}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div> <!-- /.details-wrapper -->
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 order-lg-first">
            <div class="sidebar md-mt-100">
              <div class="category-list">
                <h4 class="font-gordita">Services</h4>
                <ul>
                  <li><a href="#" class="active">Web Design</a></li>
                  <li><a href="#">Mockup</a></li>
                  <li><a href="#">Print Design</a></li>
                  <li><a href="#">Logo</a></li>
                  <li><a href="#">Mobile Application</a></li>
                  <li><a href="#">Branding</a></li>
                  <li><a href="#">Illusutration</a></li>
                </ul>
              </div> <!-- /.category-list -->
              <div class="sidenote">
                <p>Evernote Web offers a complete lineup major linup browser</p>
                <span>- Rashed ka.</span>
              </div>
              <div class="share-option">
                <h4 class="font-gordita">Share it. </h4>
                <ul class="d-flex social-icon">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div> <!-- /.sidebar -->
          </div>
        </div>
      </div>
    </div>
    <!-- details area end -->

    <!-- footer start -->
    <Footer/>
    <!-- footer end -->
  </div>
</template>

<script>
import HeaderThree from '@/components/common/Headers/HeaderThree.vue';
import Footer from '@/components/Home/Footer.vue';

export default {
  name:'ServiceDetails',
  components: { HeaderThree, Footer },
  data() {
    return {
      faqData: [
        {
          id: 1,
          headingNum: 'headingOne',
          collapseNum: "collapseOne",
          btnText: "How the affiliate programe works?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse'
        },
        {
          id: 2,
          headingNum: 'headingTwo',
          collapseNum: "collapseTwo",
          btnText: "How to create customer panel?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          expanded: true,
          collapseClass: 'accordion-collapse collapse'
        },
        {
          id: 3,
          headingNum: 'headingThree',
          collapseNum: "collapseThree",
          btnText: "How delete my account?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse'
        },
        {
          id: 4,
          headingNum: 'headingFour',
          collapseNum: "collapseFour",
          btnText: "Ho to invite people with refferel link?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse'
        },
      ]
    }
  },
}
</script>