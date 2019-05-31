<template>
  <section class="container">
    <el-row>
      <el-col :span="12">
        <div class="grid">
          <img class="image" :src="product.image" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="product-name">
          <h2>
            {{ product.name }}
          </h2>
        </div>
        <div class="line-separator"></div>
        <div class="product-detail">
          <h4>Material: {{ product.material }}</h4>
        </div>
        <!-- promotion condition -->
        <div v-if="promo" class="promo-product-price">
          <h2 class="cross-line">Price ${{ product.price }}</h2>
          <h2 class="promotions_css">
            Promotions "{{ promotionValue.promotion_name }}"
          </h2>
          <h2>Price ${{ promoPrice }}</h2>
        </div>
        <div v-else class="promo-product-price">
          <h2>Price ${{ product.price }}</h2>
        </div>
        <!--  -->
        <div class="product-quantity">
          <el-row>
            <el-col :span="4">
              <h4>
                Quantity
              </h4>
            </el-col>
            <el-input-number
              v-model="quantity"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="product-size">
                <h4>Size</h4>
              </div>
            </el-col>
            <el-col :span="9">
              <div class="size-choice">
                <el-select v-model="size" placeholder="Select size">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <div class="add-button">
                <el-button icon="el-icon-goods" @click="addtocart">Add to bag</el-button>
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
  props: {
    product: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      id: Number(this.$route.params.id),
      visible: false,
      quantity: 1,
      size: '',
      options: [
          {
            value: "S",
            label: "S"
          },
          {
            value: "M",
            label: "M"
          },
          {
            value: "L",
            label: "L"
          },
          {
            value: "XL",
            label: "XL"
          }
        ],
    };
  },
  computed: {
    product() {
      return this.$store.getters.isProductId(this.id);
    },
    promo() {
      return this.$store.getters.isPromotion(this.id);
    },
    promotionValue() {
      return this.$store.getters.getPromotions(this.id);
    },
    promoPrice() {
      const temp = this.$store.getters.getPromotions(this.id);
      const num = temp.discount * temp.price;
      return num.toFixed(2);
    }
  },
  methods: {
      addtocart() {
        const productData = {
            id: this.id,
            imageUrl: this.product.image,
            name: this.product.name,
            price: this.promoPrice*this.quantity,
            quantity: this.quantity,
            size: this.size,
        };
        this.$store.dispatch("addToCart", productData);
        this.$router.push("/bagpage");

        // console.log(this.id)
        // console.log(this.product.name)
        // if ( this.promo == true ){
        //     console.log(this.promoPrice*this.quantity)
        // }
        // else {
        //     console.log(this.product.price*this.quantity)
        // }
        // console.log(this.quantity)
        // console.log(this.size)
      }
    }
  }
</script>

<style>
.image {
    padding-left: 5px;
    object-fit: contain;
    margin: 15%;
    width: 400px;
    height: 400px;
}
.product-name {
  margin-top: 20%;
  /* padding-left: 100px; */
  font-family: Arial;
}
.product-detail {
  /* padding-left: 100px; */
  margin-top: 7%;
  margin-bottom: 5%;
  font-size: 18px;
  color: gray;
}
.product-price {
  /* padding-left: 100px; */
}
.promo-product-price {
  /* padding-left: 100px; */
}
.cross-line {
  color: #9ad8d3;
  text-decoration-line: line-through;
}
.product-quantity {
  /* padding-left: 100px; */
  margin-top: 5%;
  margin-bottom: 3%;
  font-size: 18px;
  color: gray;
}
.product-size {
  margin-top: 30%;
}
.size-choice {
  margin-top: 13%;
  color: #9ad8d3;
}
.add-button {
  margin-top: 25%;
  /* background-color: #9ad8d3; */
}
.promotions_css {
  color: red;
}
.line-separator{
  height:3px;
  background:#313030;
  /* padding-left: 200px; */
  margin-top: 2%;
  /* border-bottom:1px solid #313030; */
}
</style>