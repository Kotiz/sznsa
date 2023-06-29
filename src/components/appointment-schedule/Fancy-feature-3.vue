<template>
  <div class="fancy-feature-twentyFour pt-90 md-pt-60" id="service">
				<div class="container">
					<div class="title-style-nine text-center">
						<h6>Indutries Include</h6>
						<h2>Deski has the ability to serve Any <span>Business Segment <img src="../../assets/images/shape/194.svg" alt=""></span></h2>
					</div>
				</div>
				<div class="bg-wrapper mt-100 md-mt-80">
					<a href="#feedback" class="click-scroll-button scroll-target d-flex justify-content-center"><img src="../../assets/images/shape/200.svg" alt=""></a>
					<div class="container">
						<div class="row">
							
							<div v-for="item in featureData" :key="item.id" class="col-lg-6 d-flex mb-35" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
								<div class="block-style-twentyFour">
									<div class="d-flex align-items-start">
										<div class="icon d-flex align-items-center justify-content-center" 
                    :style="{background:item.color}"><img :src="item.icon" alt=""></div>
										<div class="text">
											<h4>{{item.title}}</h4>
											<p>{{item.subtitle}}</p>
										</div>
									</div>
								</div> <!-- /.block-style-twentyFour -->
							</div>

						</div>
					</div>
					<img src="../../assets/images/shape/195.svg" alt="" class="shapes shape-one">
					<img src="../../assets/images/shape/196.svg" alt="" class="shapes shape-two">
					<img src="../../assets/images/shape/197.svg" alt="" class="shapes shape-three">
					<img src="../../assets/images/shape/198.svg" alt="" class="shapes shape-four">
					<img src="../../assets/images/shape/199.svg" alt="" class="shapes shape-five">
				</div> <!-- /.bg-wrapper -->
			</div>
</template>

<script>
export default {
  name:'FancyFeatureThree',
  data () {
    return {
      featureData : [
        {
          id:1,
          color:'#3FE193',
          icon:require(`@/assets/images/icon/124.svg`),
          title:'Sports & Fitness',
          subtitle:'Personal trainers, Gyms Fitness classes, Yoga classes Golf classes, Sport items renting'
        },
        {
          id:2,
          color:'#FF4F86',
          icon:require(`@/assets/images/icon/125.svg`),
          title:'Beauty and Wellness',
          subtitle:'Eyelash extensions , Hair salons, Spa salons Beauty salons, Nail salons',
          delay:'100'
        },
        {
          id:3,
          color:'#FFCF39',
          icon:require(`@/assets/images/icon/126.svg`),
          title:'Events & entertainment',
          subtitle:'Art classes, Escape rooms Photographers, Equipment Rental & more.',
        },
        {
          id:4,
          color:'#6D64FF',
          icon:require(`@/assets/images/icon/127.svg`),
          title:'Officials & Financial',
          subtitle:'Embassies and consulates, City councils, Call centers Financial services, Interview scheduling.',
          delay:'100'
        },
        {
          id:5,
          color:'#E752FF',
          icon:require(`@/assets/images/icon/128.svg`),
          title:'Personal meetings',
          subtitle:'Counselling ,Coaching, Business, Advisory, Spiritual services & more.',
        },
        {
          id:6,
          color:'#29EEFB',
          icon:require(`@/assets/images/icon/129.svg`),
          title:'Driving Lessons',
          subtitle:'Driving Schools, Driving Instructors.',
          delay:'100'
        },
        {
          id:7,
          color:'#32B5FF',
          icon:require(`@/assets/images/icon/130.svg`),
          title:'Education System',
          subtitle:'Universities, Colleges, Schools, Libraries, Parent meetings, Tutoring lessons.',
        },
        {
          id:8,
          color:'#FFA361',
          icon:require(`@/assets/images/icon/131.svg`),
          title:'Medical services',
          subtitle:'Massage & Body Treatments, Dental Clinics, Medical Clinics & more.',
          delay:'100'
        },
      ]
    }
  }
}
</script>