<template>
  <section class="container">
    <el-row>
      <br />
      <div>
        <h1>Current Promotion</h1>
      </div>
    </el-row>
    <el-row>
      <br />
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="promotion_name"
          label="Promotion_name"
          width="200"
        >
        </el-table-column>
        <el-table-column prop="discount" label="Discount(%)"></el-table-column>
        <el-table-column prop="begin_date" label="Begin_date">
        </el-table-column>
        <el-table-column prop="end_date" label="End_date"> </el-table-column>
      </el-table>
    </el-row>
  </section>
</template>

<script>
export default {
  layout: "adminDefault",
  mounted() {
    this.$store.dispatch("adminPromotion");
  },
  computed: {
    tableData() {
      return this.$store.state.adminPromotion;
    }
  },
  data() {
    return {
      total_sale: 229
    };
  }
};
</script>

