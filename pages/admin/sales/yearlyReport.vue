<template>
  <section class="container">
    <el-row>
      <br>
      <el-col :span="16">
        <div>
          <h1>Yearly report</h1>
        </div>
      </el-col>
      <el-col :span="4">
        <div>
          <h3>Total sales</h3>            
        </div>
      </el-col>
      <el-col :span="2">  
        <div class="grid-content bg-purple-light">
          {{ total_sale }}
        </div>
      </el-col>
      <h3>$</h3>
    </el-row>
    <br><br>
    <el-row>
      <el-col :span="6">
        <div class="yearly">
          <p>year</p>
        </div>
        <el-select v-model="year" placeholder="Select">
          <el-option
            v-for="item in years"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <br>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="Date"
          width="200">
        </el-table-column>
        <el-table-column
          prop="product"
          label="Product"
          width="250">
        </el-table-column>
        <el-table-column
          prop="quantity"
          label="Total quantity">
        </el-table-column>
        <el-table-column
          prop="price"
          label="Total price">
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
          total_sale: 9978,
          tableData: [{
            date: '2016-05-03',
            product: 'Woman rings',
            quantity: 5,
            price: 99,
          }, {
            date: '2016-05-03',
            product: 'gold pendant',
            quantity: 2,
            price: 22
          }, {
            date: '2016-05-03',
            product: 'diamond earrings',
            quantity: 1,
            price: 55
          }, {
            date: '2016-05-03',
            product: 'pearl rings',
            quantity: 2,
            price: 32
          }],
          years: [{ value: '2019', label: '2019'}, 
            { value: '2018', label: '2018'}, 
            { value: '2017', label: '2017'}, 
            { value: '2016', label: '2016'}, 
            { value: '2015', label: '2015'
           }], year: '', 
        }
      }
    }
</script>

<style>
.bg-purple-light {
    background: #e5e9f2;
}
  
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>