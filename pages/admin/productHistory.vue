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
          prop="colour"
          label="Colour">
        </el-table-column>
        <el-table-column
          prop="country"
          label="Country">
        </el-table-column>
      </el-table>
    </el-row>
  </section>   
</template>

<script>
export default {
    layout: 'adminDefault',
    mounted(){
        this.$store.dispatch("history")
    },
    computed: {
        tableData() {
            return this.$store.state.History
        }
    },
    data() {
        return {
        }
    },
}
</script>

