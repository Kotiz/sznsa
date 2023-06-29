<template>
  <div class="pricing-section-nine lg-container pt-150 md-pt-110" id="pricing">
    <div class="container">
      <div
        class="title-style-eleven text-center mb-40 md-mb-20"
        data-aos="fade-up"
      >
        <div class="upper-title">PRICING</div>
        <h2>Pick your plan or create</h2>
      </div>

      <div class="row justify-content-center">
        <div
          v-for="item in pricingData"
          :key="item.id"
          class="col-lg-4 col-sm-6"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
        >
          <div class="pr-table-wrapper mt-40">
            <div class="pack-name">{{ item.pack_name }}</div>
            <div class="pack-details">{{ item.info }}</div>
            <div class="top-banner d-md-flex align-items-center">
              <div class="price">${{ item.price + ".00" }}</div>
              <div>
                <span>Per monthly</span>
                <em>Biller yearly</em>
              </div>
            </div>
            <a href="#" class="trial-button tran3s">Start 30 days free trial</a>
            <ul class="pr-feature">
              <li
                v-for="list in item.list_items"
                :key="list.id"
                v-html="list.text"
              ></li>
            </ul>
            <div class="trial-text">No card required, cancel any time</div>
          </div>
          <!-- /.pr-table-wrapper -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingSection",
  data() {
    return {
      pricingData: [
        {
          id: 1,
          pack_name: "Reguler",
          price: 23.0,
          info: "Analyze performance and do more with your data",
          list_items: [
            { id: 1, text: "Unlimited Email" },
            { id: 2, text: "5gb Hosting " },
            { id: 3, text: "2 website 3 sub domain" },
            { id: 4, text: "Email &amp; Live chat" },
            { id: 5, text: "Backling" },
            { id: 6, text: "Discount Programe" },
          ],
        },
        {
          id: 2,
          pack_name: "Standard",
          price: 47.0,
          info: "Analyze performance and do more with your data",
          delay: "100",
          list_items: [
            { id: 1, text: "Unlimited Email" },
            { id: 2, text: "5gb Hosting " },
            { id: 3, text: "2 website 3 sub domain" },
            { id: 4, text: "Email &amp; Live chat" },
            { id: 5, text: "Backling" },
            { id: 6, text: "Discount Programe" },
          ],
        },
        {
          id: 3,
          pack_name: "Business",
          price: 89.0,
          info: "Analyze performance and do more with your data",
          delay: "200",
          list_items: [
            { id: 1, text: "Unlimited Email" },
            { id: 2, text: "5gb Hosting " },
            { id: 3, text: "2 website 3 sub domain" },
            { id: 4, text: "Email &amp; Live chat" },
            { id: 5, text: "Backling" },
            { id: 6, text: "Discount Programe" },
          ],
        },
      ],
    };
  },
};
</script>
