<template>
  <div class="pricing-section-seven pt-200 md-pt-130" id="pricing">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 col-lg-10 col-md-10 m-auto">
          <div class="title-style-eleven text-center mb-100 md-mb-70">
            <h2>No hidden charge, Choose your plan.</h2>
          </div>
        </div>
      </div>

      <div class="pricing-table-area-seven">
        <div class="row align-items-center justify-content-center">
          <div
            v-for="item in pricingData"
            :key="item.id"
            class="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div
              :class="`pr-table-wrapper md-mb-40 ${
                item.active ? 'active' : ''
              }`"
            >
              <img :src="item.icon" alt="" class="icon" />
              <div class="pack-name">{{ item.title }}</div>
              <ul class="pr-feature" v-html="item.list"></ul>
              <div class="price">${{ item.price }}/<span>Weekly</span></div>
              <div class="trial-text">
                up to {{ item.user }} user + 1.99 per user
              </div>
              <a href="#" class="trial-button">Sign up</a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.pricing-table-area-seven -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingArea",
  data() {
    return {
      pricingData: [
        {
          id: 1,
          title: "Starter Plan",
          icon: require(`@/assets/images/icon/140.svg`),
          price: 9.99,
          list: "<li>Unlimited Email</li>	<li>5gb Hosting & Domain</li> <li>Email & Live chat.</li>",
          user: 3,
        },
        {
          id: 2,
          title: "Silver Plan",
          icon: require(`@/assets/images/icon/141.svg`),
          price: 19.99,
          list: "<li>Unlimited Email</li>	<li>5gb Hosting & Domain</li> <li>Email & Live chat.</li> <li>Backling</li>",
          user: 5,
          active: true,
        },
        {
          id: 3,
          title: "Gold Plan",
          icon: require(`@/assets/images/icon/142.svg`),
          price: 29.99,
          list: "<li>Unlimited Email</li>	<li>5gb Hosting & Domain</li> <li>Email & Live chat.</li>",
          user: 7,
        },
      ],
    };
  },
};
</script>
