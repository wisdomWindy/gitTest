<<<<<<< HEAD
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
            <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-button type="success" plain @click="dialogFormVisible=true">添加用户</el-button>
        </div>
      </el-col>
    </el-row>
<el-dialog title="添加用户" :visible.sync="dialogFormVisible" center>
  <el-form :model="newUserData" :rules="rules">
    <el-form-item label="用户名" :label-width="formLabelWidth">
      <el-input v-model="newUserData.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
      <el-input v-model="newUserData.password" autocomplete="off"></el-input>
    </el-form-item>
	 <el-form-item label="email" :label-width="formLabelWidth">
      <el-input v-model="newUserData.email" type="email"  autocomplete="off"></el-input>
    </el-form-item>
	 <el-form-item label="mobile" :label-width="formLabelWidth">
      <el-input v-model="newUserData.mobile" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false" @close="addUser">确 定</el-button>
  </div>
</el-dialog >
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="#" width="auto"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="status" label="用户状态">
        <template scope="scope">
          <el-switch
            v-model="scope.row.mg_status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="updateStatus(scope)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button
          type="danger"
          icon="el-icon-delete"
          @click="deleteUser"
          circle
        ></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
      </el-table-column>
    </el-table>
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
=======
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
						v-model="input3"
						class="input-with-select"
					>
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<el-button type="success" plain>添加用户</el-button>
				</div>
      </el-col>
		</el-row>

		<el-table :data="tableData" border style="width: 100%">
			<el-table-column type="index" label="#" width="auto"> </el-table-column>
			<el-table-column prop="name" label="姓名" width="180"> </el-table-column>
			<el-table-column prop="email" label="邮箱"> </el-table-column>
			<el-table-column prop="status" label="用户状态"> </el-table-column>
			<el-table-column prop="oper" label="操作">
				<el-button type="primary" icon="el-icon-edit" circle></el-button>
				<el-button type="danger" icon="el-icon-delete" circle></el-button>
				<el-button type="success" icon="el-icon-check" circle></el-button>
			</el-table-column>
		</el-table>
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage4"
			:page-sizes="[100, 200, 300, 400]"
			:page-size="100"
			layout="total, sizes, prev, pager, next, jumper"
			:total="400"
		>
		</el-pagination>
	</div>
>>>>>>> 7b954a5d5bd4257962c01869ada31193ed841b8d
</template>

<script>
export default {
<<<<<<< HEAD
  name: "users",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
	  currentPage4: 4,
	  dialogFormVisible:false,
	  formLabelWidth:"120px",
	  rules:{
		   username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
		  ],
		 
		  mobile:[{ min: 5, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
	  },
	  newUserData:{
		  username:"",
		  password:"",
		  email:"",
		  mobile:""
	  },
      statusData: {
        uId: "",
        type: false,
      },
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
    updateStatus(scope) {
      this.$request.fixStatus(this.statusData).then((res) => {
        if (res.data.meta.status == 200) {
          this.$message.success("修改状态成功");
        }
      });
      this.statusData.type = scope.row.mg_status;
    },
    deleteUser() {
      this.$request
        .deleteUser({
          id: this.statusData.uId,
        })
        .then((res) => {
          if (res.data.meta.status == 200) {
            this.$message.success("删除成功");
          }
        });
	},
	addUser(){
		this.$request.addUser(newUserData).then(res=>{
			if(res.data.meta.status==200){
				this.$message.success("添加用户成功");
			}
		});
	},
	search(){
		this.$request.searchUser({
			id:this.userData.uId
		}).then(res=>{
			if(res.data.meta.status==200){
				this.tableData=res.data.data.users;
			}
		});
	}
  },
  created() {
    this.$request.getUsers(userData).then((res) => {
      if (res.data.meta.status == 200) {
        this.total = res.data.data.total;
        this.tableData = res.data.data.users;
        this.statusData.uId = res.data.data.id;
      }
    });
  },
=======
	name: "users",
	data() {
		return {
			currentPage1: 5,
			currentPage2: 5,
			currentPage3: 5,
			currentPage4: 4,
			tableData: [
				{
					date: "2016-05-02",
					name: "王小虎",
					email: "上海市普陀区金沙江路 1518 弄",
					status: "destrioy",
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					email: "上海市普陀区金沙江路 1517 弄",
					status: "destrioy",
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					email: "上海市普陀区金沙江路 1519 弄",
					status: "destrioy",
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					email: "上海市普陀区金沙江路 1516 弄",
					status: "destrioy",
				},
			],
		};
	},
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
	},
>>>>>>> 7b954a5d5bd4257962c01869ada31193ed841b8d
};
</script>

<style lang="less" scoped>
#users {
<<<<<<< HEAD
  .breadcrumb {
    height: 30px;
  }
=======
	.breadcrumb {
		height: 30px;
	}
>>>>>>> 7b954a5d5bd4257962c01869ada31193ed841b8d
}
</style>