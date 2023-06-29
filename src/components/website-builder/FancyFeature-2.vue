<template>
  <div class="fancy-feature-twentyNine lg-container mt-150 pt-20 md-mt-70" id="p-tour">
    <div class="container">
      <div class="block-style-thirty bottom-border pb-80 mb-170 md-pb-40 md-mb-90">
        <div class="row">
          <div class="col-xl-5 col-lg-6">
            <div class="text-block md-pb-60">
              <div class="feature">DRAG & DROP</div>
              <div class="title-style-nine mb-60 md-mb-40">
                <h2>Control all elements super easy.</h2>
              </div>
              <ul class="feature-list-one">
                <li v-for="list in feature_list_one" :key="list.id">
                  <img :src="list.icon" alt="" class="icon">
                  <strong>{{list.title}}</strong>
                  <span>{{list.subtitle}}</span>
                </li>
                <li><a href="#" class="theme-btn-thirteen mt-20">Learn More</a></li>
              </ul>
            </div> <!-- /.text-block -->
          </div>
          <div class="col-xl-7 col-lg-6">
            <img src="../../assets/images/assets/screen_35.png" alt="">
          </div>
        </div>
      </div> <!-- /.block-style-thirty -->


      <div class="block-style-thirty">
        <div class="row">
          <div class="col-xl-5 col-lg-6 order-lg-last">
            <div class="text-block md-pb-60">
              <div class="feature">EMAIL & SMS BROADCAST</div>
              <div class="title-style-nine mb-45 md-mb-30">
                <h2>We have email, sms Broadcast for you.</h2>
              </div>
              <p>Broadcast and email is best use for something announcing significant changes .</p>
              <ul class="feature-list-two">
                <li>
                  Makes them <span>purchase</span> your product, service and quis interact website due.
                </li>
                <li>
                  Holds and catches their <span>attention</span> lorem.
                </li>
                <li>
                  Diverts them to your brand.
                </li>
              </ul>
              <a href="#" class="theme-btn-thirteen mt-30">Learn More</a>
            </div> <!-- /.text-block -->
          </div>
          <div class="col-xl-7 col-lg-6 order-lg-first">
            <img src="../../assets/images/assets/screen_36.png" alt="">
          </div>
        </div>
      </div> <!-- /.block-style-thirty -->

      <div class="mt-80 pb-100 md-pb-80 bottom-border">
        <div class="row justify-content-between">
    
          <div v-for="item in block_styles" :key="item.id" class="col-xl-3 col-md-4" data-aos="fade-up" :data-aos-delay="item.delay">
            <div class="block-style-twentyEight text-center mt-40">
              <div class="icon d-flex justify-content-center align-items-end">
                <img :src="item.icon" alt="">
              </div>
              <h4>{{item.title}}</h4>
              <p>{{item.subtitle}}</p>
            </div> <!-- /.block-style-twentyEight -->
          </div>
    
        </div>
      </div>

      <div class="block-style-thirty mt-150 md-mt-90">
        <div class="row">
          <div class="col-xl-5 col-lg-6">
            <div class="text-block md-pb-60">
              <div class="feature">PRE-made template</div>
              <div class="title-style-nine mb-45">
                <h2>Pre-Made Stunning Templates.</h2>
              </div>
              <p class="pb-30">Feel free to choose from our huge selection of templates, customize easily, and create a
                stunning website for your customers</p>
              <a href="#" class="theme-btn-thirteen">See all Template</a>
            </div> <!-- /.text-block -->
          </div>
          <div class="col-xl-7 col-lg-6">
            <img src="../../assets/images/assets/screen_37.png" alt="">
          </div>
        </div>
      </div> <!-- /.block-style-thirty -->

      <div class="mt-30">
        <div class="row justify-content-between">
 
          <div v-for="item in block_styles_two" :key="item.id" class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="block-style-thirtyOne mt-40">
              <div class="icon d-flex align-items-end">
                <img :src="item.icon" alt="">
              </div>
              <h4>{{item.title}}</h4>
              <p>{{item.subtitle}}</p>
            </div> <!-- /.block-style-thirtyOne -->
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FancyFeature',
  data () {
    return {
      feature_list_one : [
        {id:1,icon:require(`@/assets/images/icon/157.svg`),title:'Drag Image & SVG',subtitle:'Create beautiful sites at breakneck speed without compromising on your creativit'},
        {id:2,icon:require(`@/assets/images/icon/158.svg`),title:'Create Custom Field',subtitle:'Keep your brand front & center with your customer'},
        {id:3,icon:require(`@/assets/images/icon/159.svg`),title:'Custom Attribute',subtitle:'Increase your client retention rate by showing your results and value.'},
      ],
      block_styles : [
        {id:1,icon:require(`@/assets/images/icon/160.svg`),title:'Email & Sms Campaign',subtitle:'Check how the message that you send will appear on the device of your receipt in real-time'},
        {id:2,icon:require(`@/assets/images/icon/161.svg`),title:'Simple to use',subtitle:'Keep a track on real-time performance while analyzing the success of your mail campaigns.',delay:'100'},
        {id:3,icon:require(`@/assets/images/icon/162.svg`),title:'Increase Leads',subtitle:'Modify and add GIFs, images, buttons, links, and the custom user elements in your messages.',delay:'200'},
      ],
      block_styles_two : [
        {id:1,icon:require(`@/assets/images/icon/163.svg`),title:'Easy Customize',subtitle:'Keep a track on real-time performance while analyzing the success of your mail campaigns.'},
        {id:2,icon:require(`@/assets/images/icon/164.svg`),title:'100+ Template',subtitle:'Keep a track on real-time performance while analyzing the success of your mail campaigns.',delay:'100'},
        {id:3,icon:require(`@/assets/images/icon/165.svg`),title:'Clean & Unique',subtitle:'Keep a track on real-time performance while analyzing the success of your mail campaigns.',delay:'200'},
      ],
    }
  }
}
</script>