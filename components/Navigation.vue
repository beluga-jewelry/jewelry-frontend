<template>
  <section class="container">
    <nav class="main-navigation">
      <el-breadcrumb separator="|">
        <el-breadcrumb-item :to="{ path: '/homepage' }"
          class="el-icon-house"
          >homepage</el-breadcrumb-item
        >
        <el-breadcrumb-item>
          <nuxt-link :to="{ path: `/bagpage` }" class="el-icon-goods">
            Shopping bag
          </nuxt-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="/homepage" ≈
              class="el-icon-user"
          >Admin</a></el-breadcrumb-item
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
    menuBar,
  }
};
</script>
<style>
.main-navigation {
  display: flex;
  padding: 1.5em 6em;
  padding-left: 1000px;
  font-family: 'Tw Cen MT';
}
</style>
