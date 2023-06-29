<template>
	<div :class="`useable-tools-section bg-color ${about_m ? 'mt-50 md-mt-10' : 'mt-140 mb-50 md-mt-80'}`">
		<div class="bubble-one"></div>
		<div class="bubble-two"></div>
		<div class="bubble-three"></div>
		<div class="bubble-four"></div>
		<div class="bubble-five"></div>
		<div class="container">
			<div :class="about_m ? 'text-center' : ''">
				<h6 class="font-rubik">Integrates with your tools</h6>
				<h2>Deski ties into your existing tools, services, & workflow. Get notifications or create a Story with others tools.</h2>
			</div>

			<div class="row justify-content-center">
				
				<div v-for="item in tools_data" :key="item.id" :class="item.col" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
					<div :class="`img-box ${item.box}`">
						<a href="#"><img :src="item.img" alt=""></a>
					</div> <!-- /.img-box -->
				</div>
		
			</div>
		</div> <!-- /.container -->
	</div>
</template>

<script>
export default {
	name: 'UseableTools',
	props:{
		about_m:Boolean,
	},
	data () {
		return {
			tools_data : [
				{
					id:1,
					col:'col-lg-3 col-md-4 col-6',
					box:"bx-a",
					img:require(`@/assets/images/logo/p-1.png`)
				},
				{
					id:2,
					col:'col-lg-2 col-md-4 col-6',
					box:"bx-b",
					img:require(`@/assets/images/logo/p-2.png`),
					delay:'50'
				},
				{
					id:3,
					col:'col-lg-3 col-md-4 col-6',
					box:"bx-c",
					img:require(`@/assets/images/logo/p-3.png`),
					delay:'150'
				},
				{
					id:4,
					col:'col-xl-2 col-lg-3 col-md-4 col-6',
					box:"bx-d",
					img:require(`@/assets/images/logo/p-4.png`),
					delay:'200'
				},
				{
					id:5,
					col:'col-xl-2 col-lg-3 col-md-4 col-6',
					box:"bx-e",
					img:require(`@/assets/images/logo/p-5.png`),
					delay:'250'
				},
				{
					id:6,
					col:'col-xl-4 col-lg-2 col-md-4 col-6',
					box:"bx-f",
					img:require(`@/assets/images/logo/p-6.png`),
					delay:'50'
				},
				{
					id:7,
					col:'col-xl-2 col-lg-3 col-md-4 col-6',
					box:"bx-g",
					img:require(`@/assets/images/logo/p-7.png`),
					delay:'100'
				},
				{
					id:8,
					col:'col-xl-3 col-lg-3 col-md-4 col-6',
					box:"bx-h",
					img:require(`@/assets/images/logo/p-8.png`),
					delay:'150'
				},
				{
					id:9,
					col:'col-xl-3 col-lg-11 col-md-4 col-6',
					box:"bx-i",
					img:require(`@/assets/images/logo/p-9.png`),
					delay:'200'
				},
			]
		}
	}
}
</script>