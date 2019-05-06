<template>
  <section class="container">
    <nav class="main-navigation">
      <el-breadcrumb separator="|">
        <el-breadcrumb-item :to="{ path: '/homepage' }"
          >homepage</el-breadcrumb-item
        >
        <el-breadcrumb-item
          class="el-icon-goods"
          ><a href="/homepage" ≈>Shopping bag</a></el-breadcrumb-item
        >
      </el-breadcrumb>
    </nav>
    <menuBar />
  </section>
</template>

<script >
import menuBar from "~/components/menuBar.vue";
export default {
  name: "Navigation",
  components: {
    menuBar
  }
};
</script>
<style>
.main-navigation {
  display: flex;
  padding: 1.5em 6em;
  padding-left: 598px;
}
</style>
