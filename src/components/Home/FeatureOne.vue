<template>
  <div class="fancy-feature-one pb-150 md-pb-80">
    <div class="text-center">
      <div class="feature-img-area">
        <img src="../../assets/images/assets/feature-img-01.png" alt="" />
        <img src="../../assets/images/assets/feature-img-01-01.png" alt="" class="cs-screen screen-one" />
        <img src="../../assets/images/assets/feature-img-01-02.png" alt="" class="cs-screen screen-two"
          data-aos="fade-left" data-aos-duration="1200" />
        <img src="../../assets/images/assets/feature-img-01-03.png" alt="" class="cs-screen screen-three"
          data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100" />
        <img src="../../assets/images/assets/feature-img-01-04.png" alt="" class="cs-screen screen-four"
          data-aos="fade-right" data-aos-duration="1200" data-aos-delay="150" />
        <img src="../../assets/images/assets/feature-img-01-05.png" alt="" class="cs-screen screen-five"
          data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200" />
      </div>
      <!-- /.feature-img-area -->
    </div>
    <!-- /.text-center -->

    <div class="block-style-one">
      <div class="container">
        <div class="d-lg-flex align-items-center justify-content-between inner-container">
          <div v-for="item in featureData" :key="item.id" class="block-meta-data text-center">
            <div class="line-dot-container">
              <div class="icon-box">
                <img :src="item.icon" alt="" />
              </div>
              <!-- /.icon-box -->
              <p>{{ item.title }}</p>
            </div>
            <div :class="item.textAlign ? item.textAlign : 'hover-content'">
              <span>{{ item.desc }}</span>
            </div>
          </div>
          <!-- /.block-meta-data -->

        </div>
      </div>
      <!-- /.container -->
    </div>
    <!-- /.block-style-one -->
  </div>
</template>

<script>
export default {
  name: "featureOne",
  data() {
    return {
      featureData: [
        {
          id: 1,
          icon: require(`@/assets/images/icon/01.svg`),
          title: 'Create Project',
          desc: 'Don’t waste time on tedious manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time for solving more.',
        },
        {
          id: 2,
          icon: require(`@/assets/images/icon/02.svg`),
          title: 'Making Plan',
          desc: "Now it's more easy to make plan. Let Automation do it for you. Simplify workflows, reduce errors, and save time for solving more."
        },
        {
          id: 3,
          icon: require(`@/assets/images/icon/03.svg`),
          title: 'Create Wireframe',
          desc: "You are one step ahead to create wireframe. Let Automation do it for you. Simplify workflows.",
          textAlign: 'hover-content text-center'
        },
        {
          id: 4,
          icon: require(`@/assets/images/icon/04.svg`),
          title: 'Final Output',
          desc: "Checkout the final output. Let Automation do it for you. Simplify workflows, reduce errors, and save time for solving more.",
          textAlign: 'hover-content text-end'
        },
      ]
    }
  }
};
</script>