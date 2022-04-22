<template>
  <div class="Contact">
    <div class="container">
      <h1>
        Thanks for taking the time to reach out. How can I help you today?
      </h1>
      <div class="form">
        <div v-if="!isErr" class="alert-500" ref="err">
          <div>
            <h2>There is an internal malfunction [ error 500 ]</h2>
            <p>You can contact me via the following</p>
            <span>
              <img :src="icon500" alt="icon 500 " v-on:click="removeEle" />
            </span>
          </div>
        </div>
        <div class="tel-email">
          <div class="tel">
            <div class="icon">
              <img :src="icontel" alt=" icon phone " />
            </div>
            <div class="cont">0669884057</div>
          </div>
          <div class="email">
            <div class="icon">
              <img :src="iconemail" alt=" icon email " />
            </div>
            <div class="cont">abdeljalil1khalal@gmail.com</div>
          </div>
        </div>
        <!-- <form @submit="writeMessage">
          <div class="content-form">
            <div class="left">
              <div class="full-name">
                <label>Full Name</label>
                <input type="text" name="full_name" id="name" />
              </div>
              <div class="email">
                <label>Email</label>
                <input type="email" name="e" id="email" />
              </div>
              <div class="phone">
                <label>Phone</label>
                <input type="tel" name="t" id="phone" />
              </div>
              <div class="object">
                <label>Object</label>
                <input type="text" name="o" id="Object" />
              </div>
            </div>
            <div class="right">
              <div class="message">
                <label>Message</label>
                <textarea name="m" id="message"></textarea>
              </div>
              <div class="btn">
                <button type="submit">send</button>
              </div>
            </div>
          </div>
        </form> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      icon500: require("../assets/images/close.png"),
      iconemail: require("../assets/images/email.png"),
      icontel: require("../assets/images/phone.png"),
      isErr: false,
    };
  },
  created() {},
  methods: {
    removeEle() {
      this.isErr = !this.isErr;
    },
  },
};
</script>
<style scoped type="sass">
@import "../assets/css/contact.css";
</style>
