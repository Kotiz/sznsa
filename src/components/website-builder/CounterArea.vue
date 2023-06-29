<template>
  <div :class="`counter-style-three ${ser_v3 ? 'mt-50' : 'lg-container mt-130'}`">
    <div class="container">
      <div :class="ser_v3 ? '' : 'bottom-border'">
        <div class="row">

          <div v-for="item in counterData" :key="item.id" class="col-lg-4">
            <div class="counter-box-five text-center mb-65" data-aos="fade-up" :data-aos-delay="item.delay">
              <div v-if="!ser_v3" class="dot" :style="{background:item.bg_color}"></div>
              <h2 class="number font-gordita">

                <span class="timer">
                <Waypoint @change="onChange">
                  <span v-if="startCounter" class="d-flex align-items-center justify-content-center">
                    <count-up :startVal="0" :endVal="item.number" :duration="5" />{{item.text ? item.text : ''}}
                  </span>
                </Waypoint>
              </span>
                
                <!-- <span class="timer">13</span>k -->
              </h2>
              <p>{{item.title}}</p>
            </div> <!-- /.counter-box-five -->
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
  props: { ser_v3 : Boolean },
  data() {
    return {
      startCounter: false,
      counterData: [
        {
          id: 1,
          bg_color:'#25E5DA',
          number:13,
          title:'Job done successfully',
          text:'k'
        },
        {
          id: 2,
          bg_color:'#FF36AF',
          number:20,
          title:'3280 avg rating',
          text:'million',
          delay:'100'
        },
        {
          id: 3,
          bg_color:'#FFB13A',
          number:3000,
          title:'using Deski',
          text:'+',
          delay:'150'
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