<template>
  <div class="pricing-section-two">
    <div class="fancy-hero-four">
      <div class="shapes shape-one"></div>
      <div class="shapes shape-two"></div>
      <div class="shapes shape-three"></div>
      <div class="shapes shape-four"></div>
      <div class="shapes shape-five"></div>
      <div class="shapes shape-six"></div>
      <div class="bg-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-xl-10 col-lg-11 m-auto">
              <h2>Choose package match your budget</h2>
            </div>
            <div class="col-12 m-auto">
              <p class="font-rubik sub-heading">5 minute installation · Try Team plan features for 14 days · No credit
                card required</p>
            </div>
          </div>

          <!-- Nav tabs -->
          <ul class="nav nav-tabs justify-content-center pricing-nav-two">
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#month">Monthly</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#year">Yearly</a>
            </li>
          </ul>
        </div>
      </div> <!-- /.bg-wrapper -->
    </div> <!-- /.fancy-hero-four -->

    <div class="container">
      <div class="pricing-table-area">
        <div class="clearfix">
          <div class="tab-content">

            <div v-for="(pricing, index) in pricing_data" :key="index"
              :class="`tab-pane ${pricing.active ? 'active' : 'fade'}`" :id="pricing.id">
              <div class="row g-0">

                <div v-for="item in pricing.pricing_items" :key="item.id" 
                class="col-lg-3 col-sm-6 pr-bg d-flex">
                  <div class="pr-table-wrapper">
                    <div class="pack-name">{{ item.pac_name }}</div>
                    <div class="price"><sup>$</sup>{{ item.price }}</div>
                    <div class="bill-cycle">{{ item.bill_cycle }}</div>
                    <a href="#" class="theme-btn-three">Sign Up</a>
                    <ul class="pr-feature">
                      <li v-for="(list_item, index) in item.list_items" :key="index">
                        {{ list_item.list }}
                      </li>
                    </ul>
                  </div> <!-- /.pr-table-wrapper -->
                </div>

              </div>
            </div>

          </div>

        </div>
        <img src="../../assets/images/shape/64.svg" alt="" class="shapes shape-one">
        <img src="../../assets/images/shape/65.svg" alt="" class="shapes shape-two">
      </div> <!-- /.pricing-table-area -->
    </div>
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
              pac_name: 'FREE',
              price: 0,
              bill_cycle: '3 Free Agents',
              list_items: [
                { list: 'Email Ticketing' },
                { list: 'Customer Management' },
                { list: 'Help Center' },
                { list: 'Private Knowledge Base' },
                { list: 'Predefined SLAs' },
                { list: 'Macros' },
              ]
            },
            {
              id: 2,
              pac_name: 'Standard',
              price: 29,
              bill_cycle: 'Per agent billed',
              list_items: [
                { list: 'Social & Community' },
                { list: 'Channels' },
                { list: 'Product-based Ticket' },
                { list: 'Management' },
                { list: 'Help Center Themes' },
                { list: 'Gallery' },
                { list: 'Public Knowledge Base' },
                { list: 'SLAs & Escalations' },
                { list: 'Workflow, Assignment' },
              ]
            },
            {
              id: 3,
              pac_name: 'Start up',
              price: 38,
              bill_cycle: 'Per agent billed',
              list_items: [
                { list: 'Multi-Department Ticketing' },
                { list: 'Team Management' },
                { list: 'Telephony' },
                { list: 'Automatic Time Tracking' },
                { list: 'Blueprint - Basic Process' },
                { list: 'Management' },
                { list: 'Round Robin Ticket' },
                { list: 'Assignment' },
                { list: 'Agent Collision' },
                { list: 'Tasks, Events & Call' },
                { list: 'Activities' },
                { list: 'Mobile SDKs' },
              ]
            },
            {
              id: 4,
              pac_name: 'Business',
              price: 56,
              bill_cycle: 'Per agent billed',
              list_items: [
                { list: 'Live Chat' },
                { list: 'Zia - Artificial Intelligence' },
                { list: 'Help Center' },
                { list: 'Customization' },
                { list: 'Multi-brand Help Center' },
                { list: 'Advanced Process' },
                { list: 'Management' },
                { list: 'Custom Functions' },
                { list: 'Multi-level IVR' },
                { list: 'Global Reports &' },
                { list: 'Dashboards' },
                { list: 'Scheduled Reports' },
                { list: 'Contract Management' },
                { list: 'Validation Rules' },
              ]
            },
          ]
        },

        {
          id: 'year',
          pricing_items: [
            {
              id: 1,
              pac_name: 'FREE',
              price: 0,
              bill_cycle: '3 Free Agents',
              list_items: [
                { list: 'Email Ticketing' },
                { list: 'Customer Management' },
                { list: 'Help Center' },
                { list: 'Private Knowledge Base' },
                { list: 'Predefined SLAs' },
                { list: 'Macros' },
              ]
            },
            {
              id: 2,
              pac_name: 'Standard',
              price: 129,
              bill_cycle: 'Per agent billed',
              list_items: [
                { list: 'Social & Community' },
                { list: 'Channels' },
                { list: 'Product-based Ticket' },
                { list: 'Management' },
                { list: 'Help Center Themes' },
                { list: 'Gallery' },
                { list: 'Public Knowledge Base' },
                { list: 'SLAs & Escalations' },
                { list: 'Workflow, Assignment' },
              ]
            },
            {
              id: 3,
              pac_name: 'Start up',
              price: 138,
              bill_cycle: 'Per agent billed',
              list_items: [
                { list: 'Multi-Department Ticketing' },
                { list: 'Team Management' },
                { list: 'Telephony' },
                { list: 'Automatic Time Tracking' },
                { list: 'Blueprint - Basic Process' },
                { list: 'Management' },
                { list: 'Round Robin Ticket' },
                { list: 'Assignment' },
                { list: 'Agent Collision' },
                { list: 'Tasks, Events & Call' },
                { list: 'Activities' },
                { list: 'Mobile SDKs' },
              ]
            },
            {
              id: 4,
              pac_name: 'Business',
              price: 156,
              bill_cycle: 'Per agent billed',
              list_items: [
                { list: 'Live Chat' },
                { list: 'Zia - Artificial Intelligence' },
                { list: 'Help Center' },
                { list: 'Customization' },
                { list: 'Multi-brand Help Center' },
                { list: 'Advanced Process' },
                { list: 'Management' },
                { list: 'Custom Functions' },
                { list: 'Multi-level IVR' },
                { list: 'Global Reports &' },
                { list: 'Dashboards' },
                { list: 'Scheduled Reports' },
                { list: 'Contract Management' },
                { list: 'Validation Rules' },
              ]
            },
          ]
        },
      ]
    }
  }
}
</script>


