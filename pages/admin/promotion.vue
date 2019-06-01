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
      <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column
          prop="promotion_name"
          label="Promotion_name"
          width="200"
        >
        </el-table-column>
        <el-table-column prop="discount" label="Discount(%)"></el-table-column>
        <el-table-column prop="used_amount" label="Usage_amount" ></el-table-column>
        <el-table-column prop="begin_date" label="Begin_date"></el-table-column>
        <el-table-column prop="end_date" label="End_date"> </el-table-column>
      </el-table>

    </el-row>
  </section>
</template>

<script>

export default {
  layout: "adminDefault",
  methods: {
      tableRowClassName({row, rowIndex}) {
        // console.log(used_amount);
        for(let i = 0; i < this.tableData.length; i++){
          if (this.tableData[i]['used_amount'] === 0) {
            i === rowIndex
            if(i === rowIndex){
              return 'warning-row';
            }
          }
          else{
            return '';
          }
        }
        // if (rowIndex === 0) {
        //   return 'warning-row';
        // }
        // return '';
      }
    },
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

<style>

.el-table .warning-row {
    background: #F9CDCD;
  }
</style>
