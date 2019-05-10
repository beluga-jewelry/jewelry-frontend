<template> 
  <div>
    <nuxt-link :to="{path:`/homepage`}">
    <img class="logo" src="~/assets/belugaLogo.png"/>
    </nuxt-link>
    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Sales</span>
              </template>
              <el-submenu index="1-1">
                <template slot="title">Time</template>
                <el-menu-item index="1-1-1">daily report</el-menu-item>
                <el-menu-item index="1-1-2">monthly report</el-menu-item>
                <el-menu-item index="1-1-3">yearly report</el-menu-item>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">Goods</template>
                <el-menu-item index="1-2-1">Rings</el-menu-item>
                <el-menu-item index="1-2-2">Pendant</el-menu-item>
                <el-menu-item index="1-2-3">Earrings</el-menu-item>
                <el-menu-item index="1-2-4">Bangle</el-menu-item>
              </el-submenu>
            </el-submenu>  
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>In Stock</span>
            </el-menu-item> 
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span>Customer Order</span>
            </el-menu-item> 
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span>Product History</span>
            </el-menu-item> 
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Promotion</span>
              </template>
                <el-menu-item index="5-1">Add</el-menu-item>
                <el-menu-item index="5-2">Usage</el-menu-item>
            </el-submenu>

          </el-menu>  
      </el-col>
    </el-row>
  </div>
  
</template>

<script>
  export default {
    layout: "login",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

</style>