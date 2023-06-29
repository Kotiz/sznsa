<template>
  <div :class="`${about_doc ? 'counter-info pt-90 pb-45 md-pt-60' : !ser_v2 && 'counter-info-standard pt-70 pb-45'} ${ser_v2 ? 'pt-120 md-pt-100 pb-150 md-pb-100' : ''}`">
    <div class="container">
      <div class="row justify-content-center">

        <div v-for="item in counterData" :key="item.id" class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
          <div class="counter-box-two">
            <h2 class="number" :style="about_doc ? {color:item.color} : ''"><span class="timer">
              <Waypoint @change="onChange">
                  <span v-if="startCounter" class="d-flex align-items-center justify-content-center">
                    <count-up :startVal="0" :endVal="item.value" :duration="5" />{{item.text ? item.text : ''}}
                  </span>
                </Waypoint>
            </span></h2>
            <em>{{item.title}}</em>
            <p v-if="!about_doc" class="font-rubik">{{item.subtitle}}</p>
            <p v-else class="font-rubik" v-html="item.subtitle_2"></p>
          </div> <!-- /.counter-box-two -->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import CountUp from 'vue-countup-v3';
import { Waypoint } from 'vue-waypoint';

export default {
  name: 'CounterInfo',
  components: { CountUp, Waypoint },
  props:{about_doc:Boolean,ser_v2:Boolean},
  data() {
    return {
      startCounter: false,
      counterData: [
        {
          id: 1,
          value: 1500,
          color: '#FAAA4B',
          title: 'Positive Review',
          subtitle: 'A place to think and track ideas',
          subtitle_2: 'A place to think and <br> track ideas',
          text: '+'
        },
        {
          id: 2,
          value: 200,
          color: '#36C2DB',
          title: 'Branches',
          subtitle: 'A home for your iqu team, best',
          subtitle_2: 'A home for your iqu <br> team, best',
          delay: '100',
          text: '+'
        },
        {
          id: 3,
          value: 2,
          color: '#3DB382',
          title: 'Work Done',
          subtitle: 'Beautiful docs for your APIs, Products',
          subtitle_2: 'Beautiful docs for your <br>APIs, Products',
          delay: '200',
          text: 'k'
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