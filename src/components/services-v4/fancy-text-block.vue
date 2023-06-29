<template>
  <div class="fancy-text-block-seven mt-130 md-mt-80">
    <div class="bg-wrapper no-bg">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6 col-sm-10 m-auto" data-aos="fade-right" data-aos-duration="1200">
            <div class="counter-info-classic m0">
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
              <div class="bubble-one"></div>
              <div class="bubble-two"></div>
              <div class="bubble-three"></div>
              <div class="bubble-four"></div>
              <div class="bubble-five"></div>
              <div class="bubble-six"></div>
              <div class="bubble-seven"></div>
              <img src="../../assets/images/shape/8.svg" alt="" class="cs-screen dot-shape">
            </div> <!-- /.counter-info-classic -->
          </div>
          <div class="col-xl-6 col-lg-7 ms-auto" data-aos="fade-left" data-aos-duration="1200">
            <div class="quote-wrapper pt-60">
              <img src="../../assets/images/icon/185.png" alt="" class="icon">
              <blockquote class="font-rubik">
                Deski combines excellent live chat, ticketing and automation that allow us to provide quality.
              </blockquote>
              <h6 class="mt-20">Mike Lucas. <span>CEO & Founder deksi</span></h6>
            </div> <!-- /.quote-wrapper -->
          </div>
        </div>

        <div class="mt-90 pb-80 bottom-border">
          <div class="row">
            <div class="col-xl-11 m-auto">
              <div class="row justify-content-between">

                <div v-for="item in feature_data" :key="item.id" class="col-md-4 aos-init aos-animate"
                  data-aos="fade-up" :data-aos-delay="item.delay">
                  <div class="block-style-twentyEight text-center mt-40">
                    <div class="icon d-flex justify-content-center align-items-end">
                      <img :src="item.icon" alt="">
                    </div>
                    <h4 class="font-gordita">{{ item.title }}</h4>
                    <p>{{ item.subtitle }}</p>
                  </div> <!-- /.block-style-twentyEight -->
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- /.bg-wrapper -->
  </div>
</template>

<script>
import CountUp from 'vue-countup-v3';
import { Waypoint } from 'vue-waypoint';

export default {
  name: 'FancyTextBlock',
  components: { CountUp, Waypoint },
  data() {
    return {
      startCounter: false,
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
      ],
      feature_data: [
        {
          id: 1,
          icon: require(`@/assets/images/icon/186.svg`),
          title: 'Daily Updates',
          subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur lom elit'
        },
        {
          id: 2,
          icon: require(`@/assets/images/icon/187.svg`),
          title: 'Easu Cutomization',
          subtitle: 'Nulla vitae elit libero, haretra augue. Donec id elit non m.',
          delay: '100'
        },
        {
          id: 3,
          icon: require(`@/assets/images/icon/188.svg`),
          title: 'Fast Support',
          subtitle: 'Nulla vitae elit libero, a phare augue. Donec id elit non mi porta.',
          delay: '200'
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
}
</script>