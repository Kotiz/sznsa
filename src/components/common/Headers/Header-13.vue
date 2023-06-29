<template>
  <div>
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
                    <a href="#feature" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Fatures</span
                      ></a
                    >
                  </li>
                  <li class="nav-item">
                    <a href="#product" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Product Details</span
                      ></a
                    >
                  </li>
                  <li class="nav-item">
                    <a href="#testimonials" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Testimonials</span
                      ></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div class="right-widget">
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
            class="demo-button"
            ><span>Contact us</span>
            <img src="../../../assets/images/icon/user.svg" alt=""
          /></a>
        </div>
      </div>
    </div>

    <!-- ContactModal start -->
    <ContactModal />
    <!-- ContactModal end -->
  </div>
</template>

<script>
import megaMenus from "./mega-menus.vue";
import ContactModal from "../Modal/ContactModal.vue";

export default {
  name: "HeaderThirteen",
  components: {
    megaMenus,
    ContactModal,
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
