<template>
  <!-- <el-row> -->
  <nuxt-link :to="{ path: `/products/${coll.id}` }">
    <el-col :span="5" offset="1">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img :src="coll.image" class="image_card" />
        <div style="padding: 14px;">
          <strong>{{ coll.name }}</strong>
          <br />
          <!-- promotion -->
          <div v-if="promo">
            <span class="cross-line"> Price: ${{ coll.price }}</span>
            <br />
            <i class="el-icon-caret-right"></i>
            <span>Price: ${{ promotionValue.newPrice }}</span>
          </div>
          <div v-else>
            <i class="el-icon-caret-right"></i>
            <span>Price: ${{ coll.price }}</span>
          </div>
          <!--  promotion-->
        </div>
      </el-card>
    </el-col>
  </nuxt-link>
  <!-- </el-row> -->
</template>

<script>
export default {
  name: "JewCard",
  props: {
    coll: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    promo() {
      return this.$store.getters.isPromotion(this.coll.id);
    },
    promotionValue() {
      return this.$store.state.promotions[this.coll.id - 1];
    }
  }
};
</script>

<style>
.el-card {
  min-height: 50px;
}
/* .bottom {
  margin-top: 13px;
  line-height: 12px;
} */

.button {
  padding: 0;
  float: right;
}

.image_card {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>