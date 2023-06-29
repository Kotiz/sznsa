<template>
  <div
    :class="`theme-main-menu sticky-menu theme-menu-six bg-none ${
      isSticky ? 'fixed' : ''
    }`"
  >
    <div class="d-flex align-items-center">
      <div class="logo order-lg-1">
        <router-link to="/">
          <img src="../../../assets/images/logo/deski_06.svg" alt="" />
        </router-link>
      </div>

      <div class="right-widget order-lg-3">
        <ul class="d-flex align-items-center">
          <li>
            <router-link
              to="/login"
              class="signIn-action d-flex align-items-center"
            >
              <img src="../../../assets/images/icon/120.svg" alt="" />
              <span>login</span>
            </router-link>
          </li>
          <li>
            <router-link to="/register" class="signup-btn">Sign up</router-link>
          </li>
        </ul>
      </div>

      <nav
        id="mega-menu-holder"
        class="navbar navbar-expand-lg ms-lg-auto order-lg-2"
      >
        <div class="nav-container">
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            :class="menuActive ? 'navbar-toggler open' : 'navbar-toggler'"
            @click="menuActive = !menuActive"
          >
            <span></span>
          </button>
          <div
            :class="
              menuActive
                ? 'navbar-collapse collapse ss'
                : 'navbar-collapse collapse'
            "
            id="collapsibleNavbar"
          >
            <div class="d-lg-flex justify-content-between align-items-center">
              <ul
                class="navbar-nav main-side-nav font-gordita"
                id="one-page-nav"
              >
                <li class="nav-item dropdown position-static">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    >Home</a
                  >
                  <div class="dropdown-menu">
                    <!-- megaMenus start -->
                    <megaMenus />
                    <!-- megaMenus end -->
                  </div>
                  <!-- /.dropdown-menu -->
                </li>
                <li class="nav-item">
                  <a href="#feature" class="nav-link"
                    ><span @click.self="menuActive = !menuActive"
                      >Features</span
                    ></a
                  >
                </li>
                <li class="nav-item">
                  <a href="#service" class="nav-link"
                    ><span @click.self="menuActive = !menuActive"
                      >Services</span
                    ></a
                  >
                </li>
                <li class="nav-item">
                  <a href="#feedback" class="nav-link"
                    ><span @click.self="menuActive = !menuActive"
                      >Feedback</span
                    ></a
                  >
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
import megaMenus from "./mega-menus.vue";

export default {
  name: "HeaderNine",
  components: {
    megaMenus,
  },
  data() {
    return {
      isSticky: false,
      menuActive: false,
    };
  },
  methods: {
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
};
</script>
