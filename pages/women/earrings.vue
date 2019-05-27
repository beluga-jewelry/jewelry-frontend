<template>
  <div class="head-content">
    <JewCard v-for="coll in earrings" :key="coll.id" :coll="coll" />
  </div>
</template>

<script>
import JewCard from "~/components/JewCard.vue";
export default {
  components: {
    JewCard
  },
  data() {
    return {
      earrings: this.$store.state.earrings
    };
  }
};
</script>

<style >
.head-content {
  padding: 5em 10em;
  position: relative;
}
</style>

