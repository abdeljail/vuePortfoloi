<template>
  <div class="home">
    <div class="container">
      <div>
        <h1>Front-End Developer</h1>
        <p>
          Im Developer Front-end and code beautifully simple things, and I love
          what I do.
        </p>
        <img :src="srcAvatar" alt="image avater" />
      </div>
    </div>
    <section>
      <div class="container">
        <div class="content">
          <div class="infoMe">
            <InfoMe
              h2="Hi, I’m Abdeljalil Khalal Nice to meet you."
              p="Since Beginning My Journey As A Freelance Developer Nearly 1 Year Ago, I Have Created Some Websites , I Work Hard Every Day To Improve His Skill And Learn Any New Skill In Developing Web"
            />
          </div>
          <div class="Pack">
            <Pack v-for="(pack, index) in boxPacks" :key="index" :Pack="pack" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2>Look at the technology I use</h2>
        <div class="content">
          <div>
            <img :src="code" alt="image programation" />
          </div>
          <div>
            <Btn v-for="(btn, index) in Btns" :key="index" :Btn="btn" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="content">
          <div>
            <InfoMe
              h2="My Projects"
              p="I'm A Bit Of A Digital Product Junkie, I Decided That It Would Be A Fun Challenge To Try Designing And Building App Web"
            />
          </div>
          <div class="Pack">
            <Pack
              v-for="(project, index) in boxProject"
              :key="index"
              :Pack="project"
            />
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section class="s-5">
      <div class="container">
        <div class="content">
          <div>
            <h2>Interested in collaborating or investing?</h2>
            <p>I'm Always Open To Discussing Product Design Work</p>
          </div>
          <Btn :Btn="{ path: '/Contact', text: 'Contact Me' }" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// @ is an alias to /src
import InfoMe from "@/components/views/InfoMe.vue";
import Pack from "@/components/views/Pack.vue";
import Btn from "@/components/global/Btn.vue";
export default {
  name: "Home",
  components: { InfoMe, Pack, Btn },
  data() {
    return {
      srcAvatar: require("../assets/images/avatar.png"),
      code: require("../assets/images/code.png"),
      boxPacks: [
        {
          name: "Designer",
          icon: require("../assets/images/layout.png"),
          strong: "Little Experience",
          p: "I value simple content structure, clean design patterns, and thoughtful interactions.",
          image: require("../assets/images/quote2.png"),
          urlPoject: null,
        },
        {
          name: "Front-End Developer",
          icon: require("../assets/images/ux.png"),
          strong: "Specialist",
          p: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
          image: require("../assets/images/quote1.png"),
          urlPoject: null,
        },
        {
          name: "Back-End Developer",
          icon: require("../assets/images/backend.png"),
          strong: "Little Experience",
          p: "I value simple content structure, clean code , and thoughtful interactions.",
          image: require("../assets/images/quote2.png"),
          urlPoject: null,
        },
      ],
      Btns: [
        {
          path: "/Design",
          text: "Designer",
        },
        {
          path: "/FrontEnd",
          text: "FrontEnd",
        },
        {
          path: "/BackEnd",
          text: "BackEnd",
        },
      ],
      boxProject: [
        {
          name: "SaphirInoovation",
          icon: require("../assets/images/abdo.png"),
          strong: null,
          p: "",
          image: null,
          urlPoject: "https://github.com/abdeljail/Saphair-Innovation",
        },
        {
          name: "Site E-Learning",
          icon: require("../assets/images/book.png"),
          strong: null,
          p: "",
          image: null,
          urlPoject: "https://github.com/abdeljail/new-NO9TA",
        },
        {
          name: "No9ta",
          icon: require("../assets/images/no9ta.png"),
          strong: null,
          p: "",
          image: null,
          urlPoject: "https://github.com/abdeljail/new-NO9TA",
        },
        {
          name: "To Do List",
          icon: require("../assets/images/to-do-list.png"),
          strong: null,
          p: "",
          image: null,
          urlPoject: "https://github.com/abdeljail/TodoDev",
        },
      ],
    };
  },
  beforeCreate() {},
  created() {},
  methods: {},
  computed: {},
};
</script>
<style scoped>
@import "../assets/css/home.css";
</style>
