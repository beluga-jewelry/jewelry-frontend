<template>
  <section>
    <nuxt-link :to="{ path: `/homepage` }">
      <img class="logo" src="~/assets/belugaLogo.png" />
    </nuxt-link>
    <el-row>
      <el-col :span="17">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <span>Sales</span>
            </template>
              <nuxt-link to="/admin/sales/dailyReport" class="font-colour">
                <el-menu-item index="1-1" class="font-colour">
                  Daily report
                </el-menu-item>
              </nuxt-link>
              <nuxt-link to="/admin/sales/monthlyReport" class="font-colour">
                <el-menu-item index="1-2" class="font-colour">
                  Monthly report
                </el-menu-item>
              </nuxt-link>
               <nuxt-link to="/admin/sales/yearlyReport" class="font-colour">
                <el-menu-item index="1-3" class="font-colour">
                  Yearly report
                </el-menu-item>
              </nuxt-link>
            </el-submenu>
          <nuxt-link to="/admin/inStock" class="font-colour">  
            <el-menu-item index="2" class="font-colour">
                In Stock
            </el-menu-item>
          </nuxt-link>  
          <nuxt-link to="/admin/customerOrder" class="font-colour">  
            <el-menu-item index="3" class="font-colour">
                  Customer Order
            </el-menu-item>
          </nuxt-link> 
          <nuxt-link to="/admin/productHistory" class="font-colour"> 
            <el-menu-item index="4" class="font-colour">
                  Product History
            </el-menu-item>
          </nuxt-link>  
          <nuxt-link to="/admin/promotion" class="font-colour">
            <el-menu-item index="5" class="font-colour">
                Promotion
            </el-menu-item>
          </nuxt-link>              
        </el-menu>
      </el-col>
    </el-row>
  </section>
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
.logo {
  height: 100px;
  padding-left: 40px;
}
</style>
