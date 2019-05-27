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
                <el-menu-item index="1-1-1">
                  <nuxt-link to="/admin/sales/dailyReport" class="font-colour">
                    Daily report
                  </nuxt-link>
                </el-menu-item>
                <el-menu-item index="1-1-2">
                  <nuxt-link to="/admin/sales/monthlyReport" class="font-colour">
                    Monthly report
                  </nuxt-link>
                </el-menu-item>
                <el-menu-item index="1-1-3">
                  <nuxt-link to="/admin/sales/yearlyReport" class="font-colour">
                    Yearly report
                  </nuxt-link>
                </el-menu-item>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">Goods</template>
                <el-menu-item index="1-2-1">
                  <nuxt-link to="/admin/sales/rings" class="font-colour">
                    Rings
                  </nuxt-link>
                </el-menu-item>
                <el-menu-item index="1-2-2">
                  <nuxt-link to="/admin/sales/pendant" class="font-colour">
                    Pendant
                  </nuxt-link>
                </el-menu-item>
                <el-menu-item index="1-2-3"> 
                  <nuxt-link to="/admin/sales/earrings" class="font-colour">
                    Earrings
                  </nuxt-link>
                </el-menu-item>
                <el-menu-item index="1-2-4">
                  <nuxt-link to="/admin/sales/bangle" class="font-colour">
                    Bangle
                  </nuxt-link>
                </el-menu-item>
              </el-submenu>
            </el-submenu>  
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>
                  <nuxt-link to="/admin/inStock" class="font-colour">
                    In Stock
                  </nuxt-link>
              </span>
            </el-menu-item> 
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span>
                  <nuxt-link to="/admin/customerOrder" class="font-colour">
                    Customer Order
                  </nuxt-link>
              </span>
            </el-menu-item> 
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span>
                  <nuxt-link to="/admin/productHistory" class="font-colour">
                    Product History
                  </nuxt-link>
              </span>
            </el-menu-item> 
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Promotion</span>
              </template>
                <el-menu-item index="5-1">
                  <nuxt-link to="/admin/promotion/add" class="font-colour">
                    Add
                  </nuxt-link>
                </el-menu-item>
                <el-menu-item index="5-2">
                  <nuxt-link to="/admin/promotion/usage" class="font-colour">
                    Usage
                  </nuxt-link>
                </el-menu-item>
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

  .font-colour {
    color: rgb(113, 189, 189);
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
