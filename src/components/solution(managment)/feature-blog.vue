<template>
  <div class="feature-blog-two pt-150 pb-170 md-pt-100 md-pb-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-11 m-auto">
          <div class="title-style-one text-center mb-50 md-mb-20">
            <h6 class="font-rubik" style="color:#787CFF">Some success stories</h6>
            <h2>Some well known companies get real benifits to work with deski.</h2>
          </div> <!-- /.title-style-one -->
        </div>
      </div>

      <div class="row justify-content-center">

        <div v-for="blog in blogs.slice(6,9)" :key="blog.id" class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="blog.delay">
          <div class="post-meta">
            <img :src="blog.img" alt="" class="image-meta">
            <h3>
              <router-link :to="`/blog-details/${blog.id}`" class="title">{{ blog.title }}</router-link>
            </h3>
            <router-link :to="`/blog-details/${blog.id}`" class="read-more d-flex justify-content-between align-items-center">
              <span>{{ blog.tag }}</span>
              <i class="flaticon-right-arrow"></i>
            </router-link>
          </div> <!-- /.post-meta -->
        </div>

      </div>
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