<template>
  <div>
    <adminMenu/>
    <nuxt />
  </div>
</template>

<script>
import adminMenu from "~/components/adminMenu.vue";
export default {
  components: {
    adminMenu
  }
};
</script>