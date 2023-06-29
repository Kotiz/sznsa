<template>
  <div :class="`counter-with-icon-one ${ser_page ? 'pt-120 md-pt-70' : !about && !about_event && !pricing_count && !feature_cs && 'pt-200 md-pt-80'} ${about ? 'border-style pt-120 pb-45 md-pt-70' : ''} 
  ${pricing_count ? 'pt-100 md-pt-60' : ''} ${feature_cs ? 'pt-70 pb-45' : ''}`">
    <div class="container">
      <div :class="about ? 'border-style' : about_event && 'border-top pt-50 md-pt-10'">
        <div class="row justify-content-center">

          <div v-for="item in counterData" :key="item.id" class="col-lg-4 col-6" data-aos="fade-up"
            data-aos-duration="1200" :data-aos-delay="item.delay">
            <div class="counter-box-three">
              <div class="icon"><img :src="`${about ? item.icon_2 : item.icon}`" alt=""></div>
              <h2 class="number"><span class="timer ">
                  <Waypoint @change="onChange">
                    <span v-if="startCounter" class="d-flex align-items-center justify-content-center">
                      <count-up :startVal="0" :endVal="item.value" :duration="5" />{{ item.text ? item.text : '' }}
                    </span>
                  </Waypoint>
                </span></h2>
              <p class="font-rubik">{{ item.title }}</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountUp from 'vue-countup-v3';
import { Waypoint } from 'vue-waypoint';

export default {
  name: 'CounterArea',
  components: { CountUp, Waypoint },
  props: {
    ser_page: Boolean,
    about: Boolean,
    about_event: Boolean,
    pricing_count: Boolean,
    feature_cs: Boolean,
  },
  data() {
    return {
      startCounter: false,
      counterData: [
        {
          id: 1,
          icon: require(`@/assets/images/icon/23.svg`),
          icon_2: require(`@/assets/images/icon/31.svg`),
          value: 13,
          title: 'Ticket Sold',
          text: 'm'
        },
        {
          id: 2,
          icon: require(`@/assets/images/icon/24.svg`),
          icon_2: require(`@/assets/images/icon/32.svg`),
          value: 30000,
          title: 'Event organisers',
          delay: '100'
        },
        {
          id: 3,
          icon: require(`@/assets/images/icon/25.svg`),
          icon_2: require(`@/assets/images/icon/33.svg`),
          value: 123,
          title: 'Countries',
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