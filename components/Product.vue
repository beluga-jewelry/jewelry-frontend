<template>
  <section class="container">
    <el-row>
        <el-col 
         :span="12">
            <div class="grid">
                <img
                    class="image"
                    :src="imageUrl"
                />
            </div>
        </el-col>
        <el-col
            :span="12">
            <div class="product-name">
                <h2>
                    Ring
                </h2>
            </div>
            <div class="product-detail">
                <h4>Material: Diamond</h4>
            </div>
            <div class="product-price">
                <h2>Price $14.99</h2>
            </div>
            <el-divider></el-divider>
            <div class="product-quantity">
                <el-row>
                    <el-col
                    :span="4">
                        <h4>
                            Quantity
                        </h4>
                    </el-col>
                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
                </el-row>
                <el-row>
                    <el-col
                    :span="4">
                        <div class="product-size">
                            <h4>Size</h4>
                        </div>
                    </el-col>
                    <el-col
                    :span="4">
                        <div class="size-choice">
                          <el-select v-model="value" placeholder="Select size">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>  
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col
                    :span="6">
                        <div class="add-button">
                            <el-button icon="el-icon-goods">Add to bag</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>    
        </el-col>     
    </el-row>
  </section>
</template>


<script>
export default {
  name: "Product",
  data() {
    return {
      imageUrl: require('../assets/ring.jpg'),
      num: 1,
      options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
    };
  },
  methods: {
      handleChange(value) {
        console.log(value)
      }
    }
};
</script>

<style>
.image {
    padding-left: 30px;
    object-fit: contain;
    margin: 15%;
    /* width: 15px; */
}
.product-name {
    margin-top: 17%;
    padding-left: 15px;
    font-family: Arial;
}
.product-detail {
    padding-left: 15px;
    margin-top: 7%;
    margin-bottom: 5%;
    font-size: 18px;
    color: gray
}
.product-price {
    padding-left: 15px;
}
.product-quantity {
    padding-left: 15px;
    margin-top: 5%;
    margin-bottom: 3%;
    font-size: 18px;
    color: gray
}
.product-size {
    margin-top: 18%;
}
.size-choice {
    margin-top: 13%;
    color: #9ad8d3;
}
.add-button {
    margin-top: 5%;
    /* background-color: #9ad8d3; */
}
</style>