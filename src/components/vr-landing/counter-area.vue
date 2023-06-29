<template>
  <div class="fancy-feature-thirtyEight lg-container pt-75">
    <div class="container">
      <div class="top-border pt-70 md-pt-30">
        <div class="row">
          <div
            v-for="item in counterData"
            :key="item.id"
            class="col-lg-3 col-sm-6"
            data-aos="fade-up"
            :data-aos-delay="item.delay"
          >
            <div class="counter-box-six text-center mt-40">
              <div class="icon d-flex align-items-end justify-content-center">
                <img :src="item.icon" alt="" />
              </div>
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
                      />
                      {{ item.text ? item.text : "" }}
                      <small>{{ item.sm_text }}</small>
                    </span>
                  </Waypoint>
                </span>
              </h2>
              <p>{{ item.title }}</p>
            </div>
            <!-- /.counter-box-six -->
          </div>
        </div>
      </div>
      <!-- /.top-border -->
    </div>
    <!-- /.container -->
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
          value: 300,
          icon: require(`@/assets/images/icon/194.svg`),
          title: "Focal Adjustment",
        },
        {
          id: 2,
          value: 108,
          icon: require(`@/assets/images/icon/195.svg`),
          title: "Field of View",
          delay: "100",
        },
        {
          id: 3,
          value: 237,
          icon: require(`@/assets/images/icon/196.svg`),
          title: "Weight",
          delay: "200",
          text: "g",
        },
        {
          id: 4,
          value: 32,
          icon: require(`@/assets/images/icon/197.svg`),
          title: "HD Lens Diameter",
          delay: "300",
          sm_text: "mm",
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
