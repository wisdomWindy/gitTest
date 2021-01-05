<!--
 * @description: 
 * @version: 
 * @Author: 
 * @Date: 2021-01-02 10:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-02 11:22:14
-->
<template>
  <div id="login">
    <h2>用户登录</h2>
    <el-form label-position="top" label-width="80px" :rules="rules" ref="ruleForm" class="demo-ruleForme" :model="loginData">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginData.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="sub-btn">登录</el-button>
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
          username: '',
         password: '',
        },
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max:8, message: '长度在 5 到 8个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$request.login(this.loginData).then(res=>{
              if(res.data.meta.status==200){
                window.sessionStorage.setItem("token",res.data.data.token);
                this.$router.push("users");
              }
            });
            console.log('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
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