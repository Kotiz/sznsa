<template>
  <div class="pricing-section-six pt-200 md-pt-100" id="pricing">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 m-auto">
          <div class="title-style-seven text-center">
            <h2>Solo, Agency or Team? We’ve got you <span>covered.</span></h2>
          </div>
          <!-- /.title-style-six -->
        </div>
      </div>

      <!-- Nav tabs -->
      <ul class="nav nav-tabs justify-content-center pricing-nav-four">
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

    <div class="pricing-table-area-six">
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
              <div :class="`pr-table-wrapper ${item.active ? 'active' : ''}`">
                <div class="pack-name" :style="{ background: item.bg_color }">
                  {{ item.pack_name }}
                </div>
                <div class="price">${{ item.price }}</div>
                <div class="pack-details">{{ item.pack_details }}</div>
                <ul class="pr-feature">
                  <li v-for="feature in item.feature" :key="feature.id">
                    {{ feature.text }}
                  </li>
                </ul>
                <a href="#" class="trial-button">Try it Free</a>
                <div class="trial-text">No card required, cancel any time</div>
              </div>
              <!-- /.pr-table-wrapper -->
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="year">
          <div class="row justify-content-center">
            <div
              v-for="item in pricingYearly"
              :key="item.id"
              class="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              :data-aos-delay="item.delay"
            >
              <div :class="`pr-table-wrapper ${item.active ? 'active' : ''}`">
                <div class="pack-name" :style="{ background: item.bg_color }">
                  {{ item.pack_name }}
                </div>
                <div class="price">${{ item.price }}</div>
                <div class="pack-details">{{ item.pack_details }}</div>
                <ul class="pr-feature">
                  <li v-for="feature in item.feature" :key="feature.id">
                    {{ feature.text }}
                  </li>
                </ul>
                <a href="#" class="trial-button">Try it Free</a>
                <div class="trial-text">No card required, cancel any time</div>
              </div>
              <!-- /.pr-table-wrapper -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.pricing-table-area-six -->
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
          pack_name: "Basic",
          pack_details: "TAKE GREAT NOTES",
          bg_color: "#E3F8EF",
          price: "Free",
          feature: [
            {
              id: 1,
              text: "Sync up to 2 devices",
            },
            {
              id: 2,
              text: "Find notes fast with search",
            },
            {
              id: 3,
              text: "and tags",
            },
            {
              id: 4,
              text: "Clip web pages",
            },
            {
              id: 5,
              text: "25MB maximum note",
            },
            {
              id: 6,
              text: "60MB monthly upload limit",
            },
          ],
        },
        {
          id: 2,
          pack_name: "Reguler",
          active: true,
          pack_details: "BE MORE PRODUCTIVE",
          bg_color: "#E3F8EF",
          price: "8.99",
          delay: "100",
          feature: [
            {
              id: 1,
              text: "Sync up to 2 devices",
            },
            {
              id: 2,
              text: "Find notes fast with search",
            },
            {
              id: 3,
              text: "and tags",
            },
            {
              id: 4,
              text: "Apply rich formatting",
            },
            {
              id: 5,
              text: "Clip web pages",
            },
            {
              id: 6,
              text: "25MB maximum note size",
            },
            {
              id: 7,
              text: "Access notes offline",
            },
            {
              id: 8,
              text: "10GBmonthly upload limit",
            },
            {
              id: 9,
              text: "Annotate PDFs",
            },
          ],
        },
        {
          id: 3,
          pack_name: "Business",
          pack_details: "Get more with team",
          bg_color: "#FBF3E5",
          price: "17.99",
          delay: "200",
          feature: [
            {
              id: 1,
              text: "Everthing is premium",
            },
            {
              id: 2,
              text: "Find notes fast with search",
            },
            {
              id: 3,
              text: "and tags",
            },
            {
              id: 4,
              text: "Apply rich formatting",
            },
            {
              id: 5,
              text: "Clip web pages",
            },
            {
              id: 6,
              text: "25MB maximum note",
            },
            {
              id: 7,
              text: "Access notes offline",
            },
            {
              id: 8,
              text: "18GB monthly upload limit",
            },
          ],
        },
      ],
      pricingYearly: [
        {
          id: 1,
          pack_name: "Basic",
          pack_details: "TAKE GREAT NOTES",
          bg_color: "#E3F8EF",
          price: "Free",
          feature: [
            {
              id: 1,
              text: "Sync up to 2 devices",
            },
            {
              id: 2,
              text: "Find notes fast with search",
            },
            {
              id: 3,
              text: "and tags",
            },
            {
              id: 4,
              text: "Clip web pages",
            },
            {
              id: 5,
              text: "25MB maximum note",
            },
            {
              id: 6,
              text: "60MB monthly upload limit",
            },
          ],
        },
        {
          id: 2,
          pack_name: "Reguler",
          active: true,
          pack_details: "BE MORE PRODUCTIVE",
          bg_color: "#E3F8EF",
          price: "68.99",
          delay: "100",
          feature: [
            {
              id: 1,
              text: "Sync up to 2 devices",
            },
            {
              id: 2,
              text: "Find notes fast with search",
            },
            {
              id: 3,
              text: "and tags",
            },
            {
              id: 4,
              text: "Apply rich formatting",
            },
            {
              id: 5,
              text: "Clip web pages",
            },
            {
              id: 6,
              text: "25MB maximum note size",
            },
            {
              id: 7,
              text: "Access notes offline",
            },
            {
              id: 8,
              text: "10GBmonthly upload limit",
            },
            {
              id: 9,
              text: "Annotate PDFs",
            },
          ],
        },
        {
          id: 3,
          pack_name: "Business",
          pack_details: "Get more with team",
          bg_color: "#FBF3E5",
          price: "189.99",
          delay: "200",
          feature: [
            {
              id: 1,
              text: "Everthing is premium",
            },
            {
              id: 2,
              text: "Find notes fast with search",
            },
            {
              id: 3,
              text: "and tags",
            },
            {
              id: 4,
              text: "Apply rich formatting",
            },
            {
              id: 5,
              text: "Clip web pages",
            },
            {
              id: 6,
              text: "25MB maximum note",
            },
            {
              id: 7,
              text: "Access notes offline",
            },
            {
              id: 8,
              text: "18GB monthly upload limit",
            },
          ],
        },
      ],
    };
  },
};
</script>
