<template>
  <div class="not-found-container">
    <div class="container">
      <div class="row">
        <div class="col-xs-6 not-found-left">
          <p class="not-found-text">404</p>
        </div>
        <div class="col-xs-6 not-found-right">
          <h1><strong>Page not found</strong></h1>
          <p class="not-found-message">
            Oh no! We can't seem to find the page you are looking for.
          </p>
          <p class="not-found-message">
            Try going back to the previous page or visit our
            <router-link to="/" @click.native="scrollToTop()">homepage</router-link>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    scrollToTop() {
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
    }
  }
};
</script>

<style scoped>
.not-found-container {
  padding: 100px 0 50px 0;
  text-align: left;
}
.not-found-text {
  font-weight: bold;
  font-size: 100px;
}
.not-found-left {
  padding: 20px;
}
.not-found-right {
  padding: 40px;
}
.not-found-container a {
  text-decoration: none;
}
</style>