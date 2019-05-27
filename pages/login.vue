<template>
  <section class= "bgColor">
    <nuxt-link :to="{path:`/homepage`}">

    <img class="logo" src="~/assets/belugaLogo.png"/>
    </nuxt-link>
    <div class="container_login">
      <el-form>
        <el-form-item label="Username">
          <el-input
            ref="usernameField"
            v-model="user.username"
            placeholder="Username"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input
            v-model="user.password"
            placeholder="Password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round @click="onSubmit">Login </el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script>
// require("dotenv").config();

export default {
  layout: "login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      userExist: false
    };
  },
  methods: {
    onSubmit() {
      if (this.user.username == "admin" && this.user.password == 1234) {
        this.userExist = true;
        this.$router.push({ path: "./admin/admin" });
      }

      if (!this.userExist) {
        this.$message.error("Username/Password combination was incorrect");
      }
    }
  }
};
</script>  

<style>
.login_card {
  padding: 5em 10em;
  background: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}
.container_login {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 150px

}

.logo{
  height: 100px;
  padding-left: 40px;

}
.bgColor{
  background-image: linear-gradient(
    to right bottom,
    #c0ffee,
    #acece1,
    #9ad8d3,
    #89c5c5,
    #79b2b7
  );
}


</style>
