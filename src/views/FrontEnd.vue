<template>
  <div class="fontEnd">
    <Dfb h1="Front-End" p="jkjkjkjk" />
    <Box name="Sckills" :BoxSckills="BoxSckills" />
    <Box name="Dev Tools" :BoxSckills="BoxDevTools" />
  </div>
</template>
<script>
import Box from "@/components/views/Box.vue";
import Dfb from "@/components/views/Dfb.vue";
export default {
  name: "fontEnd",
  components: {
    Box,
    Dfb,
  },
  data() {
    return {
      BoxSckills: [
        {
          name: "html <span>&</span> html5",
          srcImg: require("../assets/images/html.jpg"),
        },
        {
          name: "css <span>&</span> css3 ",
          srcImg: require("../assets/images/css.png"),
        },
        {
          name: "javascript <span>&</span> ecm6",
          srcImg: require("../assets/images/js.jpg"),
        },
        {
          name: "vuejs",
          srcImg: require("../assets/images/vuejs.jpg"),
        },
        {
          name: "bootstrap",
          srcImg: require("../assets/images/bootstrab.png"),
        },
        {
          name: "sass",
          srcImg: require("../assets/images/sass.png"),
        },
        {
          name: "jquery",
          srcImg: require("../assets/images/jquery.png"),
        },
        {
          name: "vuexjs",
          srcImg: require("../assets/images/vuex.png"),
        },
      ],
      BoxDevTools: [
        {
          name: "git",
          srcImg: require("../assets/images/git.png"),
        },
        {
          name: "github ",
          srcImg: require("../assets/images/github1.jpg"),
        },
        {
          name: "visual code",
          srcImg: require("../assets/images/vc.png"),
        },
        {
          name: "cmd",
          srcImg: require("../assets/images/cmd.png"),
        },
      ],
    };
  },
};
</script>
<style scoped>
@import "../assets/css/frontEnd.css";
</style>
