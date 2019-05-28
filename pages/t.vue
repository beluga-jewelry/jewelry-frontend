<template>
  <div>
    hello
  </div>
</template>

<script>
export default {
  layout: "adminDefault",
  mounted() {
    this.$store.dispatch("save");
  }
};
</script>