<template>
  <div class="NotFound">
    <img style="" :src="imgNotFound" :alt="namePathPage" />
    <h1>{{ namePathPage }}</h1>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  components: {},
  data() {
    return {
      imgNotFound: require("../assets/images/notfound.png"),
      namePathPage: null,
    };
  },
  created() {
    this.namePathPage = this.$route.path.replace(this.$route.path[0], "");
    this.namePathPage += "is not page found";
  },
};
</script>
<style scoped>
.NotFound {
  padding: 60px;
  text-align: center;
}
img {
  width: 300px;
}
h1 {
  margin-top: 20px;
  font-size: 36px;
}
</style>
