<template>
  <section>
    <div class="container">
      <div>
        <div>
          <h2>{{ name }}</h2>
        </div>
        <div>
          <div v-for="(box, index) in BoxSckills" :key="index">
            <div>
              <div>
                <img :src="box.srcImg" :alt="'image' + name" />
              </div>
              <div v-html="box.name"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Box",
  props: {
    name: String,
    BoxSckills: Array,
  },
};
</script>
