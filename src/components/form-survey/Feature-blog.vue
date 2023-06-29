<template>
  <div class="feature-blog-five lg-container pt-160 md-pt-120">
    <div class="container">
      <div
        class="title-style-eleven text-center mb-40 md-mb-20"
        data-aos="fade-up"
      >
        <h2>Inside Story</h2>
        <p class="mt-25 md-mt-10">
          Automatically send people to the next stage of the journey
        </p>
      </div>

      <div class="row">
        <div
          v-for="item in blogs.slice(36, 40)"
          :key="item.id"
          :class="`col-lg-4 col-sm-6 d-flex ${item.d_none ? item.d_none : ''}`"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
        >
          <article class="post-meta mt-30">
            <figure class="post-img m0">
              <router-link
                :to="`/blog-details/${item.id}`"
                class="w-100 d-block"
              >
                <img :src="item.img" alt="" class="w-100 tran4s" />
              </router-link>
            </figure>
            <div class="post-data">
              <router-link
                router-link
                :to="`/blog-details/${item.id}`"
                class="blog-title"
              >
                <h5>{{ item.title }}</h5>
              </router-link>
              <router-link
                :to="`/blog-details/${item.id}`"
                class="read-btn tran3s"
                >Continue Reading</router-link
              >
            </div>
            <!-- /.post-data -->
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogMixin from "@/mixin/blog-mixin";

export default {
  name: "FeatureBlog",
  mixins: [blogMixin],
};
</script>
