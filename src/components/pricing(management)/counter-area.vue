<template>
  <div class="counter-info pb-150 md-pb-80">
    <div class="container">
      <div class="row justify-content-center">

        <div v-for="item in counterData" :key="item.id" class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="item.delay">
          <div class="counter-box-two">
            <h2 class="number"><span class="timer">
              <Waypoint @change="onChange">
                  <span v-if="startCounter" class="d-flex align-items-center justify-content-center">
                    <count-up :startVal="0" :endVal="item.number" :duration="5" />{{item.text ? item.text : ''}}
                  </span>
                </Waypoint>
            </span></h2>
            <p class="font-rubik">{{item.title}}</p>
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
  name: 'CounterArea',
    components: { CountUp, Waypoint },
  data() {
    return {
      startCounter: false,
      counterData: [
        {
          id: 1,
          number:4.3,
          title:'Positive review and counting',
          text:''
        },
        {
          id: 2,
          number:29,
          title:'Subscirber trust on our services',
          text:'k',
          delay:'100'
        },
        {
          id: 3,
          number:73,
          title:'Order complete successfully',
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