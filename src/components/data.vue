<template>
<<<<<<< HEAD
  <div id="datas">
=======
  <div id="data">
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
     <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>数据统计</el-breadcrumb-item>
  <el-breadcrumb-item>数据报表</el-breadcrumb-item>
<<<<<<< HEAD
</el-breadcrumb>

=======

</el-breadcrumb>
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
name:"datas",
methods:{
  getData(){
    this.$request.getData().then(res=>{
      console.log(res);
      if(res.data.meta.status==200){
        console.log(res);
      }
    });
  }
},
created(){
  this.getData();
}
=======
name:"data"
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
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