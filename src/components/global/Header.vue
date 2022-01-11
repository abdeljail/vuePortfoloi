<template>
  <header :class="{ borderBottom: isClose }">
    <div class="container">
      <div>
        <div>
          <router-link to="/">
            <img :src="srcLogo" alt="image logo" />
          </router-link>
        </div>
        <div>
          <router-link :to="isPath" v-html="getRes()"> </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {
    isClose: Boolean,
    isPath: String,
  },
  data() {
    return {
      srcLogo: require("@/assets/images/vv.png"),
    };
  },
  created() {
    this.getRes();
  },
  methods: {
    getRes() {
      if (this.isClose) {
        return `<i class="fas fa-times"></i>`;
      }
      return "Contact Me";
    },
  },
};
</script>
