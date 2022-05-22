<template>
  <div :class="isMode ? 'dark' : 'light'" class="home">
    <header>
      <div class="container">
        <div class="content-header">
          <div class="logo">
            <router-link to="/">
              <img :src="isSrc" alt="logo image" />
            </router-link>
          </div>
          <nav>
            <div>
              <a href="#contact"> contact me </a>
            </div>
            <div>
              <span title="Dark Mode" @click="mode" role="button" tabindex="0">
                <i :class="isMode ? 'fa-sun' : 'fa-moon'" class="fa-solid"></i>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div class="content-app">
      <div class="container">
        <div>
          <div>
            <h1>I'<span>m</span> abdeljalil<span class="$6">-</span>khalal</h1>
            <p>FULL STACK <strong> javascript developer</strong>. 🎉✨</p>
          </div>
          <div>
            <div class="projects-avatar">
              <div>
                <p>🚀Exploring side projects. ❤️‍🔥</p>

                <Btn
                  link="https://github.com/abdeljail"
                  name="github"
                  icon="fa-github-alt"
                />
                <Btn
                  link="https://codepen.io/abdeljail"
                  name="codepen"
                  icon="fa-codepen"
                />
                <Btn
                  link="https://cssbattle.dev/player/dev_abdo_front_end"
                  name="cssbattle"
                  icon=""
                />
              </div>
              <div>
                <img :src="isAvatar" alt=" image avatar" />
              </div>
            </div>
          </div>
        </div>
        <section>
          <h2>ABOUT ME</h2>
          <article>
            <p>
              I started coding in 2018 at the age of 23. This is what I do every
              day, even if I am not before The Computer. I live the Programming
              wherever I find it, in life problems or in algorithms books. I
              create adaptable and responsive websites using simplicity,
              clarity, and functionality where every <strong>bit</strong>
            </p>
            <p>
              I'm very driven and have a great passion for web development I
              code beautifully simple things, and I love what I do.
            </p>
          </article>
        </section>
        <section id="contact">
          <h2>CONTACT ME</h2>
          <div class="content-contact">
            <article>
              <div>06 69 88 40 57</div>
            </article>

            <article>
              <div
                role="button"
                tabindex="0"
                title="copied email"
                ref="cliptext"
                @click="copy"
              >
                abdeljalil1khalal@gmail.com
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
    <footer>
      <div class="container">
        <div>
          <Btn
            link="https://www.linkedin.com/in/abdeljalil-khalal-0a323a218/"
            name="linkedin"
            icon="fa-linkedin-in"
          />
          <Btn
            link="https://github.com/abdeljail"
            name="github"
            icon="fa-github"
          />
          <Btn link="https://accounts.google.com/" name="gmail" icon="fa-at" />
        </div>
        <div>
          <p>Hand crafted by me ©️</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Btn from "@/components/Btn.vue";
export default {
  name: "Home",
  data() {
    return {
      isSrc: require("@/assets/images/vv.png"),
      isAvatar: require("@/assets/images/avatar.png"),
      isMode: false,
    };
  },
  components: {
    Btn,
  },
  created() {
    if (localStorage.getItem("mode")) {
      this.isMode = JSON.parse(localStorage.getItem("mode"));
    }
  },
  methods: {
    copy() {
      var copyText = this.$refs.cliptext.innerHTML;
      navigator.clipboard.writeText(copyText).then(() => {
        alert("I copied the email ");
      });
    },

    mode() {
      this.isMode = !this.isMode;
      localStorage.setItem("mode", this.isMode);
    },
  },
  computed: {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");
.container {
  width: 600px;
  margin: 0 auto;
}

h1,
nav div:first-of-type a,
.content-app h1 ~ p {
  text-transform: capitalize;
}
h1,
h2 {
  text-transform: uppercase;
}
h1 span {
  text-transform: lowercase;
}

a:not(header .logo a) {
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  padding: 6px 10px;
  transition: 0.3s ease-in;
  text-decoration: none;
}

nav div:first-of-type a,
.content-app .projects-avatar div:first-of-type a,
footer div > div a {
  border-color: #20d29e;
  box-shadow: 0 4px 0 #20d29e;
}

/* start  display: flex*/

.home .content-header,
nav,
.content-app > div > div,
.content-app .projects-avatar,
.content-app .projects-avatar div:first-of-type,
.content-app .projects-avatar div:last-of-type,
.content-app section:last-of-type h2 ~ .content-contact,
footer div > div {
  display: flex;
}

/*  end display: flex */

/*  start flex-direction: column */
.content-app > div > div,
.content-app .projects-avatar div:first-of-type {
  flex-direction: column;
}
/* end  flex-direction: column */

/* start  justify-content: space-between */

.home .content-header,
nav,
.content-app .projects-avatar,
.content-app section:last-of-type h2 ~ .content-contact {
  justify-content: space-between;
}

/* end  justify-content: space-between */

/* end  align-items: center */
.home .content-header,
.content-app .projects-avatar,
nav,
footer div > div {
  align-items: center;
}

/* end  align-items: center */

/* start  justify-content: space-around; */
.content-app > div > div {
  justify-content: space-around;
}
/* ens justify-content: space-around; */

/* start header */

nav {
  width: 170px;
}

nav div:first-of-type a {
  transition-property: background-color, color;
  transition-delay: 0.03s, 0s;
  font-weight: bold;
}

nav div:last-of-type span {
  padding: 10px;
  display: block;
  border-radius: 10px;
  box-shadow: 0 0 20px 1px #28e2aa;
  cursor: pointer;
  transition: 0.3s ease-out box-shadow;
}
nav div:last-of-type span:hover {
  box-shadow: none;
}

/* end header */

/* start div class content-app */

.content-app {
  padding: 20px 20px;
}

.content-app > div > div {
  min-height: 500px;
}

.content-app h1 {
  font-size: 64px;
  font-weight: 900;
  font-family: "Poppins", sans-serif;
}
.content-app h1 ~ p {
  padding: 20px 0 80px;
  font-weight: bold;
  font-size: 20px;
}
.content-app h1 ~ p strong {
  text-decoration: underline 2px wavy;
  line-height: 1.8;
  padding-bottom: 10px;
  color: #20d29e;
}

.content-app .projects-avatar div:first-of-type p {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
}

.content-app .projects-avatar div:first-of-type a {
  transition-property: background-color;
  font-weight: bold;
  margin: 10px 0;
  padding: 10px 12px;
  display: block;
  text-align: center;
}

.content-app .projects-avatar div:first-of-type a:hover {
  background-color: #010531;
  color: #ffffff;
}

.content-app section:first-of-type {
  padding: 50px 0;
}

.content-app section h2 {
  font-size: 40px;
  font-weight: 900;
  font-family: "Poppins", sans-serif;
  padding: 50px 0 40px;
}
.content-app section:first-of-type h2 ~ article p {
  line-height: 1.8;
  font-size: 20px;
  font-weight: 700;
  text-align: justify;
  padding: 0 0 10px 0;
}
.content-app section:last-of-type h2 ~ .content-contact article {
  padding: 20px 0px;
}
.content-app section:last-of-type h2 ~ .content-contact article:first-child {
  padding-right: 30px;
}
.content-app section:last-of-type h2 ~ .content-contact article > div {
  padding: 20px 30px;
  flex-grow: 0.9;
  border-radius: 10px;
  line-height: 1.8;
  font-size: 20px;
  font-weight: 700;
}
.content-app
  section:last-of-type
  h2
  ~ .content-contact
  article:last-of-type
  > div {
  cursor: pointer;
}
/* end div class content-app */

/* start footer */
footer {
  padding: 60px 0 20px;
}
footer div > div {
  justify-content: space-evenly;

  padding: 10px 0;
}
footer div > div a {
  padding: 10px 12px;
}
footer div > div a {
  transition-property: background-color;
  font-weight: bold;
  margin: 10px 0;
  padding: 10px 12px;
  display: block;
  text-align: center;
}

footer div > div a:hover {
  background-color: #010531;
  color: #ffffff;
}
footer div > div p {
  line-height: 1.8;
  font-size: 20px;
  font-weight: 700;
  text-align: justify;
}
/* end footer */

/* start light mode */

.light nav div:last-of-type span {
  color: #ffffff;
  background: #010531;
}

.light {
  background-color: #ffffff;
}
.light h1,
.light .content-app section:first-of-type h2 {
  color: #010531;
}

.light .content-app section:first-of-type h2 ~ article p {
  color: #666f70;
}

.light .content-app h1 ~ p strong,
.light .content-app .projects-avatar div:first-of-type a,
.light footer div > div a,
.light nav div:first-of-type a {
  color: #20d29e;
}

.light .content-app h1 ~ p,
.light .content-app .projects-avatar div:first-of-type p {
  color: #010531;
}
.light nav div:first-of-type a:hover,
.light .content-app .projects-avatar div:first-of-type a:hover {
  background-color: #1f2937;
  color: #ffffff;
}
.light nav div:first-of-type a:hover,
.light nav div:first-of-type,
.light .content-app .projects-avatar div:first-of-type a:hover {
  color: #ffffff;
}

.light .content-app section:last-of-type h2 ~ .content-contact article > div {
  border: 4px solid #010531;
  box-shadow: 0 8px 0 #010531;
}

/* end light mode */

/* start dark mode */

.dark nav div:last-of-type span {
  color: #010531;
  background: #ffffff;
}

.dark {
  background-color: #010531;
}
.dark h1,
.dark .content-app section:first-of-type h2 ~ article p,
.dark .content-app .projects-avatar div:first-of-type p,
.dark .content-app h1 ~ p,
.dark footer div > div p {
  color: #ffffff;
}
.dark .content-app section:last-of-type h2 ~ .content-contact article > div {
  color: #ffffff !important;
}

.dark nav div:first-of-type a:hover,
.dark footer div > div a:hover,
.dark .content-app .projects-avatar div:first-of-type a:hover {
  background-color: #ffffff;
  color: #1f2937;
}
.dark nav div:first-of-type a,
.dark footer div > div a,
.dark .content-app .projects-avatar div:first-of-type a,
.dark .content-app section h2 {
  color: #20d29e;
}
.dark .content-app section:last-of-type h2 ~ .content-contact article > div {
  border: 4px solid #ffffff;
  box-shadow: 0 8px 0 #ffffff;
}

/* end dark mode */
</style>
