<template>
  <section class="container">
    <el-row>
      <el-col :span="20">
        <div class="topic-name">
          <h1>Shopping Bag</h1>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14" class="table">
        <el-table :data="shoppingList" style="width: 100%">
          
            <el-table-column label="Product" min-width="220">
                <!-- <div  > -->
                <img slot-scope="{row}" :src="row.imageUrl"  height="150" width="150">
                <!-- </div> -->
            </el-table-column>
            <el-table-column prop="name" width="180"></el-table-column>
            <el-table-column prop="quantity" label="Quantity"></el-table-column>
            <el-table-column prop="size" label="Size"></el-table-column>
            <el-table-column prop="price" label="Price ($)"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="7">
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
                <span>Order summary</span>
                <el-button style="float: right; padding: 3px 0" plain type="text" @click="proceedToCheckout">Checkout</el-button>
            </div>
            <!-- <div class="line-separator-shp"></div> -->
            <!-- <div v-for="i in shoppingList" :key="i" class="listProduct">
                {{ shoppingList[i]['name'] + shoppingList[i]['price']}}
            </div> -->
            <span>Subtotal</span>
            <span style="float: right; padding: 3px 0">${{this.subTotal}}</span>
            </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
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
      value: '',
      customerName: '',
      customerAddress: '',
      totalPrice: 0,
    };
  },
  computed: {
    shoppingList() {
      return this.$store.getters.loadedCart;
    },
    subTotal() {
        for(let i = 0; i < this.shoppingList.length; i++){
            this.totalPrice += this.shoppingList[i]['price']
        }
        return this.totalPrice
    }
  },
  methods: {
      proceedToCheckout() {
        //   console.log(this.shoppingList);
          this.$store.dispatch("orderCustomer",this.shoppingList);
          this.$alert('You just completed your order.', 'Thanks for your order', {
          confirmButtonText: 'OK',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
  }
};
</script>


<style>
.topic-name {
  padding-left: 8%;
  margin-top: 3%;
  font-size: 40px;
  font-family: "Tw Cen MT";
  color: grey;
}
.divider {
  width: 100%;
}
.image-shp {
  /* object-fit: contain; */
  width: 50px;
  height: 50px;
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
  padding-left: 7%;
  padding-right:7%;
}
.text {
    font-size: 14px;
  }

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}

.box-card {
    padding-left: 2%;
    width: 480px;
}
.line-separator-shp{
  height:1px;
  background:#313030;
  /* padding-left: 200px; */
  margin-top: 2%;
  /* border-bottom:1px solid #313030; */
}
</style>
