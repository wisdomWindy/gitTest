<template>
  <div id="goods">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
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
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <el-button type="success" plain>添加商品</el-button>
        </div></el-col
      >
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
         <el-table-column prop="date" label="#" width="180"> </el-table-column>
      <el-table-column prop="date" label="商品名称" width="180"> </el-table-column>
      <el-table-column prop="name" label="商品价格(元)" width="180"> </el-table-column>
      <el-table-column prop="address" label="商品重量"> </el-table-column>
       <el-table-column prop="date" label="创建时间" width="180"> </el-table-column>
        <el-table-column prop="date" label="操作" width="180">  
             <el-button type="primary" icon="el-icon-edit" circle></el-button>  
             <el-button type="danger" icon="el-icon-delete" circle></el-button> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "goods",
};
</script>

<style lang="less" scoped>
#goods {
  .breadcrumb {
    height: 30px;
  }
}
</style>