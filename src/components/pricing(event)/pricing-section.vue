<template>
  <div class="pricing-section-three-inner-page mb-200 md-mb-120">
    <img src="../../assets/images/shape/124.svg" alt="" class="shapes shape-one">
    <img src="../../assets/images/shape/125.svg" alt="" class="shapes shape-two">
    <div class="container">
      <div class="title-style-five text-center mb-50 md-mb-30">
        <h6>Our Pricing</h6>
        <div class="row">
          <div class="col-lg-9 m-auto">
            <h2>Unbeatable prices, no contracts, simple & easy</h2>
          </div>
        </div>
      </div>

      <div class="pricing-table-area-three">
        <div class="row justify-content-center">

          <div v-for="item in pricing_data" :key="item.id" class="col-lg-4 col-md-6">
            <div :class="`pr-table-wrapper ${item.skew}`">
              <div :class="`pack-name ${item.class} font-slab`"><span>{{item.title}}</span></div>
              <div class="price font-slab">${{item.price}}</div>
              <p class="user-condition">per user/month</p>
              <img src="../../assets/images/shape/114.svg" alt="" class="line">
              <ul v-for="(list,index) in item.lists" :key="index" v-html="list.list"></ul>
              <a href="#" class="subscribe-btn font-rubik">Subscribe Now</a>
            </div> <!-- /.pr-table-wrapper -->
          </div>
    
        </div>
      </div> <!-- /.pricing-table-area-three -->
    </div> <!-- ./container -->
    <!-- CounterArea  start--> 
     <CounterArea :pricing_count="true"/>
     <!-- CounterArea  end--> 
  </div>
</template>

<script>
import CounterArea from '../customer-support/CounterArea.vue';

export default {
  name: 'PricingSection',
  components:{CounterArea},
  data () {
    return {
      pricing_data : [
        {
          id:1,
          title:'Free Event',
          price: 0,
          class:'pc1',
          skew:'skew-right',
          lists: [
            {list:'<li>60-day chat history</li>'},
            {list:'<li>Basic widget customization</li>'},
            {list:'<li class="disable">Ticketing system</li>'},
            {list:'<li class="disable">Data security</li>'},
          ]
        },
        {
          id:2,
          title:'Pre Day',
          price: 0.32,
          class:'pc2',
          skew:'skew-left',
          lists: [
            {list:'<li>60-day chat history</li>'},
            {list:'<li>Basic widget customization</li>'},
            {list:'<li>Ticketing system</li>'},
            {list:'<li class="disable">Data security</li>'},
          ]
        },
        {
          id:3,
          title:'Pay As You Go',
          price: 0.65,
          class:'pc3',
          skew:'skew-right',
          lists: [
            {list:'<li>60-day chat history</li>'},
            {list:'<li>Basic widget customization</li>'},
            {list:'<li>Ticketing system</li>'},
            {list:'<li>Data security</li>'},
          ]
        },
      ]
    }
  }
}
</script>