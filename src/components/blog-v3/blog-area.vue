<template>
  <div class="blog-page-white-bg blog-v3">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="feature-blog-three">

            <div v-for="blog in blogs.slice(26,31)" :key="blog.id" class="post-meta">
              <img v-if="blog.id !== 29" :src="blog.img" alt="" class="image-meta">
              <div class="post">
                <div class="date">{{blog.date}}</div>
                <h3>
                  <router-link :to="`/blog-details/${blog.id}`" class="title">{{blog.title}}</router-link>
                </h3>
                <p>{{blog.desc}}</p>
                <router-link :to="`/blog-details/${blog.id}`" class="read-more">
                  <span>Continue Reading</span>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </router-link>
              </div>
            </div> <!-- /.post-meta -->
  
          </div>

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
          <BlogSidebar :blog_v3="true" />
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
  mixins:[blogMixin],
  components: { BlogSidebar },
}
</script>