<template>
  <div id="orders">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="#" width="180"> </el-table-column>
      <el-table-column prop="date" label="订单编号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="订单价格" width="180">
      </el-table-column>
      <el-table-column prop="address" label="是否付款"> </el-table-column>
      <el-table-column prop="address" label="是否发货"> </el-table-column>
      <el-table-column prop="address" label="下单时间"> </el-table-column>
      <el-table-column prop="address" label="操作"
        ><el-button type="primary" icon="el-icon-edit" circle></el-button>
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
  name: "orders",
};
</script>

<style lang="less" scoped>
#orders {
  .breadcrumb {
    height: 50px;
    line-height: 50px;
  }
}
</style>