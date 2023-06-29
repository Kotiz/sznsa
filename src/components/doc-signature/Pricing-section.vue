<template>
  <div class="pricing-section-eight lg-container mt-150 md-mt-100" id="pricing">
				<div class="container">
					<div class="border-top pt-150 md-pt-100">
						<div class="title-style-twelve text-center pb-120 md-pb-60">
							<h2><span>Get your plan<img src="../../assets/images/shape/line-shape-13.svg" alt=""></span></h2>
							<p class="mt-40 md-mt-20">Get access to the largest library of legal forms and easily integrate deski into your apps</p>
						</div>
					</div>

					<div class="row g-0 position-relative">
						<div class="col-lg-3 pr-list-wrapper d-none d-lg-block position-absolute">
							<ul>
								<li>Send documents for eSigning</li>
								<li>Multiple User</li>
								<li>Refund</li>
								<li>Bulk invite to sign</li>
								<li>Live Chat</li>
								<li>Send invite via Link</li>
							</ul>
						</div>

						<div class="col-lg-9 pr-table-wrapper ms-auto">
							<div class="row g-0">

								<div v-for="item in pricingData" :key="item.id" class="col-md-4 pr-column">
									<div class="pr-header">
										<div class="plan">{{item.title}}</div>
										<div class="price">${{item.price}}</div>
										<div class="info">{{item.info}}</div>
									</div> <!-- /.pr-header -->
									<div class="pr-body">
										<ul>
											<li v-for="list in item.body_info" :key="list.id">
												<span class="pr-text d-lg-none">{{list.text}}</span>
												<img :src="list.icon" alt="" class="m-auto">
											</li>
										</ul>
									</div>
									<div class="pr-footer">
										<a href="#" class="trial-button">Sign up</a>
										<div class="trial-text">Get your 30 day free trial</div>
									</div>
								</div> <!-- /.pr-column -->
					
							</div>
						</div>
					</div>
				</div>
			</div>
</template>

<script>
export default {
  name:'PricingSection',
  data () {
    return {
      pricingData : [
        {
          id:1,
          title:'Silver Plan',
          price:97,
          info:'Great for Individial Person',
          body_info : [
            {id:1,text:'Send documents for eSigning',icon:require(`@/assets/images/icon/154.svg`)},
            {id:2,text:'Multiple User',icon:require(`@/assets/images/icon/154.svg`)},
            {id:3,text:'Refund',icon:require(`@/assets/images/icon/154.svg`)},
            {id:4,text:'Bulk invite to sign',icon:require(`@/assets/images/icon/155.svg`)},
            {id:5,text:'Live Chat',icon:require(`@/assets/images/icon/155.svg`)},
            {id:6,text:'Send invite via Link',icon:require(`@/assets/images/icon/155.svg`)},
          ]
        },
        {
          id:2,
          title:'Gold Plan',
          price:199,
          info:'Great for Startup',
          body_info : [
            {id:1,text:'Send documents for eSigning',icon:require(`@/assets/images/icon/154.svg`)},
            {id:2,text:'Multiple User',icon:require(`@/assets/images/icon/154.svg`)},
            {id:3,text:'Refund',icon:require(`@/assets/images/icon/155.svg`)},
            {id:4,text:'Bulk invite to sign',icon:require(`@/assets/images/icon/155.svg`)},
            {id:5,text:'Live Chat',icon:require(`@/assets/images/icon/155.svg`)},
            {id:6,text:'Send invite via Link',icon:require(`@/assets/images/icon/155.svg`)},
          ]
        },
        {
          id:3,
          title:'Business Plan',
          price:239,
          info:'Great for Large Business',
          body_info : [
            {id:1,text:'Send documents for eSigning',icon:require(`@/assets/images/icon/155.svg`)},
            {id:2,text:'Multiple User',icon:require(`@/assets/images/icon/155.svg`)},
            {id:3,text:'Refund',icon:require(`@/assets/images/icon/155.svg`)},
            {id:4,text:'Bulk invite to sign',icon:require(`@/assets/images/icon/155.svg`)},
            {id:5,text:'Live Chat',icon:require(`@/assets/images/icon/155.svg`)},
            {id:6,text:'Send invite via Link',icon:require(`@/assets/images/icon/155.svg`)},
          ]
        },
      ]
    }
  }
}
</script>