<template>
  <div class="fontEnd">
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
          name: "web application",
          srcImg: require("../assets/images/web.png"),
        },
        {
          name: "site web",
          srcImg: require("../assets/images/site.png"),
        },
      ],
      BoxDevTools: [
        {
          name: "adobe xd",
          srcImg: require("../assets/images/xd.png"),
        },
      ],
      ChangeBtn: [
        {
          path: "/BackEnd",
          text: "BackEnd",
        },
        {
          path: "/FrontEnd",
          text: "FrontEnd",
        },
      ],
    };
  },
};
</script>
<style scoped>
@import "../assets/css/frontEnd.css";
</style>
