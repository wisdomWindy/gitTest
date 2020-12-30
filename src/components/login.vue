<template>
  <div id="login">
    <h2>用户登录</h2>
    <el-form label-position="top" label-width="80px" :model="loginData">
      <el-form-item label="用户登录">
        <el-input v-model="loginData.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginData.region"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="sub-btn">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
      return {
        labelPosition: 'right',
        loginData: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
#login {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    background: #fff;
    width: 580px;
    height: 440px;
    h2 {
        margin-top: 0;
        padding: 0;
    }
    .sub-btn{
        width:100%;
    }
}
</style>