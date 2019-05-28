<template>
  <section class="container">
    <el-row>
      <br>
      <div>
        <h1>Product history</h1>
      </div>
    </el-row>
    <el-row>
      <br>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="material"
          label="Material"
          width="200">
        </el-table-column>
        <el-table-column
          prop="country"
          label="Country">
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
            material: 'diamond',
            country: 'Saudiarabia',
            quantity: 2,
          }, {
            material: 'diamond',
            country: 'spain',
            quantity: 4,
          }, {
            material: 'ruby',
            country: 'india',
            quantity: 5,
          }],
        }
      }
    }
</script>

