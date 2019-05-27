<template> </template>

<script>
export default {
  layout: "login",
  mounted() {
    this.$store.dispatch("save");
  }
};
</script>