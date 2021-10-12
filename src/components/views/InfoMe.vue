<template>
  <div>
    <h2>{{ h2 }}</h2>
    <p>{{ p }}</p>
    <Btn
      v-if="typeof btn === 'object'"
      :Btn="btn"
    />
  </div>
</template>
<script>
import Btn from "../global/Btn.vue";
export default {
  name: "InfoMe",
  props: {
    h2: String,
    p: String,
    btn: Object,
  },
  components: {
    Btn,
  },
  created(){
  }
};
</script>