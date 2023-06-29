<template>
  <div class="faq-section-five lg-container pt-200 pt-25 md-mt-80" id="faq">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-6">
          <div class="title-style-twelve">
            <div class="upper-title">FAQ</div>
            <h2>Any Questions find here.</h2>
            <p class="pt-25 pb-40 md-pb-30">
              Find your answers here. if you don’t find it here, please contact
              us.
            </p>
            <router-link to="/contact-us-management" class="theme-btn-eight"
              >Contact us</router-link
            >
          </div>
        </div>
        <div class="col-lg-6 ms-auto">
          <div id="accordionExample" class="accordion-style-five md-mt-60">
            <div v-for="item in faqData" :key="item.id" class="accordion-item">
              <div class="accordion-header" :id="item.headingNum">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#' + item.collapseNum"
                    :aria-expanded="item.expanded ? 'true' : 'false'"
                    :aria-controls="item.collapseNum"
                  >
                    {{ item.btnText }}
                  </button>
                </h5>
              </div>
              <div
                :id="item.collapseNum"
                :class="item.collapseClass"
                :aria-labelledby="item.headingNum"
                data-bs-parent="#accordionExample"
              >
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
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqArea",
  data() {
    return {
      faqData: [
        {
          id: 1,
          headingNum: "headingOne",
          collapseNum: "collapseOne",
          btnText: "How does the free trial work?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: "accordion-collapse collapse",
        },
        {
          id: 2,
          headingNum: "headingTwo",
          collapseNum: "collapseTwo",
          btnText: "How do you different criteria in your process?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          expanded: true,
          collapseClass: "accordion-collapse collapse show",
        },
        {
          id: 3,
          headingNum: "headingThree",
          collapseNum: "collapseThree",
          btnText: "What does First Round look for in an idea?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: "accordion-collapse collapse",
        },
        {
          id: 4,
          headingNum: "headingFour",
          collapseNum: "collapseFour",
          btnText: "What do you look for in a founding team?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: "accordion-collapse collapse",
        },
        {
          id: 5,
          headingNum: "headingFive",
          collapseNum: "collapseFive",
          btnText: "Do you recommend Pay as you go or Pre pay?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: "accordion-collapse collapse",
        },
        {
          id: 6,
          headingNum: "headingSix",
          collapseNum: "collapseSix",
          btnText: "Can I pass the fees on to my customers?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: "accordion-collapse collapse",
        },
        {
          id: 7,
          headingNum: "headingSeven",
          collapseNum: "collapseSeven",
          btnText: "How do I get paid for the tickets sold?",
          desc: `It's free to use for your first five ticket sales. Once your sixth ticket purchase comes through we will start charging the standard PAYG rate. If you would like to move to Pre pay then head to "Billing" and "Buy ticket credits".`,
          collapseClass: "accordion-collapse collapse",
        },
      ],
    };
  },
};
</script>
