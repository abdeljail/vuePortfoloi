<template>
  <footer>
    <div class="container">
      <div class="content">
        <div class="infoMe">
          <InfoMe
            h2="Start a project"
            p="Interested in working together? We should queue up a chat. I’ll buy the coffee."
            :btn="{ path: '/Contact', text: 'Start A Conversation' }"
          />
        </div>
      </div>
      <div>
        <div>
          <img :src="srcLogo" alt="image logo" />
        </div>
        <div>Living, learning, & leveling up one day at a time.</div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            v-for="(img, index) in boxShoc"
            :key="index"
            :href="img.http"
          >
            <img :src="img.src" alt="image the shoc" />
          </a>
        </div>
        <div>Hand crafted by me</div>
      </div>
    </div>
  </footer>
</template>
<script>
import InfoMe from "@/components/views/InfoMe.vue";
export default {
  data() {
    return {
      srcLogo: require("@/assets/images/vv.png"),
      boxShoc: [
        {
          http: "https://codepen.io/your-work",
          src: require("@/assets/images/codepen.png"),
        },
        {
          http: "",
          src: require("@/assets/images/instagram.png"),
        },
        {
          http: "https://www.linkedin.com/in/abdeljalil-khalal-0a323a218/",
          src: require("@/assets/images/linkedin.png"),
        },
        {
          http: "https://github.com/abdeljail?tab=repositories",
          src: require("@/assets/images/github.png"),
        },
        {
          http: "https://twitter.com/abdedljalil",
          src: require("@/assets/images/twitter.png"),
        },
      ],
    };
  },
  components: {
    InfoMe,
  },
};
</script>