<template>
  <section class="container">
    <el-row>
      <br>
      <div>
        <h1>Customer order</h1>
      </div>
    </el-row>
    <el-row>
      <br>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="customer"
          label="Customer_name"
          width="200">
        </el-table-column>
        <el-table-column
          prop="product"
          label="Product">
        </el-table-column>
        <el-table-column 
          prop="price"
          label="Price">
        </el-table-column>
        <el-table-column 
          prop="date"
          label="Date_sale">
        </el-table-column>
      </el-table>
    </el-row>
  </section>   
</template>

<script>
export default {
    layout: 'adminDefault',
    mounted(){
        this.$store.dispatch("order")
    },
    computed: {
        tableData() {
            return this.$store.state.customerOrder
        }
    },
    data() {
        return {
        }
    },
      
}
</script>

