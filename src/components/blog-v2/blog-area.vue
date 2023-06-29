<template>
  <div class="blog-page-bg">
    <div class="shapes shape-one"></div>
    <div class="shapes shape-two"></div>
    <div class="shapes shape-three"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 feature-blog-one width-lg">

          <div v-for="blog in blogs.slice(21,25)" :key="blog.id" class="post-meta">
            <img v-if="blog.id !== 24" :src="blog.img" alt="" class="image-meta">
            <div class="tag">{{blog.date}}</div>
            <h3>
              <router-link :to="`/blog-details/${blog.id}`" class="title">{{blog.title}}.</router-link>
            </h3>
            <p>{{blog.desc}}</p>
            <router-link :to="`/blog-details/${blog.id}`" class="read-more d-flex justify-content-between align-items-center">
              <span>Read More</span>
              <i class="flaticon-right-arrow"></i>
            </router-link>
          </div> <!-- /.post-meta -->

          <div class="page-pagination-one pt-15">
            <ul class="d-flex align-items-center">
              <li><a href="#"><i class="fa fa-angle-left" aria-hidden="true"></i></a></li>
              <li><a href="#" class="active">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li> &nbsp; ... &nbsp;</li>
              <li><a href="#">13</a></li>
              <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
            </ul>
          </div> <!-- /.page-pagination-one -->
        </div>
        <div class="col-lg-4 col-md-6">
          <!-- BlogSidebar start -->
          <BlogSidebar />
          <!-- BlogSidebar end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogMixin from '@/mixin/blog-mixin';
import BlogSidebar from '../common/blog-sidebar.vue';

export default {
  name: 'BlogArea',
  mixins: [blogMixin],
  components: { BlogSidebar }
}
</script>