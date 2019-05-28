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
          prop="material"
          label="Material">
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
      data() {
        return {
          total_sale: 229,
          tableData: [{
            date: '20/01/2009',
            product: 'rings',
            material: 'diamond',
            quantity: 2,
          }, {
            date: '14/08/2011',
            product: 'bangle',
            material: 'ametis',
            quantity: 1,
          }, {
            date: '20/01/2009',
            product: 'pendant',
            material: 'emeral',
            quantity: 5,
          }],
        }
      }
    }
</script>

