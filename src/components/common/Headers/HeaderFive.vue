<template>
  <div>
    <div
      :class="`theme-main-menu sticky-menu theme-menu-five ${
        isSticky ? 'fixed' : ''
      }`"
    >
      <div class="d-flex align-items-center justify-content-center">
        <div v-if="dark" class="logo">
          <router-link to="/">
            <img src="../../../assets/images/logo/deski_07.svg" alt="" />
          </router-link>
        </div>
        <div v-else class="logo">
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
                      href="#home"
                      data-bs-toggle="dropdown"
                      >Home</a
                    >
                    <div class="dropdown-menu">
                      <!-- megaMenus start -->
                      <megaMenus />
                      <!-- megaMenus end -->
                    </div>
                  </li>
                  <!-- {{currentSection}} -->
                  <li v-if="!dark && !doc_signature" class="nav-item">
                    <a href="#feature" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Features</span
                      ></a
                    >
                  </li>
                  <li v-if="!dark && !doc_signature" class="nav-item">
                    <a href="#about" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >About Us</span
                      ></a
                    >
                  </li>
                  <li v-if="!dark && !doc_signature" class="nav-item">
                    <a href="#product" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Product</span
                      ></a
                    >
                  </li>
                  <li v-if="!dark && !doc_signature" class="nav-item">
                    <a href="#pricing" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Pricing</span
                      ></a
                    >
                  </li>
                  <li v-if="!dark && !doc_signature" class="nav-item">
                    <a href="#feedback" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Feedback</span
                      ></a
                    >
                  </li>

                  <li v-if="dark && !doc_signature" class="nav-item">
                    <a href="#about" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >About Us</span
                      ></a
                    >
                  </li>
                  <li v-if="dark && !doc_signature" class="nav-item">
                    <a href="#feature" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Features</span
                      ></a
                    >
                  </li>
                  <li v-if="dark && !doc_signature" class="nav-item">
                    <a href="#product" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Product</span
                      ></a
                    >
                  </li>
                  <li v-if="dark && !doc_signature" class="nav-item">
                    <a href="#feedback" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Feedback</span
                      ></a
                    >
                  </li>
                  <li v-if="dark && !doc_signature" class="nav-item">
                    <a href="#pricing" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Pricing</span
                      ></a
                    >
                  </li>

                  <li v-if="doc_signature" class="nav-item">
                    <a href="#product" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Product</span
                      ></a
                    >
                  </li>
                  <li v-if="doc_signature" class="nav-item">
                    <a href="#feature" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Features</span
                      ></a
                    >
                  </li>
                  <li v-if="doc_signature" class="nav-item">
                    <a href="#story" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Stories</span
                      ></a
                    >
                  </li>
                  <li v-if="doc_signature" class="nav-item">
                    <a href="#pricing" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >Pricing</span
                      ></a
                    >
                  </li>
                  <li v-if="doc_signature" class="nav-item">
                    <a href="#faq" class="nav-link"
                      ><span @click.self="menuActive = !menuActive"
                        >FAQ's</span
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
          >
            <span>Request A Demo</span>
            <img
              v-if="!dark"
              src="../../../assets/images/icon/user.svg"
              alt=""
            />
            <img
              v-if="dark"
              src="../../../assets/images/icon/user-w.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>

    <!-- ContactModal start -->
    <ContactModal :dark="dark" />
    <!-- ContactModal end -->
  </div>
</template>

<script>
import megaMenus from "./mega-menus.vue";
import ContactModal from "../Modal/ContactModal.vue";

export default {
  name: "HeaderFive",
  components: {
    megaMenus,
    ContactModal,
  },
  props: {
    dark: Boolean,
    doc_signature: Boolean,
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
