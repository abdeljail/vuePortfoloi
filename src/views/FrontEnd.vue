<template>
  <div class="FrontEnd" id="FontEnd">
    <Dfb
      h1="Front-End"
      p="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
    />
    <Box name="Sckills" :BoxSckills="BoxSckills" />
    <Box name="Dev Tools" :BoxSckills="BoxDevTools" />
    <ChangeBtn :ChangeBtn="ChangeBtn" />
  </div>
</template>
<script>
import Box from "@/components/views/Box.vue";
import Dfb from "@/components/views/Dfb.vue";
import ChangeBtn from "@/components/views/ChangeBtn.vue";
export default {
  name: "fontEnd",
  components: {
    Box,
    Dfb,
    ChangeBtn,
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
          name: "ajax",
          srcImg: require("../assets/images/ajax.jpg"),
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
      ChangeBtn: [
        {
          path: "/BackEnd",
          text: "BackEnd",
        },
        {
          path: "/Design",
          text: "Design",
        },
      ],
    };
  },
};
</script>
<style scoped>
@import "../assets/css/frontEnd.css";
</style>
