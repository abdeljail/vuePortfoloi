<template>
  <button>
    <router-link
      @click.native="top_page()"
      :to="Btn.path"
      rel="noopener noreferrer"
    >
      {{ Btn.text }}
    </router-link>
  </button>
</template>
<script lang="ts">
export default {
  data() {
    return {};
  },
  props: {
    Btn: Object,
  },
  methods: {
    top_page() {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>
