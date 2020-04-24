<template>
  <div class="login">
    <LayoutHeader>
      <el-form
        :rules="rules"
        :model="ruleForm"
        ref="ruleForm"
        label-position="left"
        label-width="0px"
        slot="container"
      >
        <div class="login-title">
          <h3>账号密码登录</h3>
        </div>
        <!-- username -->
        <el-form-item prop="userName">
          <el-input type="text" v-model="ruleForm.userName" auto-complete="off" placeholder="账号">
            <i class="fa fa-user-o" slot="prefix"></i>
          </el-input>
        </el-form-item>

        <!-- password -->
        <el-form-item prop="pwd">
          <el-input type="password" v-model="ruleForm.pwd" auto-complete="off" placeholder="密码">
            <i class="fa fa-key" slot="prefix"></i>
          </el-input>
        </el-form-item>

        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" @click.native.prevent="handleSubmit" style="width:100%">立即登录</el-button>
        </el-form-item>

        <!-- 7天内是否自动登录和忘记密码 -->
        <el-form-item>
          <el-checkbox v-model="ruleForm.autoLogin" :checked="ruleForm.autoLogin">7天内自动登录</el-checkbox>
          <el-button type="text" @click="$router.push('/password')" class="forgot">忘记密码？</el-button>
        </el-form-item>
      </el-form>
    </LayoutHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import LayoutHeader from "./LoginHeader.vue";
@Component({
  components: { LayoutHeader }
})
export default class Login extends Vue {
  @Provide() ruleForm: {
    userName: String;
    pwd: String;
    autoLogin: boolean;
  } = {
    userName: "",
    pwd: "",
    autoLogin: true
  };

  @Provide() rules = {
    userName: [
      { required: true, message: "请输入账号", trigger: "blur" },
      { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
    ],
    pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
  };

  handleSubmit(): void {
    (this.$refs["ruleForm"] as any).validate((valid: boolean) => {
      if (valid) {
        console.log("校验通过");
        console.log(this.$refs["ruleForm"]);
      }
    });
  }
}
</script>

<style lang="scss">
.login {
  .login-title {
    color: #333;
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
  }

  .forgot {
    float: right;
  }
}
</style>