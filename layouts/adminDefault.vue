<template>
  <div class="row">
    <div class="column left">
      <adminMenu />
    </div>
    <div class="column right">
      <nuxt />
    </div>
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
<style>
.column {
  float: left;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

.left {
  width: 22%;
}

.right {
  padding-right: 90px;
  width: 78%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
