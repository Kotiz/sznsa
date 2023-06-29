<template>
  <div class="pricing-section-four pt-200 md-pt-100" id="pricing">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 m-auto">
          <div class="title-style-six text-center">
            <h2>Solo, Agency or Team? We’ve got you <span>covered.</span></h2>
          </div>
          <!-- /.title-style-six -->
        </div>
      </div>

      <!-- Nav tabs -->
      <ul class="nav nav-tabs justify-content-center pricing-nav-three">
        <li class="nav-item">
          <button
            class="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#month"
          >
            Monthly
          </button>
        </li>
        <li class="nav-item">
          <button class="nav-link" data-bs-toggle="tab" data-bs-target="#year">
            Yearly
          </button>
        </li>
      </ul>
    </div>

    <div class="pricing-table-area-four">
      <div class="tab-content">
        <div class="tab-pane active" id="month">
          <div class="row justify-content-center">
            <div
              v-for="item in pricingMonthly"
              :key="item.id"
              class="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              :data-aos-delay="item.delay"
            >
              <div
                :class="`pr-table-wrapper ${
                  item.active ? 'active most-popular' : ''
                }`"
              >
                <div class="pack-name">{{ item.pack_name }}</div>
                <div class="pack-details">{{ item.pack_details }}</div>
                <div
                  class="top-banner d-md-flex"
                  :style="{ background: item.bg_color }"
                >
                  <div class="price"><sup>$</sup>{{ item.price }}</div>
                  <div>
                    <span>{{ item.info_span }}</span>
                    <em>{{ item.info_em }}</em>
                  </div>
                </div>
                <!-- /.top-banner -->
                <ul class="pr-feature">
                  <li v-for="feature in item.feature" :key="feature.id">
                    {{ feature.text }}
                  </li>
                </ul>
                <a href="#" class="trial-button">Start 30 days free trial</a>
                <div class="trial-text">No card required, cancel any time</div>
              </div>
              <!-- /.pr-table-wrapper -->
            </div>
          </div>
        </div>
        <div class="tab-pane" id="year">
          <div class="row justify-content-center">
            <div
              v-for="item in pricingYearly"
              :key="item.id"
              class="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              :data-aos-delay="item.delay"
            >
              <div
                :class="`pr-table-wrapper ${
                  item.active ? 'active most-popular' : ''
                }`"
              >
                <div class="pack-name">{{ item.pack_name }}</div>
                <div class="pack-details">{{ item.pack_details }}</div>
                <div
                  class="top-banner d-md-flex"
                  :style="{ background: item.bg_color }"
                >
                  <div class="price"><sup>$</sup>{{ item.price }}</div>
                  <div>
                    <span>{{ item.info_span }}</span>
                    <em>{{ item.info_em }}</em>
                  </div>
                </div>
                <!-- /.top-banner -->
                <ul class="pr-feature">
                  <li v-for="feature in item.feature" :key="feature.id">
                    {{ feature.text }}
                  </li>
                </ul>
                <a href="#" class="trial-button">Start 30 days free trial</a>
                <div class="trial-text">No card required, cancel any time</div>
              </div>
              <!-- /.pr-table-wrapper -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.pricing-table-area-four -->
  </div>
</template>

<script>
export default {
  name: "PricingArea",
  data() {
    return {
      pricingMonthly: [
        {
          id: 1,
          pack_name: "Single",
          pack_details: "For individuals and teams",
          bg_color: "#FFF7EB",
          price: "8",
          info_span: "For team, monthly",
          info_em: "with unlimited email",
          feature: [
            {
              id: 1,
              text: "Unlimited Email",
            },
            {
              id: 2,
              text: "5gb Hosting",
            },
            {
              id: 3,
              text: "2 website 3 sub domain",
            },
            {
              id: 4,
              text: "Email & Live chat",
            },
            {
              id: 5,
              text: "Backling",
            },
            {
              id: 6,
              text: "Discount Programe",
            },
          ],
        },
        {
          id: 2,
          pack_name: "Team",
          active: true,
          pack_details: "For individuals and teams",
          bg_color: "#E2F2FD",
          price: "12",
          info_span: "For team, monthly",
          info_em: "team with 8 users",
          delay: "100",
          feature: [
            {
              id: 1,
              text: "Unlimited Email",
            },
            {
              id: 2,
              text: "5gb Hosting",
            },
            {
              id: 3,
              text: "2 website 3 sub domain",
            },
            {
              id: 4,
              text: "Email & Live chat",
            },
            {
              id: 5,
              text: "Backling",
            },
            {
              id: 6,
              text: "Discount Programe",
            },
          ],
        },
        {
          id: 3,
          pack_name: "Business",
          pack_details: "For individuals and teams",
          bg_color: "#FFEBEB",
          price: "37",
          info_span: "All users, monthly",
          info_em: "for unlimited users",
          delay: "200",
          feature: [
            {
              id: 1,
              text: "Unlimited Email",
            },
            {
              id: 2,
              text: "5gb Hosting",
            },
            {
              id: 3,
              text: "2 website 3 sub domain",
            },
            {
              id: 4,
              text: "Email & Live chat",
            },
            {
              id: 5,
              text: "Backling",
            },
            {
              id: 6,
              text: "Discount Programe",
            },
          ],
        },
      ],
      pricingYearly: [
        {
          id: 1,
          pack_name: "Single",
          pack_details: "For individuals and teams",
          bg_color: "#FFF7EB",
          price: "90",
          info_span: "Per editor, yearly",
          info_em: "with unlimited email",
          feature: [
            {
              id: 1,
              text: "Unlimited Email",
            },
            {
              id: 2,
              text: "5gb Hosting",
            },
            {
              id: 3,
              text: "2 website 3 sub domain",
            },
            {
              id: 4,
              text: "Email & Live chat",
            },
            {
              id: 5,
              text: "Backling",
            },
            {
              id: 6,
              text: "Discount Programe",
            },
          ],
        },
        {
          id: 2,
          pack_name: "Team",
          active: true,
          pack_details: "For individuals and teams",
          bg_color: "#E2F2FD",
          price: "125",
          info_span: "For team, yearly",
          info_em: "team with 8 users",
          delay: "100",
          feature: [
            {
              id: 1,
              text: "Unlimited Email",
            },
            {
              id: 2,
              text: "5gb Hosting",
            },
            {
              id: 3,
              text: "2 website 3 sub domain",
            },
            {
              id: 4,
              text: "Email & Live chat",
            },
            {
              id: 5,
              text: "Backling",
            },
            {
              id: 6,
              text: "Discount Programe",
            },
          ],
        },
        {
          id: 3,
          pack_name: "Business",
          pack_details: "For individuals and teams",
          bg_color: "#FFEBEB",
          price: "370",
          info_span: "All users, yearly",
          info_em: "for unlimited users",
          delay: "200",
          feature: [
            {
              id: 1,
              text: "Unlimited Email",
            },
            {
              id: 2,
              text: "5gb Hosting",
            },
            {
              id: 3,
              text: "2 website 3 sub domain",
            },
            {
              id: 4,
              text: "Email & Live chat",
            },
            {
              id: 5,
              text: "Backling",
            },
            {
              id: 6,
              text: "Discount Programe",
            },
          ],
        },
      ],
    };
  },
};
</script>
