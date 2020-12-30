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
};
</script>

<style lang="less" scoped>
#users {
	.breadcrumb {
		height: 30px;
	}
}
</style>