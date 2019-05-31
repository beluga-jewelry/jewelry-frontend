<template>
  <div class="head-content">
    <el-row>
      <el-col :span="5" v-for="pro in promotion" :key="pro.id" offset="1">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img
            src="https://5.imimg.com/data5/RJ/BR/MY-1107937/ruby-diamond-jewelry-500x500.jpg"
            class="image"
          />
          <div style="padding: 14px;">
            <strong>{{ pro.namePromo }}</strong>
            <br />
            <i class="el-icon-caret-right"></i>
            <span class="oldPrice">Price: ${{ pro.oldPrice }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import JewCard from "~/components/JewCard.vue";
export default {
  components: {
    JewCard
  },
  computed: {
    promotion() {
      return this.$store.state.promotions;
    }
  },
  data() {
    return {
      promotion: this.$store.state.promotions,
      imageLogo: require('../assets/belugaLogo.png'),
    };
  }
};
</script>

<style >
.oldPrice {
  color: gray;
  text-decoration-line: line-through;
}
.head-content {
  padding: 5em 10em;
  position: relative;
}
.button {
  padding: 0;
  float: right;
}

.image_promo {
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
.logo {
  width: 250px;
  height: 200px;
  padding-left: 2%;
}
</style>