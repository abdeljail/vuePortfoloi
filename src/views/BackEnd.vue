<template>
  <div class="FrontEnd">
    <Dfb h1="Back-End" p="jkjkjkjk" />
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
          name: "php",
          srcImg: require("../assets/images/php.png"),
        },
        {
          name: "nodejs ",
          srcImg: require("../assets/images/nodejs.png"),
        },
        {
          name: "mysql",
          srcImg: require("../assets/images/my.jpg"),
        },
        {
          name: "mongo db",
          srcImg: require("../assets/images/db.png"),
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
          path: "/FrontEnd",
          text: "FrontEnd",
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
