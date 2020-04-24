<template>
  <div class="password">
    <LayoutHeader>
      <el-form :model="ruleForm" label-position="left" label-width="0px" slot="container">
        <div class="login-title">
          <h3>找回密码</h3>
        </div>
        <!-- username -->
        <el-form-item>
          <el-input type="text" v-model="ruleForm.old" auto-complete="off" placeholder="账号">
            <i class="fa fa-user-o" slot="prefix"></i>
          </el-input>
        </el-form-item>

        <!-- password -->
        <el-form-item>
          <el-input type="password" v-model="ruleForm.pwd" auto-complete="off" placeholder="密码">
            <i class="fa fa-key" slot="prefix"></i>
          </el-input>
        </el-form-item>

        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary" style="width:100%">找回密码</el-button>
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
export default class Password extends Vue {
  @Provide() ruleForm: {
    old: String;
    psd: String;
  } = {
    old: "",
    psd: ""
  };
}
</script>

<style lang="scss">
.password {
  .login-title {
    color: #333;
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>