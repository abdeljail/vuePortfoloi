<template>
  <section>
    <div class="container">
      <div>
        <div v-for="(bottun, index) in ChangeBtn" :key="index">
          <Btn :Btn="bottun" />
        </div>
      </div>
      <div></div>
    </div>
  </section>
</template>
<script>
import Btn from "@/components/global/Btn.vue";
export default {
  name: "Home",
  components: { Btn },
  props: {
    ChangeBtn: Array,
  },
};
</script>

<style></style>
