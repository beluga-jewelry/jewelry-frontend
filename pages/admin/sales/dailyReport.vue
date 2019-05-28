<template>
  <section class="container">
    <el-row>
      <br>
      <el-col :span="18">
        <div>
          <h1>Daily report</h1>
        </div>
      </el-col>
      <el-col :span="3">
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
        <div class="daily">
          <p>date</p>
        </div>
        <el-select v-model="date" placeholder="Select">
          <el-option
            v-for="item in dates"
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
          total_sale: 229,
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
          dates: [{ value: '1', label: '1'}, 
            { value: '2', label: '2'}, 
            { value: '3', label: '3'}, 
            { value: '4', label: '4'}, 
            { value: '5', label: '5'}, 
            { value: '6', label: '6'}, 
            { value: '7', label: '7'}, 
            { value: '8', label: '8'}, 
            { value: '9', label: '9'}, 
            { value: '10', label: '10'}, 
            { value: '11', label: '11'}, 
            { value: '12', label: '12'},
            { value: '13', label: '13'},
            { value: '14', label: '14'},
            { value: '15', label: '15'},
            { value: '16', label: '16'},
            { value: '17', label: '17'},
            { value: '18', label: '18'},
            { value: '19', label: '19'},
            { value: '20', label: '20'},
            { value: '21', label: '21'},
            { value: '22', label: '22'},
            { value: '23', label: '23'},
            { value: '24', label: '24'},
            { value: '25', label: '25'},
            { value: '26', label: '26'},
            { value: '27', label: '27'},
            { value: '28', label: '28'},
            { value: '29', label: '29'},
            { value: '30', label: '30'},
            { value: '31', label: '31'
           }], date: '', 
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