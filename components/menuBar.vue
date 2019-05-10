<template>
  <section class="container">
    <nuxt-link :to="{path:`/homepage`}">
      <img class="logo-jew" src="~/assets/belugaLogo.png"/>
    </nuxt-link>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#9ad8d3"
    >
      <el-menu-item index="1">
        <nuxt-link to="/homepage">NEW ARRIVAL </nuxt-link></el-menu-item
      >
      <el-submenu index="2">
        <template slot="title">
          JEWELRY
        </template>
        <!-- women -->
        <el-submenu index="2-0">
          <template slot="title">
            <div class="woman-line">
              <strong>
                WOMEN
              </strong>
            </div>
          </template>

          <el-menu-item index="2-1">Rings</el-menu-item>
          <el-menu-item index="2-2">Earrings</el-menu-item>
          <el-menu-item index="2-3">Pendents</el-menu-item>
          <el-menu-item index="2-4">Bangles</el-menu-item>
        </el-submenu>
        <!-- men -->
        <el-submenu index="2-5">
          <template slot="title">
            <div class="woman-line">
              <strong>
                MEN
              </strong>
            </div>
          </template>
          <el-menu-item index="2-6">Rings</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <nuxt-link to="/promotions">
          PROMOTIONS
        </nuxt-link>
      </el-menu-item>
    </el-menu>
  </section>
</template>

<script>
export default {
  name: "menuBar",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-menu-demo {
  padding-left: 500px;
}
.woman-line {
  color: black;
}
.logo-jew {
  height: 100px;
  padding-left: 650px;
  
}
</style>

