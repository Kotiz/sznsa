<template>
  <div>
    <div :class="`${isSticky ? `theme-main-menu sticky-menu theme-menu-one fixed 
    ${center_white ? 'center-white' : ''}` 
    : `theme-main-menu sticky-menu theme-menu-one ${center_white ? 'center-white' : ''}`}`">
      <div :class="`d-flex align-items-center ${center_white ? 'justify-content-center' : 'justify-content-between'}`">
        <div class="logo">
          <routerLink to="/">
            <img v-if="!center_white" src="../../../assets/images/logo/Stowarzyszenie_Szansa_logo_male.svg" alt="" />
            <img v-if="center_white" src="../../../assets/images/logo/Stowarzyszenie_Szansa_logo_male.svg" alt="" />
          </routerLink>
        </div>
        <nav id="mega-menu-holder" class="navbar navbar-expand-lg">
          <div class="nav-container">
          <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
            :class="menuActive ? 'navbar-toggler open' : 'navbar-toggler'" @click="menuActive = !menuActive">
            <span></span>
          </button>
            <div class="navbar-collapse collapse" id="collapsibleNavbar">
              <div class="d-lg-flex align-items-center">
                <!-- nav menu start -->
                <NavMenu/>
                <!-- nav menu end -->

                <!-- <ul class="right-button-group d-flex align-items-center justify-content-center">
                  <li>
                    <router-link to="/login" class="signIn-action">Login</router-link>
                  </li>
                  <li>
                    <router-link to="/register" class="signUp-action">Get Started</router-link>
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from './NavMenu.vue';

export default {
  name: "HeaderComponent",
  props:{center_white:Boolean},
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