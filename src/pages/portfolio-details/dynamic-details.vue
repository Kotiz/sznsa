<template>
	<div class="main-page-wrapper overflow-hidden">
		<Header />
		<!-- portfolio details start -->
		<div class="portfolio-details-one mt-75 mb-150 md-mb-100">
			<div class="container">
				<div class="row">
					<div class="col-xl-11 m-auto">
						<div class="header text-center">
							<div class="tag">Redesign, Branding</div>
							<div class="title-style-ten">
								<h2>{{ portfolio.title }}</h2>
							</div>
							<ul class="d-flex justify-content-center social-icon mt-35">
								<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
							</ul>
						</div>
					</div>
				</div>

				<div class="main-content mt-75">
					<img :src="portfolio.img" alt="" class="mb-90 md-mb-50">
					<div class="row">
						<div class="col-xl-11 m-auto">
							<div class="row">
								<div class="col-md-4 order-md-last">
									<ul class="project-info clearfix ps-xl-5">
										<li>
											<strong>DATe</strong>
											<span>23 July, 2020</span>
										</li>
										<li>
											<strong>Client</strong>
											<span>Mariona Adisson, USA</span>
										</li>
										<li>
											<strong>Project Type</strong>
											<span>3D Design, Apartment</span>
										</li>
										<li>
											<strong>Duration</strong>
											<span>36 Days</span>
										</li>
									</ul>
								</div>
								<div class="col-md-8 order-md-first">
									<h4>Overviw</h4>
									<p>Commonly used in the graphic, prit quis due & publishing indust for previewing lightly visual
										mockups.</p>
									<h4>Task</h4>
									<p>Rebuild a unified visual system for the advertising agency, made of steel which can change the
										world in a while.</p>
									<a href="#" class="theme-btn-eight">Check Live Link</a>
								</div>
							</div>
							<div class="top-border mt-70 pt-50 md-mt-40">
								<ul class="portfolio-pagination d-flex justify-content-between">
									<li>
										<a href="#" class="d-flex align-items-center">
											<img src="../../assets/images/gallery/img_34.jpg" alt="" class="d-none d-lg-block">
											<span class="d-inline-block ps-lg-4">
												<span class="tp1 d-block">Previous</span>
												<span class="tp2 d-block">Product Branding</span>
											</span>
										</a>
									</li>
									<li>
										<a href="#" class="d-flex flex-row-reverse align-items-center text-end">
											<img src="../../assets/images/gallery/img_35.jpg" alt="" class="d-none d-lg-block">
											<span class="d-inline-block pe-lg-4">
												<span class="tp1 d-block">Next</span>
												<span class="tp2 d-block">Uber App Design</span>
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- portfolio details end -->
		<FooterSeven :dark_bg="true" :dark_btn="true" />
	</div>
</template>

<script>
import Header from '@/components/common/Headers/Header.vue';
import portfolioMixin from '@/mixin/portfolio-mixin';
import FooterSeven from '@/components/common/Footers/FooterSeven.vue';

export default {
	name: 'DynamicPortfolioDetails',
	mixins: [portfolioMixin],
	components: {
		Header,
		FooterSeven
	},
	data() {
		return {
			id: this.$route.params.id,
			portfolio: {}
		}
	},
	methods: {
		getPortfolio(portfolioId) {
			this.portfolio = this.portfolioItems.find(item => item.id == portfolioId);
		}
	},
	created() {
		this.getPortfolio(this.id);
	}
}
</script>