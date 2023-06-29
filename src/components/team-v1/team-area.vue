<template>
  <div class="team-section-five">
    <div class="container">
      <div class="row">

        <div v-for="team in teams.slice(0,6)" :key="team.id" class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200"
          :data-aos-delay="team.delay">
          <div class="team-member team-block-one mb-50">
            <router-link :to="`/team-details/${team.id}`">
              <div class="info">
                <div class="desig">{{ team.title }}</div>
                <div class="name">{{ team.name }}</div>
              </div>
              <div class="img-meta">
                <img :src="team.img" alt="">
              </div>
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
  name: 'TeamArea',
  mixins: [teamMixin]
}
</script>