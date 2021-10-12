<template>
  <div id="app">
    <Header :isClose="isClose" :isPath="isPath" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isClose: false,
      isPath: "/Contact",
    };
  },
  created() {
    this.getStateLink();
  },
  updated() {
    this.getStateLink();
  },
  methods: {
    getStateLink() {
      if (this.$router.history.current.path === "/") {
        this.isClose = false;
        this.isPath = "/Contact";
        return;
      }
      this.isClose = true;
      this.isPath = "/";
    },
  },
  computed: {},
};
</script>
<style>
@import "./assets/css/headerFooter.css";
</style>
