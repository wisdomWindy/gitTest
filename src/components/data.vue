<template>
  <div id="data">
     <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>数据统计</el-breadcrumb-item>
  <el-breadcrumb-item>数据报表</el-breadcrumb-item>

</el-breadcrumb>
  </div>
</template>

<script>
export default {
name:"data"
}
</script>

<style lang="less" scoped>
#data{
    .breadcrumb{
        height: 50px;
        line-height: 50px;
    }
}
</style>