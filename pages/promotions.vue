<template>
  <div class="head-content">
    <JewCard v-for="coll in promotion" :key="coll.id" :coll="coll" />
  </div>
</template>

<script>
import JewCard from "~/components/JewCard.vue";
export default {
  components: {
    JewCard
  },
  computed: {
    promotion() {
      return this.$store.state.promotions;
    }
  }
};
</script>

<style >
.oldPrice {
  color: gray;
  text-decoration-line: line-through;
}
.head-content {
  padding: 5em 10em;
  position: relative;
}
.button {
  padding: 0;
  float: right;
}

.image_promo {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>