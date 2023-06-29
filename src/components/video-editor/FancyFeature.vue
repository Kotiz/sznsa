<template>
  <div class="fancy-feature-eighteen mt-130 md-mt-80" id="feature">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 m-auto">
          <div class="title-style-eight text-center" data-aos="fade-up" data-aos-duration="1200">
            <h2>Build with <br> 800+ Stunning Effects</h2>
            <p>Rotate, merge, trim, split, crop and flip videos with a modern & simple ui</p>
          </div>
        </div>
      </div>

      <!-- Nav tabs -->
      <ul class="nav nav-tabs justify-content-center" data-aos="fade-up" data-aos-duration="1200">
        <li v-for="item in tabButtons" :key="item.id" class="nav-item">
          <a :class="`nav-link d-flex align-items-center justify-content-center ${item.active ? 'active' : ''} `" data-bs-toggle="tab" :href="item.href">
            <img :src="item.icon_1" alt="" class="current tran3s">
            <img :src="item.icon_2" alt="" class="hover tran3s">
          </a>
        </li>
      </ul>
    </div>

    <!-- Tab panes -->
    <div class="tab-content" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
      <div v-for="item in tabItems" :key="item.id" :class="`tab-pane ${item.active ? 'active' : 'fade'}`" :id="item.tab_id">
        <div class="row g-0 align-items-center">
          <div class="col-md-6">
            <div class="img-holder">
              <img :src="item.img" alt="">
              <div class="ripple-box d-flex align-items-center justify-content-center">
                <p>{{item.ripple_text}}</p>
              </div>
            </div> <!-- /.img-holder -->
          </div>
          <div class="col-md-6">
            <div class="text-wrapper">
              <h4>{{item.title}}</h4>
              <p>{{item.desc}}</p>
            </div> <!-- /.text-wrapper -->
          </div>
        </div>
      </div>
    </div>
    <img src="../../assets/images/shape/175.svg" alt="" class="shapes shape-right">
    <img src="../../assets/images/shape/176.svg" alt="" class="shapes shape-left">
  </div>
</template>

<script>
export default {
  name: 'FancyFeature',
  data () {
    return {
      tabButtons:[
        {
          id:1,
          icon_1:require(`@/assets/images/icon/105.svg`),
          icon_2:require(`@/assets/images/icon/105-c.svg`),
          href:'#ft1',
          active:true
        },
        {
          id:2,
          icon_1:require(`@/assets/images/icon/106.svg`),
          icon_2:require(`@/assets/images/icon/106-c.svg`),
          href:'#ft2'
        },
        {
          id:3,
          icon_1:require(`@/assets/images/icon/107.svg`),
          icon_2:require(`@/assets/images/icon/107-c.svg`),
          href:'#ft3'
        },
        {
          id:4,
          icon_1:require(`@/assets/images/icon/108.svg`),
          icon_2:require(`@/assets/images/icon/108-c.svg`),
          href:'#ft4'
        },
        {
          id:5,
          icon_1:require(`@/assets/images/icon/109.svg`),
          icon_2:require(`@/assets/images/icon/109-c.svg`),
          href:'#ft5'
        },
        {
          id:6,
          icon_1:require(`@/assets/images/icon/110.svg`),
          icon_2:require(`@/assets/images/icon/110-c.svg`),
          href:'#ft6'
        },
        {
          id:7,
          icon_1:require(`@/assets/images/icon/111.svg`),
          icon_2:require(`@/assets/images/icon/111-c.svg`),
          href:'#ft7'
        },
      ],
      tabItems:[
        {
          id:1,
          tab_id:'ft1',
          img:require(`@/assets/images/media/img_81.png`),
          ripple_text:'Track Human faces',
          title:'Motation Tracking',
          desc:'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
          active:true,
        },
        {
          id:2,
          tab_id:'ft2',
          img:require(`@/assets/images/media/img_92.png`),
          ripple_text:'keyframing experience',
          title:'Keyframing',
          desc:'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
        },
        {
          id:3,
          tab_id:'ft3',
          img:require(`@/assets/images/media/img_93.png`),
          ripple_text:'Audio track down',
          title:'Audio Ducking',
          desc:'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
        },
        {
          id:4,
          tab_id:'ft4',
          img:require(`@/assets/images/media/img_94.png`),
          ripple_text:'Take the color',
          title:'Color Matching',
          desc:'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
        },
        {
          id:5,
          tab_id:'ft5',
          img:require(`@/assets/images/media/img_95.png`),
          ripple_text:'Edit videos at up to 4K',
          title:'4K Editing Support',
          desc:'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
        },
        {
          id:6,
          tab_id:'ft6',
          img:require(`@/assets/images/media/img_96.png`),
          ripple_text:'Remove unwanted noise',
          title:'Noise Removal',
          desc:'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
        },
        {
          id:7,
          tab_id:'ft7',
          img:require(`@/assets/images/media/img_97.png`),
          ripple_text:'Layer multiple video clips',
          title:'Picture in Picture (PIP)',
          desc:'From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.',
        },
      ]
    }
  }
}
</script>