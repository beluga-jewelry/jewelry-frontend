<template>
  <section class="container">
    <el-row>
      <br>
      <div>
        <h1>Product in stock</h1>
      </div>
    </el-row>
    <el-row>
      <br>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="Date_stock"
          width="225">
        </el-table-column>
        <el-table-column 
          prop="product"
          label="Product_name">
        </el-table-column>
        <el-table-column 
          prop="type"
          label="Product_type">
        </el-table-column>
        <el-table-column 
          prop="gender"
          label="Gender">
        </el-table-column>
        <el-table-column 
          prop="quantity"
          label="Quantity">
        </el-table-column>
      </el-table>
    </el-row>
  </section>   
</template>

<script>
export default {
    layout: 'adminDefault',
    mounted(){
        this.$store.dispatch("instock")
    },
    computed: {
        tableData() {
            return this.$store.state.inStock
        }
    },
    data() {
        return {
        }
    },
}
</script>

