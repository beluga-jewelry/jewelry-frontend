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
          {{ totalSale }}
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
          label="Product_name"
          width="250">
        </el-table-column>
        <el-table-column
          prop="type"
          label="Product_type">
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
    computed: {
        tableData() {
            if(this.temp === this.year) {
                console.log(this.year)
                console.log(this.temp)
                return this.$store.state.Yearly
            }
            else {
                this.temp = this.year
                console.log(this.temp)
                this.$store.dispatch("yearlyReport", this.temp)
                return this.$store.state.Yearly
            }
        },
        totalSale(){
            const sales = this.$store.state.totalSaleY;
            return sales.toFixed(2);
        }
    },
      data() {
        return {
          years: [{ value: '2019', label: '2019'}, 
            { value: '2018', label: '2018'}, 
            { value: '2017', label: '2017'}, 
            { value: '2016', label: '2016'}, 
            { value: '2015', label: '2015'
           }], 
           year: new Date().getFullYear(), 
           temp: 0,
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