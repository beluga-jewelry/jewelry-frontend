<template>
  <div class="head-content">
    <JewCard v-for="coll in collection" :key="coll._id" :coll="coll" />
  </div>
</template>

<script>
import JewCard from "~/components/JewCard.vue";
export default {
  components: {
    JewCard
  },
  mounted() {
    this.$store.dispatch("productNew");
  },
  computed: {
    collection() {
      return this.$store.state.collections;
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

