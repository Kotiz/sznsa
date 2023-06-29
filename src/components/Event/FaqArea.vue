<template>
  <div class="faq-section-four">
    <img src="../../assets/images/shape/120.svg" alt="" class="shapes shape-one">
    <img src="../../assets/images/shape/121.svg" alt="" class="shapes shape-two">
    <div class="container">
      <div class="title-style-five text-center mb-80 md-mb-60">
        <h6>FAQ</h6>
        <h2><span>Question & Answer</span></h2>
      </div>

      <div class="row">
        <div class="col-xl-9 col-lg-10 m-auto" data-aos="fade-up" data-aos-duration="1200">
          <div id="accordion" class="accordion-style-four">


            <div v-for="item in faqData" :key="item.id" class="accordion-item">
              <div class="accordion-header" :id="item.headingNum">
                <h5 class="mb-0">
                  <button class="btn btn-link accordion-button" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#' + item.collapseNum" :aria-expanded="item.expanded ? 'true' : 'false'"
                    :aria-controls="item.collapseNum">
                    {{ item.btnText }}
                  </button>
                </h5>
              </div>
              <div :id="item.collapseNum" :class="item.collapseClass" :aria-labelledby="item.headingNum"
                data-bs-parent="#accordion">
                <div class="accordion-body">
                  <p>
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div class="text-center mt-60 md-mt-50" data-aos="fade-up" data-aos-duration="1200">
        <h3 class="font-rubik pb-30">Don’t find your answer?</h3>
        <router-link to="/contact-us-event" class="theme-btn-five">Contact us</router-link>
      </div>
    </div> <!-- /.container -->
  </div>
</template>

<script>
export default {
  name: 'FaqArea',
  data() {
    return {
      faqData: [
        {
          id: 1,
          headingNum: 'headingOne',
          collapseNum: "collapseOne",
          btnText: "How does the free trial work?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse show',
          expanded: true,
        },
        {
          id: 2,
          headingNum: 'headingTwo',
          collapseNum: "collapseTwo",
          btnText: "How do you weigh different criteria in your process?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse',
        },
        {
          id: 3,
          headingNum: 'headingThree',
          collapseNum: "collapseThree",
          btnText: "What does First Round look for in an idea?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse',
        },
        {
          id: 4,
          headingNum: 'headingFour',
          collapseNum: "collapseFour",
          btnText: "What do you look for in a founding team?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse',
        },
        {
          id: 5,
          headingNum: 'headingFive',
          collapseNum: "collapseFive",
          btnText: "Do you recommend Pay as you go or Pre pay?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse',
        },
        {
          id: 6,
          headingNum: 'headingSix',
          collapseNum: "collapseSix",
          btnText: "Can I pass the fees on to my customers?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse',
        },
        {
          id: 7,
          headingNum: 'headingSeven',
          collapseNum: "collapseSeven",
          btnText: "lorem ipsum dummy text here will some questions?",
          desc: 'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass: 'accordion-collapse collapse',
        },
      ]
    }
  }
}
</script>