<template>
  <div id="params">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>
     <el-alert title="注意：只允许为第三级分类设置相关参数" type="warning" class="el-icon-warning warning-info"> </el-alert>
    <el-row class="select-wrapper">
        <el-col :span="5" class="select-title">
            <h2>请选择商品分类：</h2>
        </el-col>
      <el-col :span="19">
       <div class="grid-content bg-purple-dark">
          <el-cascader
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader>
          </div>
          </el-col>
    </el-row>

   
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="动态参数" name="first">
        <el-button type="primary" disabled>添加动态参数</el-button>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="" width="180"> </el-table-column>
          <el-table-column prop="date" label="#" width="180"> </el-table-column>
          <el-table-column prop="date" label="商品参数" width="180">
          </el-table-column>

          <el-table-column prop="date" label="操作" width="180">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="静态参数" name="second">
        <el-button type="primary" disabled>添加静态参数</el-button>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="#" width="180"> </el-table-column>
          <el-table-column prop="date" label="属性名" width="180">
          </el-table-column>
          <el-table-column prop="date" label="属性值" width="180">
          </el-table-column>

          <el-table-column prop="date" label="操作" width="180">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "params",
  data() {
    return {
      value: [],
      options: [],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    getCategories(){
      this.$request.getCategories({
        type:1
      }).then(res=>{
        if(res.data.meta.status==200){
          this.data=res.data.data;
        }
      });
    }
  },
};
</script>

<style lang="less" scoped>

#params{
    .breadcrumb{
        height:50px;
        line-height: 50px;
    }
    .warning-info{
        margin-top:20px;
        margin-bottom:20px;
    }
.select-wrapper{
    .select-title{
        h2{
            height:40px;
            line-height:40px;
        }
    }
}
}
</style>