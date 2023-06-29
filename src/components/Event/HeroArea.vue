<template>
  <div class="hero-banner-four">
				<img src="../../assets/images/shape/100.svg" alt="" class="shapes shape-four">
				<img src="../../assets/images/shape/101.svg" alt="" class="shapes shape-five">
				<img src="../../assets/images/shape/102.svg" alt="" class="shapes shape-six">
				<img src="../../assets/images/shape/103.svg" alt="" class="shapes shape-seven">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 order-lg-last">
							<div class="illustration-holder">
								<img src="../../assets/images/assets/ils_14.svg" alt="" class="illustration">
								<img src="../../assets/images/assets/ils_14.1.svg" alt="" class="shapes shape-one">
								<img src="../../assets/images/assets/ils_14.2.svg" alt="" class="shapes shape-two">
								<img src="../../assets/images/assets/ils_14.3.svg" alt="" class="shapes shape-three">
							</div>
							<p class="review-text">Over <span>150,000+ client</span> all over the world.</p>
						</div>
						<div class="col-lg-6 order-lg-first">
							<div class="text-wrapper">
								<h1><span>Event ticket</span> organiser & seller.</h1>
								<p class="sub-text">For hassale free event, we are here to help you by creating online ticket.</p>
								<router-link to="/login" class="theme-btn-five">Let’s get started</router-link>
							</div> <!-- /.text-wrapper -->
						</div>
					</div>
				</div>

				<div class="fancy-feature-eight mt-160 md-mt-100">
					<div class="container">
						<div class="bg-wrapper">
							<div class="row justify-content-center">
								<div v-for="item in fancyFeatureData" :key="item.id" class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
									<div class="block-style-thirteen">
										<div class="icon"><img :src="item.img" alt=""></div>
										<div class="title font-rubik">{{item.title}}</div>
										<p>{{item.subtitle}}</p>
									</div> <!-- /.block-style-thirteen -->
								</div>
							</div>
						</div>
					</div>
				</div> <!-- /.fancy-feature-eight -->
			</div>
</template>

<script>
export default {
  name:'HeroArea',
  data () {
    return {
      fancyFeatureData:[
        {
          id:1,
          img:require(`@/assets/images/icon/60.svg`),
          title:'Smart popups',
          subtitle:'Create customized popups and show the message at the lorem',
        },
        {
          id:2,
          img:require(`@/assets/images/icon/61.svg`),
          title:'Embeded Forms',
          subtitle:'Collect website leads with embedded forms and integrate easily.',
          delay:100
        },
        {
          id:3,
          img:require(`@/assets/images/icon/62.svg`),
          title:'Autoresponder',
          subtitle:'Send welcome email to your new subscribers  with a code.',
          delay:200
        },
      ]
    }
  }
}
</script>