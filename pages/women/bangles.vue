<template>
  <div class="head-content">
    <JewCard v-for="coll in bangles" :key="coll.id" :coll="coll" />
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
      bangles: this.$store.state.bangles
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

