<template>
  <div class="fancy-feature-three pt-200 md-pt-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="title-style-one">
            <h6 class="font-rubik">You’re in good company</h6>
            <h2>Join the community by using our apps to grow faster.</h2>
          </div>
          <!-- /.title-style-one -->

          <div class="counter-info-classic">
            <div v-for="item in counterData" :key="item.id" :class="item.color">
              <h2 class="number font-rubik">
                <Waypoint @change="onChange">
                  <span v-if="startCounter" class="d-flex">
                    <count-up :startVal="0" :endVal="item.value" :duration="5" />k
                  </span>
                </Waypoint>
              </h2>
              <p class="font-rubik">{{ item.title }}</p>
            </div>
            <!-- /.counter-box-one -->
            <div class="bubble-one"></div>
            <div class="bubble-two"></div>
            <div class="bubble-three"></div>
            <div class="bubble-four"></div>
            <div class="bubble-five"></div>
            <div class="bubble-six"></div>
            <div class="bubble-seven"></div>
            <img src="../../assets/images/shape/8.svg" alt="" class="cs-screen dot-shape" />
          </div>
          <!-- /.counter-info-classic -->
        </div>

        <div class="col-lg-6">
          <div class="clients-feedback-classic md-mt-80">
            <div v-for="item in featureData" :key="item.id" class="feedback-wrapper" data-aos="fade-up"
              data-aos-duration="1200">
              <img :src="item.img" alt="" class="media-meta" />
              <p>
                {{ item.desc }}
              </p>
              <h6 class="name">{{ item.title }}</h6>
              <span class="font-rubik disg-info">{{ item.subtitle }}</span>
            </div>
            <!-- /.feedback-wrapper -->
          </div>
          <!-- /.clients-feedback-classic -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountUp from 'vue-countup-v3'
import { Waypoint } from 'vue-waypoint'

export default {
  name: "featureThree",
  components: { CountUp, Waypoint },
  data() {
    return {
      startCounter: false,
      featureData: [
        {
          id: 1,
          img: require(`@/assets/images/media/img_02.png`),
          title: 'Rena Singleton',
          subtitle: 'Former Assistant Jamuna Group.',
          desc: 'it’s a great exprience to work with deski. They’r vey humble and expert & the service has been excellent & super.'
        },
        {
          id: 2,
          img: require(`@/assets/images/media/img_03.png`),
          title: 'Rashed Ka.',
          subtitle: 'UI designer Baper Inc.',
          desc: 'it’s a great exprience to work with deski. They’r vey humble and expert & the service has been excellent & super.'
        },
        {
          id: 3,
          img: require(`@/assets/images/media/img_04.png`),
          title: 'Zubayer Hasan',
          subtitle: 'Front-end coder HeloShape.',
          desc: 'it’s a great exprience to work with deski. They’r vey humble and expert & the service has been excellent & super.'
        },
      ],
      counterData: [
        {
          id: 1,
          color: 'counter-box-one color-one',
          value: 15,
          title: 'Projects'
        },
        {
          id: 2,
          color: 'counter-box-one color-two',
          value: 3,
          title: 'Workers'
        },
        {
          id: 3,
          color: 'counter-box-one color-three',
          value: 123,
          title: 'Offices'
        },
      ]
    }
  },
  methods: {
    onChange(waypointState) {
      if (waypointState.going === 'IN') {
        this.startCounter = true;
      }
    }
  }
};
</script>