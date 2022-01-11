<template>
  <div>
    <div>
      <img :src="Pack.icon" alt="image icon" />
    </div>
    <h3>{{ Pack.name }}</h3>
    <strong v-if="Pack.strong !== null">{{ Pack.strong }}</strong>
    <div>
      <img :src="Pack.image" v-if="Pack.image !== null" alt="image icon" />
      <p>{{ Pack.p }}</p>
      <img :src="Pack.image" v-if="Pack.image !== null" alt="image icon" />
    </div>
    <a
      v-if="Pack.urlPoject !== null"
      :href="Pack.urlPoject"
      target="_blank"
      rel="noopener noreferrer"
      >code source in github</a
    >
  </div>
</template>
<script>
export default {
  name: "Pack",
  props: {
    Pack: Object,
  },
  data() {
    return {
      cs: "",
    };
  },
};
</script>
<style scoped>
a {
  padding: 10px 10px;
  width: 80%;
  margin: 20px auto 0;
  border-radius: 31px;
  border: 1px solid #11141a;
  color: #11141a;
  text-align: center;
  text-transform: capitalize;
  transition: 0.3s linear;
  font-size: 12px;
}
a:hover {
  background-color: #11141a;
  color: #ffffff;
  transform: scale(1.05, 1.05);
}
</style>
