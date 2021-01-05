<template>
  <div id="rights">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="tableData" border style="width: 100%" class="table">
      <el-table-column prop="index" type="index" label="#" width="180"> </el-table-column>
      <el-table-column prop="authName" label="权限名称" width="180">
      </el-table-column>
      <el-table-column prop="path" label="路径"> </el-table-column>
      <el-table-column prop="level" label="层级"> </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "rights",
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getRights(){
      this.$request.roleAll("list").then(res=>{
        if(res.data.meta.status==200){
          this.tableData=res.data.data;
          console.log(res)
        }
      });
    }
  },
  data() {
    return {
      currentPage1: 1,
      currentPage2: 2,
      currentPage3:3,
      currentPage4: 4,
      tableData:[]
    };
  },
  created(){
    this.getRights();
  }
};
</script>

<style scoped>
</style>