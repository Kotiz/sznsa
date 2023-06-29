<template>
  <div class="fancy-feature-nineteen pt-180 md-pt-100" id="effect">
    <div class="container">
      <div class="row">
        <div
          class="col-xl-9 col-lg-11 m-auto"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div class="title-style-eight text-center mb-80 md-mb-40">
            <h2>Unleash Creativity with Pro Effects</h2>
            <p>
              Explore advanced video editing features that only professionals
              have access to!
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          v-for="item in featureData"
          :key="item.id"
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          :data-aos-delay="item.delay"
        >
          <div
            class="block-style-nineteen"
            :style="{ borderLeftColor: item.color }"
          >
            <div class="d-flex align-items-start">
              <img :src="item.icon" alt="" class="icon" />
              <div class="text">
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
          <!-- /.block-style-nineteen -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FancyFeatureTwo",
  data() {
    return {
      featureData: [
        {
          id: 1,
          color: "#FFCE22",
          icon: require(`@/assets/images/icon/112.svg`),
          title: "Green Screen",
          desc: "Change your background and create special effects using the Green Screen tool.",
        },
        {
          id: 2,
          color: "#8F6BF6",
          icon: require(`@/assets/images/icon/113.svg`),
          title: "Audio Mixer",
          desc: "Adjust the audio of each individual track on your timeline lorem elit extract.",
          delay: "150",
        },
        {
          id: 3,
          color: "#FF5C5C",
          icon: require(`@/assets/images/icon/114.svg`),
          title: "Pan & Zoom",
          desc: "Add panning and zooming movements to still footage.",
        },
        {
          id: 4,
          color: "#63EAA9",
          icon: require(`@/assets/images/icon/115.svg`),
          title: "Advanced Text Editing",
          desc: "Edit the color, size, font, and even animation of your text and titles.",
          delay: "150",
        },
        {
          id: 5,
          color: "#5BE2FF",
          icon: require(`@/assets/images/icon/116.svg`),
          title: "Color Tuning",
          desc: "Adjust the white balance and dynamic range of your clips & long videos.",
        },
        {
          id: 6,
          color: "#FF56EE",
          icon: require(`@/assets/images/icon/117.svg`),
          title: "3D Lut",
          desc: "Choose from a selection of color grading presets inspired by popular movies.",
          delay: "150",
        },
      ],
    };
  },
};
</script>
