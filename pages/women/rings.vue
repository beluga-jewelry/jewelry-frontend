<template>
  <div class="head-content">
    <JewCard v-for="coll in womanrings" :key="coll.id" :coll="coll" />
  </div>
</template>

<script>
import JewCard from "~/components/JewCard.vue";
export default {
  components: {
    JewCard
  },
  mounted() {
    this.$store.dispatch("productWomanRing");
  },
  computed: {
    womanrings() {
      return this.$store.state.womanrings;
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

