<template>
  <div class="pricing-section-three mt-250 mb-200 md-mt-150 md-mb-150">
				<img src="../../assets/images/shape/107.svg" alt="" class="shapes shape-one">
				<img src="../../assets/images/shape/108.svg" alt="" class="shapes shape-two">
				<img src="../../assets/images/shape/109.svg" alt="" class="shapes shape-three">
				<img src="../../assets/images/shape/110.svg" alt="" class="shapes shape-four">
				<img src="../../assets/images/shape/111.svg" alt="" class="shapes shape-five">
				<img src="../../assets/images/shape/112.svg" alt="" class="shapes shape-six">
				<div class="container">
					<div class="title-style-five text-center mb-50 md-mb-40">
						<h6>Our Pricing</h6>
						<div class="row">
							<div class="col-lg-9 m-auto">
								<h2>Unbeatable prices, no contracts, simple & easy</h2>
							</div>
						</div>
					</div>

					<div class="pricing-table-area-three">
						<div class="row justify-content-center">
							<div v-for="item in pricingData" :key="item.id" class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
								<div class="pr-table-wrapper skew-right">
									<div class="pack-name pc1 font-slab"><span>{{item.title}}</span></div>
									<div class="price font-slab">${{item.price}}</div>
									<p class="user-condition">per user/month</p>
									<img src="../../assets/images/shape/114.svg" alt="" class="line">
									<ul v-html="item.list"></ul>
									<a href="#" class="subscribe-btn font-rubik">Subscribe Now</a>
								</div> <!-- /.pr-table-wrapper -->
							</div>
						</div>
					</div> <!-- /.pricing-table-area-three -->
				</div> <!-- ./container -->
			</div>
</template>

<script>
export default {
  name:'PricingArea',
  data () {
    return {
      pricingData : [
        {
          id:1,
          title:'Free Event',
          price:0,
          list:'<li>60-day chat history</li>	<li>Basic widget customization</li><li class="disable">Ticketing system</li><li class="disable">Data security</li>',
        },
        {
          id:2,
          title:'Pre Day',
          price:0.32,
          list:'<li>60-day chat history</li>	<li>Basic widget customization</li><li>Ticketing system</li><li class="disable">Data security</li>',
          delay:100
        },
        {
          id:3,
          title:'Pay As You Go',
          price:0.65,
          list:'<li>60-day chat history</li>	<li>Basic widget customization</li> <li>Ticketing system</li><li >Data security</li>',
          delay:200
        },
      ]
    }
  }
}
</script>