<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
<style>
html,
body {
  scroll-behavior: smooth;
  padding: 0 !important;
  margin: 0 !important;
}

* {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  user-select: none;
}
</style>
