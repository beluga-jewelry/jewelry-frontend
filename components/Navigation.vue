<template>
  <section class="container">
    <nav class="main-navigation">
      <el-breadcrumb separator="|">
        <el-breadcrumb-item :to="{ path: '/homepage' }"
          class="el-icon-house"
          >homepage</el-breadcrumb-item
        >
        <el-breadcrumb-item
          ><a href="/homepage" ≈
              class="el-icon-goods"
          >Shopping bag</a></el-breadcrumb-item
        >
        <el-breadcrumb-item
          ><a href="/homepage" ≈
              class="el-icon-user"
          >Admin</a></el-breadcrumb-item
        >
      </el-breadcrumb>
    </nav>
    <menuBar />
    <Product />
  </section>
</template>

<script >
import menuBar from "~/components/menuBar.vue";
import Product from "~/components/Product.vue";
export default {
  name: "Navigation",
  components: {
    menuBar,
    Product
  }
};
</script>
<style>
.main-navigation {
  display: flex;
  padding: 1.5em 6em;
  padding-left: 1000px;
}
</style>
