<template>
  <div class="head-content">
    <JewCard v-for="coll in manrings" :key="coll.id" :coll="coll" />
  </div>
</template>

<script>
import JewCard from "~/components/JewCard.vue";
export default {
  components: {
    JewCard
  },
  mounted() {
    this.$store.dispatch("productMen");
  },
  computed: {
    manrings() {
      return this.$store.state.manrings;
    }
  }
};
</script>

<style >
.head-content {
  padding: 5em 10em;
  position: relative;
}
</style>

