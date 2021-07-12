<template>
  <div class="footer-container">
    <footer class="container-fluid py-5">
      <div class="row">
        <div class="col-6 col-md footer-item">
          <a href="https://github.com/rzufil" target="_blank">
            <img
              width="50"
              height="50"
              alt="github"
              src="../assets/images/github-128.webp"
            />
          </a>
        </div>
        <div class="col-6 col-md footer-item">
          <a
            href="https://www.linkedin.com/in/rafael-zufi-leite/"
            target="_blank"
          >
            <img
              width="50"
              height="50"
              alt="linkedin"
              src="../assets/images/linkedin-128.webp"
            />
          </a>
        </div>
        <div class="col-6 col-md footer-item">
          <a href="https://www.instagram.com/rafaelzufil/" target="_blank">
            <img
              width="50"
              height="50"
              alt="instagram"
              src="../assets/images/instagram-128.webp"
            />
          </a>
        </div>
        <div class="col-6 col-md footer-item">
          <a class="navbar-brand" href="/">
            rzufil:~$<span class="blink">&nbsp;</span>
          </a>
        </div>
      </div>
    </footer>
    <div class="container-fluid footer-bottom">
      <p class="text-muted">© {{ year }} Rafael Zufi Leite</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer-container {
  background-color: #2c302e;
}
.text-muted {
  color: #909590 !important;
}
.footer-bottom,
.text-muted {
  margin: 0;
  padding: 0;
}
.footer-item {
  padding: 10px 0;
}
</style>