<template>
  <div :class="`fancy-text-block-six ${about_event ? 'mt-250 pt-50 md-mt-130' : 'mt-250 md-mt-200'}`">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
          <div class="title-style-five mb-35">
            <h6>Why choose us</h6>
            <h2><span>Why you should</span> choose us?</h2>
          </div>

          <!-- Accordion Style Two -->
          <div id="accordionExample" class="accordion-style-two pe-5">
            <div v-for="item in faqData" :key="item.id" class="accordion-item">
              <div class="accordion-header arrow-open" :id="item.headingNum">
                <h5 class="mb-0">
                  <button class="btn btn-link accordion-button" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#' + item.collapseNum" :aria-expanded="item.expanded ? 'true' : 'false'"
                    :aria-controls="item.collapseNum">
                    {{ item.btnText }}
                  </button>
                </h5>
              </div>
              <div :id="item.collapseNum" :class="item.collapseClass" :aria-labelledby="item.headingNum"
                data-bs-parent="#accordionExample" style="">
                <div class="accordion-body">
                  <p>{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-8 m-auto" data-aos="fade-left" data-aos-duration="1200">
          <div class="illustration-holder d-flex justify-content-end md-mt-50">
            <img src="../../assets/images/media/img_58.png" alt="">
            <img src="../../assets/images/shape/113.svg" alt="" class="shapes shape-one">
          </div> <!-- /.illustration-holder -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseUs',
  props:{
    about_event:Boolean,
  },
  data() {
    return {
      faqData: [
        {
          id: 1,
          headingNum: 'headingOne',
          collapseNum: "collapseOne",
          btnText: "Register and create your first seller portal.",
          desc: 'It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.',
          collapseClass: 'accordion-collapse collapse show',
          expanded: true,
        },
        {
          id: 2,
          headingNum: 'headingTwo',
          collapseNum: "collapseTwo",
          btnText: "Manage your client easily",
          desc: 'It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.',
          collapseClass: 'accordion-collapse collapse'
        },
        {
          id: 3,
          headingNum: 'headingThree',
          collapseNum: "collapseThree",
          btnText: "Start selling ticket",
          desc: 'It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.',
          collapseClass: 'accordion-collapse collapse'
        },
      ]
    }
  }
}
</script>