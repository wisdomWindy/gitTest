<!--
 * @description: 
 * @version: 
 * @Author: 
 * @Date: 2021-01-02 10:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-02 17:47:53
-->
<template>
  <div id="users">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-input
            placeholder="请输入内容"
            v-model="userData.query"
            class="input-with-select"
          >
            <el-button
              slot="append"
              @click.native="search"
              icon="el-icon-search"
            ></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-button type="success" plain @click="dialogFormVisible = true"
            >添加用户</el-button
          >
        </div>
      </el-col>
    </el-row>
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible"  center>
      <el-form :model="newUserData" label-position="top" ref="ruleForm" class="demo-ruleForme" :rules="rules">
        <el-form-item label="用户名"  prop="username" :label-width="formLabelWidth">
          <el-input
            v-model="newUserData.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
          <el-input
            v-model="newUserData.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="email" prop="email" :label-width="formLabelWidth">
          <el-input
            v-model="newUserData.email"
            type="email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="mobile" prop="mobile" :label-width="formLabelWidth">
          <el-input v-model="newUserData.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="addUser"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="#" width="auto"> </el-table-column>
      <el-table-column prop="username" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="status" label="用户状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="updateStatus(scope)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="fillUser(scope.$index,scope.row)" circle></el-button>
        <el-button
          type="danger"
          icon="el-icon-delete"
         @click="deleteUser(scope.$index,scope.row)"
          circle
        ></el-button>
        <el-button type="success" icon="el-icon-check" @click="currentCheck(scope.$index,scope.row)" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
  title="分配角色"
  :visible.sync="dialogVisible"
  width="30%"
 >
  <el-form :model="ruleForm" :rules="rules" ref="roleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="当前用户" prop="username">
    <el-input v-model="currentUser"></el-input>
  </el-form-item>
  <el-form-item label="角色列表" prop="roles">
    <el-select v-model="roleForm.roles" placeholder="请选择角色">
      <el-option v-for="item in roleList" :key="item.id" :label="item.roleName" :value="item.id"></el-option>
    </el-select>
  </el-form-item>
</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="contributeRole" >确 定</el-button>
  </span>
</el-dialog>
    
    <el-dialog title="修改用户" :visible.sync="updateFormVisible" center>
      <el-form :model="updateUserData" label-position="top" ref="updateUserForm" class="demo-ruleForme" :rules="updateRules">
        <el-form-item label="用户名"  prop="username" :disabled="true" :label-width="formLabelWidth">
          <el-input
            v-model="updateUserData.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
          <el-input
            v-model="updateUserData.email"
            type="email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile" :label-width="formLabelWidth">
          <el-input
            v-model="updateUserData.mobile"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="updateUser"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="userData.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      currentUser:"",
      roleList:[],
      dialogVisible:false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      updateFormVisible:false,
      id:"",
      /* 更新用户信息 */
      updateUserForm:{
        username:"",
        email:"",
        mobile:""
      },
      roleForm:{
        roles:""
      },
      updateRules:{
        username:[{ required: true, message: "请输入用户名", trigger: "blur" },],
        email:[{ required: false, message: "请输入邮箱", trigger: "blur" }],
        mobile:[{ required: false, message: "请输入手机号码", trigger: "blur" }]
      },
       ruleForm: {
          username: '',
          password: '',
        },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" },
        { min: 5, max: 8, message: "长度在 5 到 8个字符", trigger: "blur" }],
        email:[{ required: false, message: "请输入邮箱", trigger: "blur" }],
        mobile: [
          { min: 5, max: 11, message: "长度在 11个字符", trigger: "blur" },
          { required: false, message: "请输入手机号码", trigger: "blur" }
        ],
      },
      /* 修改用户 */
      updateUserData:{
        username:"",
        email:"",
        mobile:""
      },
      /* 添加用户 */
      newUserData: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      /* 修改用户状态 */
      statusData: {
        uId: "",
        type: false,
      },
      /* 查询 */
      userData: {
        query: "",
        pagenum: 1,
        pagesize: 10,
      },
      total: 0,
      tableData: [],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    /* 修改用户状态 */
    updateStatus(scope) {
      console.log(scope);
      this.statusData.uId=scope.row.id;
      console.log(scope.row.id)
      this.statusData.type = scope.row.mg_state;
      this.$request.fixStatus(this.statusData).then((res) => {
        console.log(res);
        if (res.data.meta.status == 200) {
          this.$message.success("修改状态成功");
        }
      });
    },
    /* 填充表单 */
    fillUser(index,row){
      console.log(row)
      this.id=row.id;
      this.updateFormVisible=true;
      this.updateUserData.username=row.username;
      this.updateUserData.email=row.email;
      this.updateUserData.mobile=row.mobile;
    },
    /* 修改用户 */
    updateUser(){
      this.$request.editUser(this.updateUserData,this.id).then(res=>{
        console.log(res)
        if(res.data.meta.status==200){
          this.$message.success("修改成功");
          this.getUser();
        }
      });
      this.updateFormVisible = false;
    },
    /* 获取用户列表 */
    getUser(){
      this.$request.getUsers(this.userData).then((res) => {
      if (res.data.meta.status == 200) {
        this.total = res.data.data.total;
        this.tableData = res.data.data.users;
      }
    });
    },
    /* 删除用户 */
    deleteUser(index,row) {
      console.log(row);
      this.$request
        .deleteUser({
          id: row.id
        })
        .then((res) => {
          console.log(res);
          if (res.data.meta.status == 200) {
            this.$message.success("删除成功");
            this.getUser();
          }
        });
    },
    /* 添加用户 */
    addUser() {
      this.dialogFormVisible = false
      console.log(this.newUserData);
      console.log(1);
      this.$request.addUser(this.newUserData).then((res) => {
        console.log(res);
        if (res.data.meta.status == 201) {
          this.$message.success("添加用户成功");
          this.getUser();
        }
      });
    },
    /* 查询用户 */
    search() {
      console.log(1);
      if(this.userData.query){
      this.$request.searchUser({id: this.userData.query}).then((res) => {
          if (res.data.meta.status == 200) {
            var arr=[];
            arr.push(res.data.data);
            this.tableData = arr;
          }
        });
      }else{
        this.getUser();
      }
    },
    currentCheck(index,row){
     this.currentUser=row.username;
     this.dialogVisible=true;
     this.id=row.id;
   },
    contributeRole(){
      console.log(this.roleForm.roles);
      this.$request.editRole(this.id,this.roleForm.roles).then(res=>{
        console.log(res);
        if(res.data.meta.status==200){
          this.$message.success("修改成功");
        }
      });
      this.dialogVisible = false;
    }
  },
  created() {
   this.getUser();
   this.$request.roleList().then(res=>{
     console.log(res);
     if(res.data.meta.status==200){
       this.$message.success("获取列表成功");
       this.roleList=res.data.data;
     }
   });
  },
};
</script>

<style lang="less" scoped>
#users {
  .breadcrumb {
    height: 30px;
  }
}
</style>