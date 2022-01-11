<template>
  <div class="container">
    <div>
      <h1>{{ h1 }}</h1>
    </div>
    <div>
      <p>{{ p }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dfb",
  props: {
    h1: String,
    p: String,
  },
};
</script>
