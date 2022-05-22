<template>
  <a
    :href="link"
    rel="noopener noreferrer"
    :data-name="name"
    target="_blank"
  >
    {{ name }}
    <i :class="icon" class="fa-brands"></i>
  </a>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
  },
};
</script>
