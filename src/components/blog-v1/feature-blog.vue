<template>
  <div class="feature-blog-one blog-page-bg">
    <div class="shapes shape-one"></div>
    <div class="shapes shape-two"></div>
    <div class="shapes shape-three"></div>
    <div class="container">
      <div class="row">

        <div v-for="blog in blogs.slice(9, 21)" :key="blog.id" class="col-lg-4 col-md-6" data-aos="fade-up"
          data-aos-duration="1200" :data-aos-delay="blog.delay">
          <div class="post-meta">
            <img :src="blog.img" alt="" class="image-meta">
            <div class="tag">{{ blog.tag }}</div>
            <h3>
             <router-link :to="`/blog-details/${blog.id}`" class="title">{{ blog.title }}</router-link>
            </h3>
            <router-link :to="`/blog-details/${blog.id}`" class="read-more d-flex justify-content-between align-items-center">
              <span>Read More</span>
              <i class="flaticon-right-arrow"></i>
            </router-link>
          </div> <!-- /.post-meta -->
        </div>

      </div>

      <div class="text-center mt-30 md-mt-10" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50"><a
          href="#" class="theme-btn-one">Show More</a></div>
    </div>
  </div>
</template>

<script>
import blogMixin from '@/mixin/blog-mixin';

export default {
  name: 'FeatureBlog',
  mixins: [blogMixin]
}
</script>