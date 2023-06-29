<template>
  <div class="fancy-text-block-twelve mt-150 md-mt-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
          <div class="text-wrapper">
            <div class="title-style-three">
              <h6>Ticket System</h6>
              <h2>
                <span>How doe the ticketing<img src="../../assets/images/shape/line-shape-6.svg" alt=""></span>
                software work?
              </h2>
            </div>
            <p class="sub-text">A ticketing system is a tool, primarily for customer service. It helps customer
              representativ inquiries from one interface without any struggles.</p>
            <p class="sub-text">Once a customer agent receives a inquiry from any channel it will be transformed into a ticket.</p>
          </div> <!-- /.text-wrapper -->
        </div>

        <div class="col-lg-5 ms-auto" data-aos="fade-left" data-aos-duration="1200">
          <div class="img-gallery">
            <img src="../../assets/images/media/img_37.png" alt="">
            <img src="../../assets/images/shape/53.svg" alt="" class="shapes shape-one">
            <img src="../../assets/images/shape/52.svg" alt="" class="shapes shape-two">
          </div> <!-- /.img-gallery -->
        </div>
      </div>

      <div class="mt-70 md-mt-50">
        <div class="row justify-content-center">
       
          <div v-for="item in text_block_data" :key="item.id" class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
            <div class="block-style-eight">
              <h6 class="title">{{item.title}}</h6>
              <p>{{item.desc}}</p>
            </div> <!-- /.block-style-eight -->
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FancyTextBlockTwo',
  data () {
    return {
      text_block_data : [
        {
          id:1,
          title:'Single Sign on Reports',
          desc:'Keep your clients informed at all times with fully editable, professional Client Reports'
        },
        {
          id:2,
          title:'Shared Shopping Cart',
          desc:'Keep your clients informed at all times with fully editable, professional Client Reports',
          delay:'100'
        },
        {
          id:3,
          title:'Client',
          desc:'Keep your clients informed at all times with fully editable, professional Client Reports',
          delay:'200'
        },
      ]
    }
  }
}
</script>