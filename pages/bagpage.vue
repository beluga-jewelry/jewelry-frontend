<template>
  <section class="container">
    <ShoppingBag />
  </section>
</template>

<script>
import ShoppingBag from "~/components/ShoppingBag.vue";
export default {
  name: "bagPage",
  components: {
    ShoppingBag
  }
};
</script>