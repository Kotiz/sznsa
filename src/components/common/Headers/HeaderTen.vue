<template>
  <div
    :class="`theme-main-menu sticky-menu theme-menu-five ${
      isSticky ? 'fixed' : ''
    }`"
  >
    <div class="d-flex align-items-center justify-content-center">
      <div class="logo">
        <router-link to="/">
          <img src="../../../assets/images/logo/deski_06.svg" alt="" />
        </router-link>
      </div>

      <nav id="mega-menu-holder" class="navbar navbar-expand-lg">
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
                  <a href="#product" class="nav-link"
                    ><span @click.self="menuActive = !menuActive"
                      >Product</span
                    ></a
                  >
                </li>
                <li class="nav-item">
                  <a href="#feature" class="nav-link"
                    ><span @click.self="menuActive = !menuActive"
                      >Features</span
                    ></a
                  >
                </li>
                <li class="nav-item">
                  <a href="#pricing" class="nav-link"
                    ><span @click.self="menuActive = !menuActive"
                      >Pricing</span
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
      <div class="right-widget">
        <ul class="d-flex align-items-center">
          <li>
            <div class="dropdown download-btn style-two">
              <button
                class="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Download
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <img src="../../../assets/images/icon/103.svg" alt="" />
                  <span>IOS & Android</span>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <img src="../../../assets/images/icon/104.svg" alt="" />
                  <span>Mac & Windows</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import megaMenus from "./mega-menus.vue";

export default {
  name: "HeaderTen",
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
