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
            v-model="goodsSelection.query"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getGoodsById"
            ></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <el-button type="success" plain @click="addGoods">添加商品</el-button>
        </div></el-col
      >
    </el-row>
    <el-dialog title="添加商品" :visible.sync="addGoodsFormVisible">
      <el-form :model="addGoodsFormData">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input
            v-model="addGoodsFormData.goods_name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品分类" :label-width="formLabelWidth">
          <el-input
            v-model="addGoodsFormData.goods_cat"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth">
          <el-input
            v-model="addGoodsFormData.goods_price"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品数量" :label-width="formLabelWidth">
          <el-input
            v-model="addGoodsFormData.goods_number"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品重量" :label-width="formLabelWidth">
          <el-input
            v-model="addGoodsFormData.goods_weight"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品介绍" :label-width="formLabelWidth">
          <el-input
            v-model="addGoodsFormData.goods_introduction"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品图像" :label-width="formLabelWidth">
        <el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handleAddGoodsPictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!addGoodsDisabled"
          class="el-upload-list__item-delete"
          @click="handleAddGoodsDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!addGoodsDisabled"
          class="el-upload-list__item-delete"
          @click="handleAddGoodsRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
</el-upload>
<el-dialog :visible.sync="addGoodsDialogVisible">
  <img width="100%" :src="addGoodsImageUrl" alt="">
</el-dialog>
        </el-form-item>
        <el-form-item label="商品参数" :label-width="formLabelWidth">
          <el-input
            v-model="addGoodsFormData.attrs"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addGoodsFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmAddGoods"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="#" width="auto"> </el-table-column>
      <el-table-column prop="goods_name" label="商品名称" width="auto">
      </el-table-column>
      <el-table-column prop="goods_price" label="商品价格(元)" width="auto">
      </el-table-column>
      <el-table-column prop="goods_weight" label="商品重量"> </el-table-column>
      <el-table-column prop="add_time" label="创建时间" width="auto">
        <template slot-scope="scope">
          {{ scope.row.add_time | formatTime }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="auto">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
            circle
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="deleteGoods(scope.$index, scope.row)"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑商品" :visible.sync="editGoodsFormVisible">
      <el-form :model="editGoodsFormData">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input
            v-model="editGoodsFormData.goods_name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth">
          <el-input
            v-model="editGoodsFormData.goods_price"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品数量" :label-width="formLabelWidth">
          <el-input
            v-model="editGoodsFormData.goods_number"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品重量" :label-width="formLabelWidth">
          <el-input
            v-model="editGoodsFormData.goods_weight"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品介绍" :label-width="formLabelWidth">
          <el-input
            v-model="editGoodsFormData.goods_introduction"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品参数" :label-width="formLabelWidth">
          <el-input
            placeholder="参数之间用逗号隔开"
            v-model="editGoodsFormData.attrs"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品图像" :label-width="formLabelWidth">
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            :on-success="saveFile"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogFileVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editGoodsFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirmEdit">确 定</el-button>
      </div>
    </el-dialog>
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
  </div>
</template>

<script>
export default {
  name: "goods",
  data() {
    return {
      tableData: [],
      dialogImageUrl: "",
      dialogFileVisible: false,
      disabled: false,
      formLabelWidth: "120px",
      goodsSelection: {
        query: "",
        pagenum: 1,
        pagesize: 10,
      },
      editGoodsFormVisible: false,
      goodsId: "",
      /* 编辑商品的表单数据 */
      editGoodsFormData: {
        goods_name: "",
        goods_price: "",
        goods_weight: "",
        goods_introduction: "",
        pics: "",
        attrs: "",
      },
      total: 0,
      /* 添加商品 */
      addGoodsFormVisible: false,
      addGoodsFormData: {
        goods_name: "",
        goods_cat: "",
        goods_price: "",
        goods_number: "",
        goods_weight: "",
        goods_introduction: "",
        pics: "",
        attrs: "",
      },
       addGoodsImageUrl: '',
        addGoodsDialogVisible: false,
        addGoodsDisabled: false
    };
  },
  filters: {
    formatTime(val) {
      var date = new Date(val);
      return (
        date.getFullYear() +
        "-" +
        date.getMonth() +
        1 +
        "-" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds()
      );
    },
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.editGoodsFormData.pics = file.url;
      this.dialogFileVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    saveFile(response, file, fileList) {
      console.log(file);
      console.log(fileList);
    },
    handleSizeChange(val) {
      this.goodsSelection.pagesize = val;
      this.getAllGoods();
    },
    handleCurrentChange(val) {
      this.goodsSelection.pagenum = val;
      this.getAllGoods();
    },
    /* 添加商品文件上传 */
    handleAddGoodsPictureCardPreview(file){
       this.addGoodsImageUrl = file.url;
        this.addGoodsDialogVisible = true;
        this.addGoodsFormData.pics=file.url;
    },
    handleAddGoodsDownload(file){
        console.log(file);
    },
    handleAddGoodsRemove(file){
      console.log(file);
    },
    /* 编辑商品 */
    handleEdit(index, row) {
      this.editGoodsFormVisible = true;
      this.goodsId = row.goods_id;
    },
    handleConfirmEdit() {
      this.editGoodsFormVisible = false;
      this.editGoodsFormData.attrs = this.editGoodsFormData.attrs.split(",");
      this.$request
        .editGoods(this.goodsId, this.editGoodsFormData)
        .then((res) => {
          if (res.data.meta.status == 200) {
            this.$message.success("编辑成功");
          }
        });
    },
    /* 获取商品列表 */
    getAllGoods() {
      this.$request.getGoods(this.goodsSelection).then((res) => {
        if (res.data.meta.status == 200) {
          this.tableData = res.data.data.goods;
          this.total = res.data.data.total;
          console.log(res);
        }
      });
    },
    /* 通过id查询商品 */
    getGoodsById() {
      this.$request.getGoodsById(this.goodsSelection.query).then((res) => {
        if (res.data.meta.status == 200) {
          this.tableData = [];
          this.tableData.push(res.data.data);
          this.total = this.tableData.length;
          console.log(res);
          console.log(this.tableData);
        }
      });
    },
    /* 删除商品 */
    deleteGoods(index, row) {
      console.log(row.goods_id);
      this.$request.deleteGoods(row.id).then((res) => {
        if (res.data.meta.status == 200) {
          console.log(res);
          this.$message.success("删除成功");
        }
      });
    },
    /* 添加商品 */
    addGoods() {
      this.addGoodsFormVisible = true;
    },
    confirmAddGoods(){
      this.addGoodsFormVisible=false;
      this.addGoodsFormData.attrs=this.addGoodsFormData.attrs.split(",");
      this.$request.addGoods(this.addGoodsFormData).then(res=>{
        if(res.data.meta.status==200){
          this.$message.success("添加成功");
        }
      });
    }
  },
  created() {
    this.getAllGoods();
  },
};
</script>

<style lang="less" scoped>
#goods {
  .breadcrumb {
    height: 30px;
  }
}
</style>