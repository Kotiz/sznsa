<template>
  <div class="fancy-short-banner-one">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-6">
							<div class="title-style-one">
								<h6 class="font-rubik" style="color:#787CFF">Start your free trial.</h6>
								<h2>New here? Start your free trial now.</h2>
							</div> <!-- /.title-style-one -->
						</div>
						<div class="col-lg-6">
							<div class="form-wrapper">
								<form @submit.prevent="onSubmit">
									<input type="text" placeholder="Email address">
									<button>Start trial</button>
								</form>
								<p class="font-rubik">Already a member? <router-link to="/login">Sign in.</router-link></p>
							</div> <!-- /.form-wrapper -->
						</div>
					</div>
				</div> <!-- /.container -->
				<div class="bubble-one"></div>
				<div class="bubble-two"></div>
				<div class="bubble-three"></div>
				<div class="bubble-four"></div>
				<div class="bubble-five"></div>
				<div class="bubble-six"></div>
			</div>
</template>

<script>
export default {
  name: "ShortBanner",
	methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
};
</script>