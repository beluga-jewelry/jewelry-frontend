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
            <strong class="oldPrice">{{ pro.namePromo }}</strong>
            <br />
            <i class="el-icon-caret-right"></i>
            <!-- <span>Price: ${{ coll.price }}</span> -->
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promotion: this.$store.state.promotions
    };
  }
};
</script>

<style >
.oldPrice {
  color: gray;
  text-decoration-line: line-through
}
.head-content {
  padding: 5em 10em;
  position: relative;
}
.button {
  padding: 0;
  float: right;
}

.image {
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