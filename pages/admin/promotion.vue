<template>
  <section class="container">
    <el-row>
      <br>
      <div>
        <h1>Current Promotion</h1>
      </div>
    </el-row>
    <el-row>
      <br>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="promotion"
          label="Promotion_name"
          width="200">
        </el-table-column>
        <el-table-column
          prop="discount"
          label="Discount">
        </el-table-column>
        <el-table-column 
          prop="begin"
          label="Begin_date">
        </el-table-column>
        <el-table-column 
          prop="end"
          label="End_date">
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
            promotion: '1 buy 1',
            discount: '50%',
            begin: '5/06/2018',
            end: '5/06/2018'
          }, {
            promotion: 'midyear sale',
            discount: '20%',
            begin: '1/05/2018',
            end: '31/06/2018'
          }, {
            promotion: 'yearend sale',
            discount: '30%',
            begin: '15/12/2018',
            end: '15/01/2019'
          }],
        }
      }
    }
</script>

