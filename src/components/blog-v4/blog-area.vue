<template>
  <div class="blog-page-white-bg blog-v4">
    <div class="container">
      <div class="wrapper">

        <div v-for="(blog, index) in blogs.slice(31, 36)" :key="index"
          :class="`post-meta ${blog.text_post ? 'text-post' : ''}`" data-aos="fade-up" data-aos-duration="1200">
          <img v-if="blog.id !== 33" :src="blog.img" alt="" class="image-meta">
          <div class="post">
            <div class="date">{{ blog.date }}</div>
            <h3>
              <router-link :to="`/blog-details/${blog.id}`" class="title">
                {{ blog.title }}
              </router-link>
            </h3>
            <p>{{ blog.desc }}</p>
            <router-link :to="`/blog-details/${blog.id}`" class="read-more">
              <span>Continue Reading</span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>
          </div>
        </div> <!-- /.post-meta -->

        <div class="page-pagination-two pt-30">
          <ul class="d-flex align-items-center justify-content-center">
            <li class="arrow"><a href="#"><i class="flaticon-right-arrow"></i></a></li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li>...</li>
            <li><a href="#">Last</a></li>
            <li class="arrow"><a href="#"><i class="flaticon-right-arrow"></i></a></li>
          </ul>
        </div>
      </div> <!-- /.wrapper -->
    </div>
  </div>
</template>

<script>
import blogMixin from '@/mixin/blog-mixin';

export default {
  name: 'BlogArea',
  mixins: [blogMixin]
}
</script>