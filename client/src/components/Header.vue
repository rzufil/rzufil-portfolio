<template>
  <div class="navbar-container">
    <nav class="navbar navbar-expand-sm">
      <router-link class="navbar-brand" to="/" @click.native="scrollToTop()"
        >rzufil:~$<span class="blink">&nbsp;</span></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click.stop="toggleNavbar()"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="navbar-collapse"
        :class="{ collapse: show }"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/resume" @click.native="scrollToTop()">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" @click.native="scrollToTop()">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: true
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
    scrollToTop() {
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
      if (!this.show) {
        this.toggleNavbar();
      }
    }
  }
}
</script>

<style scoped>
.navbar-container {
  position: fixed;
  background-color: #2c302e;
  top: 0;
  width: 100%;
  z-index: 1;
  box-shadow: 0 0 30px #000;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(144, 149, 144, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
.navbar-toggler {
  border: 1px solid #909590;
  border-radius: 4px;
}
</style>