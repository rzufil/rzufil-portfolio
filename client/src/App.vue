<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  metaInfo() {
    return {
        title: "Rafael Zufi Leite Portfolio Site",
        meta: [
          { name: "description", content: "Rafael Zufi Leite portfolio site. It contains projects, resume, and contact information."},
          { name: "robots", content: "index,follow" }
        ]
    }
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  color: #909590;
}
a:hover {
  color: #dddddd;
}
.blink {
  background: #909590;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-left: 0.5em solid;
  animation: blinking 1s step-start infinite;
}
@keyframes blinking {
  50% {
    opacity: 0;
  }
}
</style>