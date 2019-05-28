<template>
  <section class="container">
    <el-row>
      <el-col :span="20">
        <div class="topic-name">
          <h1>Shopping Bag</h1>
          <el-divider class="divider"></el-divider>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" class="table">
        <el-table :data="shoppingList" style="width: 100%">
          
            <el-table-column min-width="220">
                <div slot-scope="{row}" class="img-shp">
                    <img :src="row.imageUrl">
                </div>
            </el-table-column>
            <el-table-column prop="name" width="180"></el-table-column>
            <el-table-column prop="price"></el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >Remove</el-button>
              </template>
            </el-table-column>
          
        </el-table>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    //   imageUrl: require("../assets/ring.jpg"),
      options: [
        {
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2"
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      value: "",
      tableData: [
        {
          imageUrl: require("../assets/ring.jpg"),
          name: "Ring",
          price: '$14.99',
        },
        {
          imageUrl: require("../assets/ring.jpg"),
          name: "Ring",
          price: '$14.99',
        },
        {
          imageUrl: require("../assets/ring.jpg"),
          name: "Ring",
          price: '$14.99',
        },
        {
          imageUrl: require("../assets/ring.jpg"),
          name: "Ring",
          price: '$14.99',
        }
      ]
    };
  },
  computed: {
    shoppingList() {
    //   return this.$store.state.shoppingbag;
      return this.$store.getters.bag;
    }
  }
};
</script>


<style>
.topic-name {
  padding-left: 20%;
  margin-top: 3%;
  font-size: 40px;
  font-family: "Tw Cen MT";
  color: grey;
}
.divider {
  width: 100%;
}
.image-shp {
  object-fit: contain;
  width: 150px;
  height: 150px;
  /* margin-top: 15%;
    padding-left: 50%; */
}
.product-name-shp {
  margin-top: 40%;
  padding-left: 17%;
  font-family: "Tw Cen MT";
}
.product-price-shp {
  /* color: #909399; */
  font-family: "Tw Cen MT";
  margin-top: 10%;
  padding-left: 60%;
  font-size: 20px;
}
.delete-button-shp {
  margin-top: 13%;
  padding-left: 77%;
}
.product-size-shp {
  color: #909399;
  font-family: "Tw Cen MT";
  margin-top: 20%;
  padding-left: 35%;
  font-size: 20px;
}
.size-choice-shp {
  margin-top: 20%;
  /* padding-right: 10%; */
}
.product-qty-shp {
  color: #909399;
  font-family: "Tw Cen MT";
  margin-top: 20%;
  padding-left: 35%;
  font-size: 20px;
}
.product-detail-shp {
  margin-top: 3%;
}
.table {
  padding-left: 17%;
}
</style>
