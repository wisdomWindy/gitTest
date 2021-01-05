<template>
  <div id="rights">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="tableData" border style="width: 100%" class="table">
<<<<<<< HEAD
      <el-table-column prop="index" type="index" label="#" width="180"> </el-table-column>
      <el-table-column prop="authName" label="权限名称" width="180">
      </el-table-column>
      <el-table-column prop="path" label="路径"> </el-table-column>
      <el-table-column prop="level" label="层级"> </el-table-column>
=======
      <el-table-column prop="id" label="#" width="180"> </el-table-column>
      <el-table-column prop="name" label="权限名称" width="180">
      </el-table-column>
      <el-table-column prop="address" label="路径"> </el-table-column>
      <el-table-column prop="address" label="层级"> </el-table-column>
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
<<<<<<< HEAD
      :current-page="currentPage1"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
=======
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
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
<<<<<<< HEAD
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
=======
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
};
</script>

<style scoped>
</style>