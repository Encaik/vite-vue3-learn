<template>
  <h1>{{ msg }}</h1>
  <button @click="pp">点了这么多下: {{ count }}</button>
  <p>一小段话</p>
</template>

<script>
import { onMounted, watch, ref } from "vue";
export default {
  props: ["msg"],
  setup(props, ctx) {
    console.log(props);
    let count = ref(0);
    let pp = () => {
      count.value += 1;
    };
    onMounted(() => {
      console.log("onMounted");
    });
    watch(count, (newval, oldval) => {
      console.log(newval, oldval);
    });
    return { count, pp };
  },
  mounted() {
    this.$axios.get("/data").then((res) => {
      console.log(res.data);
    });
  },
};
</script>
