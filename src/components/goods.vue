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
<<<<<<< HEAD
            v-model="goodsSelection.query"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search" @click="getGoodsById"></el-button>
=======
            v-model="input3"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
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
<<<<<<< HEAD
         <el-table-column  type="index" label="#" width="auto"> </el-table-column>
      <el-table-column prop="goods_name" label="商品名称" width="auto"> </el-table-column>
      <el-table-column prop="goods_price" label="商品价格(元)" width="auto"> </el-table-column>
      <el-table-column prop="goods_weight" label="商品重量"> </el-table-column>
       <el-table-column prop="add_time" label="创建时间" width="auto">
         <template slot-scope="scope">
           {{scope.row.add_time|formatTime}}
         </template>
      </el-table-column>
        <el-table-column  label="操作" width="auto">  
          <template slot-scope="scope">
             <el-button type="primary" icon="el-icon-edit" circle></el-button>  
             <el-button type="danger" icon="el-icon-delete" @click="deleteGoods(scope.$index,scope.row)" circle></el-button> 
          </template>
            </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="goodsSelection.pagenum"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="goodsSelection.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
=======
         <el-table-column prop="date" label="#" width="180"> </el-table-column>
      <el-table-column prop="date" label="商品名称" width="180"> </el-table-column>
      <el-table-column prop="name" label="商品价格(元)" width="180"> </el-table-column>
      <el-table-column prop="address" label="商品重量"> </el-table-column>
       <el-table-column prop="date" label="创建时间" width="180"> </el-table-column>
        <el-table-column prop="date" label="操作" width="180">  
             <el-button type="primary" icon="el-icon-edit" circle></el-button>  
             <el-button type="danger" icon="el-icon-delete" circle></el-button> </el-table-column>
    </el-table>
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
  </div>
</template>

<script>
export default {
  name: "goods",
<<<<<<< HEAD
  data(){
    return {
      tableData:[],
     goodsSelection:{
       query:"",
       pagenum:1,
       pagesize:10
     },
     total:0
    }
  },
  filters:{
    formatTime(val){
      var date =new Date(val);
     return date.getFullYear()+"-"+ date.getMonth()+1+"-"+ date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    }
  },
  methods:{
    handleSizeChange(val){
      this.goodsSelection.pagesize=val;
      this.getAllGoods();
    },
    handleCurrentChange(val){
     
      this.goodsSelection.pagenum=val;
      this.getAllGoods();
    },
    getAllGoods(){
      this.$request.getGoods(this.goodsSelection).then(res=>{
        
        if(res.data.meta.status==200){
          this.tableData=res.data.data.goods;
          this.total=res.data.data.total;
          console.log(res);
        }
      });
    },
    getGoodsById(){
      this.$request.getGoodsById(this.goodsSelection.query).then(res=>{
        if(res.data.meta.status==200){
          this.tableData=[];
          this.tableData.push(res.data.data);
          this.total=this.tableData.length;
          console.log(res);
          console.log(this.tableData);
        }
      });
    },
    deleteGoods(index,row){
      console.log(row.goods_id);
      this.$request.deleteGoods(row.id).then(res=>{
        if(res.data.meta.status==200){
          console.log(res);
          this.$message.success("删除成功");
        }
      });
    }
  },
  created(){
    this.getAllGoods();
  }
=======
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
};
</script>

<style lang="less" scoped>
#goods {
  .breadcrumb {
    height: 30px;
  }
}
</style>