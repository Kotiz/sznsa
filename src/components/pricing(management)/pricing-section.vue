<template>
  <div class="pricing-section-one mb-150 md-mb-80">
    <div class="fancy-hero-one">
      <div class="container">
        <div class="row">
          <div class="col-xl-10 col-lg-11 m-auto">
            <h2 class="font-rubik">Choose package match your budget</h2>
          </div>
          <div class="col-12 m-auto">
            <p class="font-rubik">5 minute installation · Try Team plan features for 14 days · No credit card required
            </p>
          </div>
        </div>

        <!-- Nav tabs -->
        <ul class="nav nav-tabs justify-content-center pricing-nav-one">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#month">Monthly</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#year">Yearly</a>
          </li>
        </ul>
        <div class="offer-text font-rubik">Save 30% on annual plan</div>
      </div>
      <div class="bubble-one"></div>
      <div class="bubble-two"></div>
      <div class="bubble-three"></div>
      <div class="bubble-four"></div>
      <div class="bubble-five"></div>
      <div class="bubble-six"></div>
    </div> <!-- /.fancy-hero-one -->

    <div class="pricing-table-area">
      <img src="../../assets/images/shape/62.svg" alt="" class="shapes shape-one">
      <img src="../../assets/images/shape/63.svg" alt="" class="shapes shape-two">
      <div class="container">
        <div class="tab-content">
          <div v-for="(pricing, index) in pricing_data" :key="index" 
          :class="`tab-pane ${pricing.active ? 'active' : 'fade'}`" :id="pricing.id">
            <div class="row justify-content-center">
              <div v-for="item in pricing.pricing_items" :key="item.id" class="col-lg-4 col-md-6">
                <div class="pr-table-wrapper">
                  <div class="pack-name">{{ item.pac_name }}</div>
                  <div class="price font-rubik">${{ item.price}}.<sup>99</sup></div>
                  <div class="pack-rec font-rubik">Small office / Home office</div>
                  <img :src="item.icon" alt="" class="icon">
                  <div class="bill-cycle">{{item.bill_cycle}}</div>
                  <ul class="pr-feature">
                     <li v-for="(list_item, index) in item.list_items" :key="index">
                        {{ list_item.list }}
                      </li>
                  </ul>
                  <a href="#" class="theme-btn-four">Choose Plan</a>
                  <div class="trial-text font-rubik">Get your 30 day free trial</div>
                </div> <!-- /.pr-table-wrapper -->
              </div>

            </div>
          </div>
    
        </div>
      </div>
    </div> <!-- /.pricing-table-area -->
  </div>
</template>

<script>
export default {
  name: 'PricingSection',
    data() {
    return {
      pricing_data: [
        {
          id: 'month',
          active: true,
          pricing_items: [
            {
              id: 1,
              pac_name: 'Starter',
              icon:require(`@/assets/images/icon/38.svg`),
              price: 8,
              bill_cycle: 'Billed per agent',
              list_items: [
                { list: '60-day chat history' },
                { list: 'Basic widget customization' },
                { list: 'Ticketing system' },
                { list: 'Data security' },
              ]
            },
            {
              id: 2,
              pac_name: 'Team',
              icon:require(`@/assets/images/icon/40.svg`),
              price: 19,
              bill_cycle: 'Billed per agent',
               list_items: [
                { list: '60-day chat history' },
                { list: 'Basic widget customization' },
                { list: 'Ticketing system' },
                { list: 'Data security' },
              ]
            },
            {
              id: 3,
              pac_name: 'Business',
              icon:require(`@/assets/images/icon/41.svg`),
              price: 35,
              bill_cycle: 'Billed per agent',
                list_items: [
                { list: '60-day chat history' },
                { list: 'Basic widget customization' },
                { list: 'Ticketing system' },
                { list: 'Data security' },
              ]
            },
          ]
        },

        {
          id: 'year',
          pricing_items: [
            {
              id: 1,
              pac_name: 'Starter',
              icon:require(`@/assets/images/icon/38.svg`),
              price: 18,
              bill_cycle: 'Billed per agent',
               list_items: [
                { list: '60-day chat history' },
                { list: 'Basic widget customization' },
                { list: 'Ticketing system' },
                { list: 'Data security' },
              ]
            },
            {
              id: 2,
              pac_name: 'Team',
              icon:require(`@/assets/images/icon/40.svg`),
              price: 129,
              bill_cycle: 'Billed per agent',
                list_items: [
                { list: '60-day chat history' },
                { list: 'Basic widget customization' },
                { list: 'Ticketing system' },
                { list: 'Data security' },
              ]
            },
            {
              id: 3,
              pac_name: 'Business',
              icon:require(`@/assets/images/icon/41.svg`),
              price: 29,
              bill_cycle: 'Billed per agent',
               list_items: [
                { list: '60-day chat history' },
                { list: 'Basic widget customization' },
                { list: 'Ticketing system' },
                { list: 'Data security' },
              ]
            },
          ]
        },
      ]
    }
  }
}
</script>