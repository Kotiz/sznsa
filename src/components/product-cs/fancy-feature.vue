<template>
  <div class="fancy-feature-seven">
    <div class="container">
      <div class="title-style-two text-center mb-150 md-mb-70">
        <p>Our Product</p>
        <h2>First-timer? Or old-hand? provide support with
          <span>deski is <img src="../../assets/images/shape/line-shape-8.svg" alt=""></span> simple.
        </h2>
      </div> <!-- /.title-style-two -->

      <div class="block-wrapper">

        <div v-for="item in feature_data" :key="item.id" class="block-style-nine">
          <div class="row align-items-center">
            <div :class="`col-lg-7 col-md-9 m-auto ${item.order_1 ? item.order_1 : ''}`" 
            :data-aos="item.fade_1" data-aos-duration="1200">
              <div class="illustration-holder">
                <img :src="item.img" alt="">
              </div> <!-- /.illustration-holder -->
            </div>
            <div :class="`col-lg-5 ${item.order_2 ? item.order_2 : ''}`" 
            :data-aos="item.fade_2" data-aos-duration="1200">
              <div class="text-wrapper">
                <h6>{{item.sm_title}}</h6>
                <h3 class="title font-gilroy-bold">{{item.title}}</h3>
                <p class="font-rubik">{{item.subtitle}}</p>
              </div> <!-- /.text-wrapper -->
            </div>
          </div>
        </div> <!-- /.block-style-nine -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FancyFeature',
  data () {
    return {
      feature_data : [
        {
          id:1,
          fade_1:'fade-right',
          fade_2:'fade-left',
          img:require(`@/assets/images/assets/ils_04.svg`),
          sm_title:'Create Event',
          title:'Provide your support now simple and easy.',
          subtitle:'Set-up a simple, professional box-office page on your site (or standalone) in minutes. Then design and customise it as much (or as little) as you like with our user-friendly dashboard',
        },
        {
          id:2,
          fade_1:'fade-left',
          fade_2:'fade-right',
          order_1:'order-lg-last',
          order_2:'order-lg-first',
          img:require(`@/assets/images/assets/ils_05.svg`),
          sm_title:'SELL TICKET',
          title:'Sell tickets anywhere anytime online.',
          subtitle:'Run your box office as it’s own website, embed it into your website with a simple piece of HTML or widget, or put it on your Facebook page*. All with a reliable, mobile-friendly design.',
        },
        {
          id:3,
          fade_1:'fade-right',
          fade_2:'fade-left',
          img:require(`@/assets/images/assets/ils_06.svg`),
          sm_title:'management',
          title:'Manage client easily by a simple click.',
          subtitle:'Set-up a simple, professional box-office page on your site (or standalone) in minutes. Then design & customise it as much (or as little) as you like with our user-friendly dashboard.',
        },
        {
          id:4,
          fade_1:'fade-left',
          fade_2:'fade-right',
          order_1:'order-lg-last',
          order_2:'order-lg-first',
          img:require(`@/assets/images/assets/ils_07.svg`),
          sm_title:'Dashboard',
          title:'All the data & info for your need.',
          subtitle:'You decide what data you want from your guests – and it’s your data. We don’t see or touch it. Understand how and who you’re selling to, with ticket sale notifications, and easy-to-understand sales summaries and customer order.',
        },
      ]
    }
  }
}
</script>