<template>
  <!-- <el-row> -->
  <el-col :span="5" offset="1">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img :src="coll.image" class="image" />
      <div style="padding: 14px;">
        <strong>{{ coll.name }}</strong>
        <br />
        <i class="el-icon-caret-right"></i>
        <span>Price: ${{ coll.price }}</span>
      </div>
    </el-card>
  </el-col>
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
  data() {
    return {};
  }
};
</script>

<style>
/* .el-card {
  min-height: 50px;
} */
/* .bottom {
  margin-top: 13px;
  line-height: 12px;
} */

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