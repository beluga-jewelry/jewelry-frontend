<template>
  <section class="head-admin">
    <h1>hh</h1>
  </section>
</template>

<script>
export default {
  layout: "adminDefault",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.font-colour {
  color: rgb(113, 189, 189);
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.head-admin {
  padding-top: 125px;
}
</style>
