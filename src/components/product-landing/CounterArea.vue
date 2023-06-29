<template>
  <div class="counter-style-two mt-150 md-mt-60">
    <div class="border-bottom">
      <div class="container">
        <div class="row justify-content-center">
          <div
            v-for="item in counterData"
            :key="item.id"
            class="col-lg-4 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            :data-aos-delay="item.delay"
          >
            <div class="counter-box-four">
              <h2 class="number">
                <span class="timer">
                  <Waypoint @change="onChange">
                    <span
                      v-if="startCounter"
                      class="d-flex align-items-center justify-content-center"
                    >
                      <count-up
                        :startVal="0"
                        :endVal="item.value"
                        :duration="5"
                      />{{ item.text ? item.text : "" }}
                    </span>
                  </Waypoint>
                </span>
              </h2>
              <p>{{ item.title }}</p>
            </div>
            <!-- /.counter-box-four -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountUp from "vue-countup-v3";
import { Waypoint } from "vue-waypoint";

export default {
  name: "CounterArea",
  components: { CountUp, Waypoint },
  data() {
    return {
      startCounter: false,
      counterData: [
        {
          id: 1,
          value: 3,
          title: "Job done successfully",
          text: "k",
        },
        {
          id: 2,
          value: 20,
          title: "3,280 avg rating",
          delay: "100",
          text: "million",
        },
        {
          id: 3,
          value: 3000,
          title: "Using Deski",
          delay: "200",
          text: "+",
        },
      ],
    };
  },
  methods: {
    onChange(waypointState) {
      if (waypointState.going === "IN") {
        this.startCounter = true;
      }
    },
  },
};
</script>
