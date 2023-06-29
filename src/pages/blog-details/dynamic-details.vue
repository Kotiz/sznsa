<template>
<div class="main-page-wrapper overflow-hidden">
  <!-- header start -->
  <Header/>
  <!-- header end -->
  <!-- hero area start -->
  <FancyHero/>
  <!-- hero area end -->
  <div class="blog-page-bg">
    <div class="shapes shape-one"></div>
    <div class="shapes shape-two"></div>
    <div class="shapes shape-three"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 feature-blog-one width-lg blog-details-post-v1">
          <div class="post-meta">
            <img :src="blog.img" alt="" class="image-meta">
            <div class="tag">{{blog.date}}</div>
            <h3 class="title">{{blog.title}}</h3>
            <p>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas.</p>
            <p>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sit amet ris nullam eget felis. Enim praesent elementum facilisis leo. Ultricies leo integer.</p>
            <img src="../../assets/images/blog/media_29.png" alt="" class="image-meta mt-35">
            <div class="mark-text">This response is important for our ability to from mistakes but it alsogives rise to self-criticism.</div>
            <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experienc the emotional sensation of stress from our first instances. We quickly learn to fear and thus automatically. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h4>Work Harder & Gain Succsess.</h4>
            <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in que future. The same Duis aute irure dolor in reprehenderit .</p>
            <p>is true as we experience the emotional sensation of stress from our firs social rejection ridicule.We quickly learn to fear and thus automatically. potentially stressful situation of all kinds, including the most common of all.</p>
            <div class="d-sm-flex align-items-center justify-content-between share-area">
              <ul class="tag-feature d-flex">
                <li>Tag: &nbsp;</li>
                <li><a href="#">business,</a></li>
                <li><a href="#">makreting,</a></li>
                <li><a href="#">tips</a></li>
              </ul>
              <ul class="share-option d-flex align-items-center">
                <li>Share</li>
                <li><a href="#" style="background: #F6616F;">
                <i class="fa fa-google-plus" aria-hidden="true"></i></a>
                </li>
                <li><a href="#" style="background: #41CFED;">
                <i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#" style="background: #588DE7;">
                <i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div> <!-- /.post-meta -->

          <div class="comment-area">
            <h3 class="title">2 Comments</h3>
            <div class="single-comment">
              <div class="d-flex">
                <img src="../../assets/images/blog/media_30.png" alt="" class="user-img">
                <div class="comment">
                  <h6 class="name">Al Hasani</h6>
                  <div class="time">13 June, 2018, 7:30pm</div>
                  <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The
                    same true we experience </p>
                  <button class="reply">Reply</button>
                </div> <!-- /.comment -->
              </div>
            </div> <!-- /.single-comment -->
            <div class="single-comment">
              <div class="d-flex">
                <img src="../../assets/images/blog/media_31.png" alt="" class="user-img">
                <div class="comment">
                  <h6 class="name">Rashed ka.</h6>
                  <div class="time">13 June, 2018, 7:30pm</div>
                  <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The
                    same true we experience </p>
                  <button class="reply">Reply</button>
                </div> <!-- /.comment -->
              </div>
            </div> <!-- /.single-comment -->
          </div> <!-- /.comment-area -->

          <div class="comment-form-section">
            <h3 class="title">Leave A Comment</h3>
            <p><router-link to="/login">Sign in</router-link> 
            to post your comment or singup if you dont have any account.
            </p>
            <div class="form-style-light">
              <form @submit.prevent="onSubmit">
                <div class="row">
                  <div class="col-12">
                    <div class="input-group-meta mb-35">
                      <label>Name</label>
                      <input type="text" placeholder="Michel">
                      <span class="placeholder_icon valid-sign">
                        <img src="../../assets/images/icon/18.svg" alt="">
                      </span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-group-meta mb-35">
                      <label>Your Email</label>
                      <input type="email" placeholder="gobapubo@jogi.net">
                      <span class="placeholder_icon valid-sign">
                        <img src="../../assets/images/icon/18.svg" alt="">
                      </span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-group-meta lg mb-35">
                      <label>Your Message</label>
                      <textarea placeholder="Write your message here..."></textarea>
                    </div>
                  </div>
                  <div class="col-12"><button class="theme-btn-one btn-lg">Post Comment</button></div>
                </div>
              </form>
            </div> <!-- /.form-style-light -->
          </div> <!-- /.comment-form-section -->
        </div>
        <div class="col-lg-4 col-md-6">
          <!-- blog side bar start -->
          <BlogSidebar />
          <!-- blog side bar end -->
        </div>
      </div>
    </div>
  </div>

  <!-- footer start -->
  <Footer/>
  <!-- footer end -->

  </div>
</template>

<script>
import Header from '@/components/common/Headers/Header.vue';
import FancyHero from '@/components/blog-details/fancy-hero.vue';
import BlogSidebar from '@/components/common/blog-sidebar.vue';
import Footer from '@/components/common/Footers/Footer.vue';
import blogMixin from '@/mixin/blog-mixin';

export default {
    name: "DynamicBlogDetails",
    mixins:[blogMixin],
    components: { Header, FancyHero, BlogSidebar, Footer },
    data() {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  methods: {
    getBlog(blogId) {
      this.blog = this.blogs.find(item => item.id == blogId);
    },
    onSubmit() {
      console.log('Submitted');
    },
  },
  created() {
    this.getBlog(this.id);
  }
}
</script>