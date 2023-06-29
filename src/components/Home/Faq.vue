<template>
  <div :class="`faq-classic ${price_management ? 'pt-150 pb-130 md-pt-100' : !sol_m && 'pt-225 md-pt-120'}
  ${sol_m ? 'pt-150 pb-150 md-pt-120 md-pb-120' : ''}`">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="title-style-one">
            <h6 class="font-rubik">Find your answers</h6>
            <h2>Have any thought? Look here.</h2>
          </div>
          <!-- /.title-style-one -->
          <router-link to="/faqs" class="theme-btn-one mt-50 md-mt-30">Go to Faq</router-link>
        </div>
        <div class="col-lg-6">
          <!-- ================== FAQ Panel ================ -->

          <div id="accordionExample" class="md-mt-60 accordion">

             <div v-for="item in faqData" :key="item.id" class="accordion-item">
              <div class="accordion-header" :id="item.headingNum">
                <h5 class="mb-0">
                  <button class="btn btn-link accordion-button" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#' + item.collapseNum" :aria-expanded="item.expanded ? 'true' : 'false'" :aria-controls="item.collapseNum">
                    {{item.btnText}}
                  </button>
                </h5>
              </div>
              <div :id="item.collapseNum" :class="item.collapseClass" :aria-labelledby="item.headingNum" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    {{item.desc}}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <!-- /.col- -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqArea",
  props:{price_management:Boolean,sol_m:Boolean},
  data() {
    return {
      faqData: [
        {
          id: 1,
          headingNum:'headingOne',
          collapseNum:"collapseOne",
          btnText:"How the affiliate programe works?",
          desc:'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass:'accordion-collapse collapse'
        },
        {
          id: 2,
          headingNum:'headingTwo',
          collapseNum:"collapseTwo",
          btnText:"How to create customer panel?",
          desc:'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          expanded:true,
          collapseClass:'accordion-collapse collapse show'
        },
        {
          id: 3,
          headingNum:'headingThree',
          collapseNum:"collapseThree",
          btnText:"How delete my account?",
          desc:'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass:'accordion-collapse collapse'
        },
        {
          id: 4,
          headingNum:'headingFour',
          collapseNum:"collapseFour",
          btnText:"Ho to invite people with refferel link?",
          desc:'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass:'accordion-collapse collapse'
        },
        {
          id: 5,
          headingNum:'headingFive',
          collapseNum:"collapseFive",
          btnText:"Is ios app available for the iphone?",
          desc:'mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.',
          collapseClass:'accordion-collapse collapse'
        },
      ]
    }
  }
};
</script>+