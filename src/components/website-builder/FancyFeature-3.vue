<template>
  <div class="fancy-feature-thirty mt-180 md-mt-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 col-lg-9 m-auto">
          <div class="title-style-thirteen text-center mb-80 md-mb-60">
            <div class="upper-title">Others Features</div>
            <h2> Deski for every
              <span>business <img src="../../assets/images/shape/line-shape-14.svg" alt=""></span>
              You need.
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="row">
     
          <div v-for="item in featureData" :key="item.id" class="col-md-6" data-aos="fade-up" :data-aos-delay="item.delay">
            <div class="block-style-thirtyTwo d-flex">
              <div class="icon d-flex align-items-center justify-content-center" 
              :style="{background:item.bg_color}">
              <img :src="item.icon" alt=""></div>
              <div class="text">
                <h4>{{item.title}}</h4>
                <p>{{item.subtitle}} </p>
                <a href="#" class="theme-btn-ten">Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
              </div>
            </div> <!-- /.block-style-thirtyTwo -->
          </div>

        </div>
      </div>
      <img src="../../assets/images/shape/237.svg" alt="" class="shapes shape-one">
      <img src="../../assets/images/shape/238.svg" alt="" class="shapes shape-two">
    </div> <!-- /.wrapper -->
  </div>
</template>

<script>
export default {
  name: 'FancyFeatureThree',
  data () {
    return {
      featureData : [
        {id:1,bg_color:'#F7EDFF',icon:require(`@/assets/images/icon/166.svg`),title:'Chat & Messaging',subtitle:'Chat section is as significant as other sections on your website and it works best for your customers.'},
        {id:2,bg_color:'#D8FFF1',icon:require(`@/assets/images/icon/167.svg`),title:'eCommerce',subtitle:'Build an online store that rank higher & sell more and integrates easily ooCommerce, to enhance the quality',delay:'100'},
        {id:3,bg_color:'#E6FBFF',icon:require(`@/assets/images/icon/168.svg`),title:'Payment Gatway',subtitle:'It saves the client cards on file securely for an effortless checkout experience using our advanced, secure payments system.'},
        {id:4,bg_color:'#FFEBDB',icon:require(`@/assets/images/icon/169.svg`),title:'Appointments',subtitle:'Our Scheduling Platform is Simple yet Powerful that you need to grow and manage your business in single user interface.',delay:'100'},
      ]
    }
  }
}
</script>