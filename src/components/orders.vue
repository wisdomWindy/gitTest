<template>
  <div id="orders">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="tableData" border style="width: 100%">
<<<<<<< HEAD
      <el-table-column type="index" label="#" width="auto"> </el-table-column>
      <el-table-column prop="order_number" label="订单编号" width="auto">
      </el-table-column>
      <el-table-column prop="order_price" label="订单价格" width="auto">
      </el-table-column>
      <el-table-column label="是否付款" width="auto">
        <template slot-scope="scope">
          <el-tag type="danger"> {{+scope.row.pay_status?"已付款":"未付款"}}</el-tag>
         
        </template>
      </el-table-column>
      <el-table-column prop="is_send" label="是否发货" width="auto"> </el-table-column>
      <el-table-column label="下单时间" width="auto">
        <template slot-scope="scope">
          {{scope.row.create_time|formatTime}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
        <el-button size="mini" icon="el-icon-edit"  type="primary" @click="handleEdit(scope.$index, scope.row)"></el-button>
      </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改订单地址" :visible.sync="dialogVisible">
  <el-form :model="form">
    <el-form-item label="省市区/县" :label-width="formLabelWidth">
      <el-cascader
    v-model="value"
    :options="options"
    :props="{ expandTrigger: 'hover' }"
    @change="handleChange"></el-cascader>
        </el-form-item>
    <el-form-item label="详细地址" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleConfirm">确 定</el-button>
  </div>
</el-dialog>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="selectData.pagenum"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="selectData.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
=======
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
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "orders",
<<<<<<< HEAD
  data() {
    return {
      tableData: [],
      formLabelWidth:"120px",
      total:0,
      value:[],
      options:[],
      dialogVisible:false,
      selectData: {
        pagesize: 10,
        pagenum: 1,
        query:""
      },
      form:{
        address:""

      }
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(val);
      this.selectData.pagesize=val;
      this.getOrders();
    },
    handleCurrentChange(val) {
      console.log(val);
      this.selectData.pagenum=val;
      this.getOrders();
    },
    handleEdit(index,row){
      console.log(row);
      this.id=row.order_id;
       this.dialogVisible = true;
    },
    handleConfirm(){
      this.dialogVisible = false;
    },
    handleChange(val){
      console.lgo(val);
    },
    getOrders() {
      this.$request.getOrders(this.selectData).then((res) => {
        if (res.data.meta.status == 200) {
          console.log(res);
          this.tableData = res.data.data.goods;
          this.total=res.data.data.total;
          this.selectData.pagenum= +res.data.data.pagenum;
          this.$message.success("获取订单成功");
        }
      });
    },
    editOrder(){
      this.$request.editOrder().then(res=>{
        if(res.data.meta.status==200){
          console.log(res);
        }
      });
    },
    getCities(){
      this.$request.getCities().then(res=>{
        console.log(res);
      })
    }
  },
  filters:{
    formatTime(val){
      const date = new Date(val);
      return date.getFullYear()+"-"+date.getMonth()+1+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    }
  },
  created() {
    this.getOrders();
    this.getCities();
  },
=======
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
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