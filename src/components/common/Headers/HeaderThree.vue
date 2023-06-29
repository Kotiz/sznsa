<template>
  <div :class="isSticky ? 'theme-main-menu sticky-menu theme-menu-three fixed' 
  : 'theme-main-menu sticky-menu theme-menu-three'">
    <div class="d-flex align-items-center justify-content-center">
      <div class="logo">
        <router-link to="/">
          <img src="../../../assets/images/logo/deski_01.svg" alt="">
        </router-link>
      </div>

      <nav id="mega-menu-holder" class="navbar navbar-expand-lg">
        <div class="nav-container">
           <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
            :class="menuActive ? 'navbar-toggler open' : 'navbar-toggler'" @click="menuActive = !menuActive">
            <span></span>
          </button>
          <div class="navbar-collapse collapse" id="collapsibleNavbar">
            <div class="d-lg-flex justify-content-between align-items-center">
             <!-- nav menu start -->
                <NavMenu/>
                <!-- nav menu end -->

              <ul class="right-widget user-login-button d-flex align-items-center justify-content-center">
                <li>
                  <router-link to="/login" class="signIn-action d-flex align-items-center">
                    <img src="../../../assets/images/icon/52.svg" alt="">
                    <span>Login</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/register" class="signUp-action d-flex align-items-center">
                    <span>Getting Started</span>
                    <img src="../../../assets/images/icon/53.svg" alt="">
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import NavMenu from './NavMenu.vue';

export default {
  name: "HeaderThree",
  components:{
    NavMenu
  },
  data() {
    return {
      isSticky: false,
       menuActive: false,
    }
  },
  methods: {
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      }
      else {
        this.isSticky = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleSticky)
  },
};
</script>