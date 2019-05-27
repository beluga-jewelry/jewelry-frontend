<template>
  <section class="container">
    <nuxt-link :to="{ path: `/homepage` }">
      <img class="logo-jew" src="~/assets/belugaLogo.png" />
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

          <el-menu-item index="2-1">
            <nuxt-link to="/women/rings" class="font-colour">
              Rings
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <nuxt-link to="/women/earrings" class="font-colour">
              Earrings
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <nuxt-link to="/women/pendants" class="font-colour">
              Pendants
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="2-4">
            <nuxt-link to="/women/bangles" class="font-colour">
              Bangles
            </nuxt-link>
          </el-menu-item>
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
          <el-menu-item index="2-6">
            <nuxt-link to="/men/rings" class="font-colour">
              Rings
            </nuxt-link>
          </el-menu-item>
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
  padding-left: 450px;
}
.woman-line {
  color: black;
}

.font-colour {
  color: rgb(113, 189, 189);
}

.logo-jew {
  height: 100px;
  padding-left: 550px;
}
</style>

