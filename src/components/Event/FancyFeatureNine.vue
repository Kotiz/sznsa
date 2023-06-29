<template>
  <div class="fancy-feature-nine">
				<img src="../../assets/images/shape/107.svg" alt="" class="shapes shape-one">
				<img src="../../assets/images/shape/108.svg" alt="" class="shapes shape-two">
				<img src="../../assets/images/shape/109.svg" alt="" class="shapes shape-three">
				<img src="../../assets/images/shape/110.svg" alt="" class="shapes shape-four">
				<img src="../../assets/images/shape/111.svg" alt="" class="shapes shape-five">
				<img src="../../assets/images/shape/112.svg" alt="" class="shapes shape-six">
				<div class="container">
					<div class="title-style-five text-center mb-60 md-mb-30">
						<h6>GET STARTED IN MINUTES</h6>
						<h2><span>3 simple & easy step to launch.</span></h2>
					</div>

					<div class="row justify-content-center">
						<div v-for="item in fancyFeatureData" :key="item.id" class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
							<div class="block-style-fourteen">
								<div class="illustration"><img :src="item.img" alt=""></div>
								<div class="title">{{item.title}}</div>
								<p class="font-rubik">{{item.subtitle}}</p>
							</div> <!-- /.block-style-fourteen -->
						</div>
					</div> <!-- /.row -->
				</div>
			</div>
</template>

<script>
export default {
  name:'FancyFeatureNine',
  data () {
    return {
      fancyFeatureData:[
        {
          id:1,
          img:require(`@/assets/images/assets/ils_15.svg`),
          title:'Join Our Platform',
          subtitle:'It only takes 5 minutes. Set up is smooth and simple fully lorem qui.',
        },
        {
          id:2,
          img:require(`@/assets/images/assets/ils_16.svg`),
          title:'Manage you event',
          subtitle:'Choose a price package to suit you or pay per ticket. Sell on your website,',
          delay:100
        },
        {
          id:3,
          img:require(`@/assets/images/assets/ils_17.svg`),
          title:'Start selling ticket',
          subtitle:'Get payments, detailed data on tickets sales & message guests lorem',
          delay:200
        },
      ]
    }
  }
}
</script>