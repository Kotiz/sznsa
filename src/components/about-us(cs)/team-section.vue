<template>
  <div class="team-section-two mt-200 md-mt-100">
    <div class="shapes shape-one"></div>
    <div class="shapes shape-two"></div>
    <div class="shapes shape-three"></div>
    <div class="shapes shape-four"></div>
    <div class="container">
      <div class="row align-items-center justify-content-between mb-80 md-mb-10">
        <div class="col-lg-8">
          <div class="title-style-two">
            <p>Our Team</p>
            <h2>Our talented team member waiting to server.</h2>
          </div>
        </div>
        <div class="col-lg-4 d-lg-flex justify-content-end">
          <router-link to="/team-details" class="theme-btn-three md-mt-20">See All Members</router-link>
        </div>
      </div>

      <div class="row">

        <div v-for="team in teams.slice(6, 12)" :key="team.id" class="col-lg-4 col-sm-6" data-aos="fade-up"
          data-aos-duration="1200" :data-aos-delay="team.delay">
          <div class="team-member">
            <router-link :to="`/team-details/${team.id}`">
              <img :src="team.img" alt="">
              <div class="name">{{ team.name }}</div>
              <div class="position">{{ team.title }}</div>
            </router-link>
          </div> <!-- /.team-member -->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import teamMixin from '@/mixin/team-mixin';

export default {
  name: 'TeamSection',
  mixins: [teamMixin]
}
</script>