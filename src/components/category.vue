<template>
  <div id="category">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
<<<<<<< HEAD
    <el-button
      type="success"
      class="success-btn"
      @click="addFormVisible = true"
      plain
      >添加分类</el-button
    >
    <el-dialog title="添加分类" :visible.sync="addFormVisible">
      <el-form :model="categoryForm">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input
            v-model="categoryForm.cat_name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="分类父级" :label-width="formLabelWidth">
          <el-cascader
              v-model="value"
              :options="tableData"
              :props="{ expandTrigger: 'hover' ,label:'cat_name',value:'cat_id'}"
              @change="handleChange"
            ></el-cascader>
         <!--  <el-select v-model="categoryForm.cat_id" placeholder="请选择父级">
            
            <el-option
              v-for="item in tableData"
              :key="item.cat_id"
              :value="item.cat_id"
              :label="item.cat_name"
            ></el-option>
          </el-select> -->
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCategory">确 定</el-button>
      </div>
    </el-dialog>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="cat_id"
      border
      default-expand-all
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="cat_name" label="分类名称" sortable width="180">
      </el-table-column>
      <el-table-column label="级别" sortable width="180">
        <template slot-scope="scope">
          {{ scope.row.cat_level + 1 + "级" }}
        </template>
      </el-table-column>
      <el-table-column prop="address" label="是否有效">
        <template slot-scope="scope">
          {{ scope.row.cat_deleted ? "无效" : "有效" }}
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
          ></el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑商品分类" :visible.sync="dialogVisible">
      <el-form :model="form">
        <el-form-item label="分类名称" label-width="120px">
          <el-input v-model="form.categoryName" autocomplete="off"></el-input>
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
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
=======
    <el-button type="success" class="success-btn" plain>添加分类</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="分类名称" prop="id"> </el-table-column>
      <el-table-column label="级别" prop="name"> </el-table-column>
      <el-table-column label="是否有效" prop="desc"> </el-table-column>
      <el-table-column label="操作" prop="desc">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
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
  name: "category",
<<<<<<< HEAD
  data() {
    return {
      tableData: [],
      currentPage: 1,
      value:[],
      pagesize: 10,
      formLabelWidth: "120px",
      dialogVisible: false,
      addFormVisible: false,
      /* 编辑分类名称表单 */
      form: {
        categoryName: "",
      },
      /* 添加分类表单 */
      categoryForm: {
        cat_name: "",
        cat_pid: "",
        cat_level: "",
      },
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(val);
     

    },
    handleCurrentChange(val) {
      console.log(val);
    },
    /* 编辑分类 */
    handleEdit(index, row) {
      this.dialogVisible = true;
      this.form.categoryName = row.cat_name;
      this.form.id = row.cat_id;
    },
    /* 删除分类 */
    handleDelete(index, row) {
      console.log(row);
      this.$request.deleteCategory(row.cat_id).then((res) => {
        if (res.data.meta.status == 200) {
          this.$message.success("删除分类成功");
        }
      });
    },
    handleChange(value){
       this.categoryForm.cat_level=value.length;
       this.categoryForm.cat_pid=value[0];
    },
    /* 添加分类 */
    addCategory() {
      this.$request.addCategory(this.categoryForm).then((res) => {
        console.log(res);
        console.log(this.categoryForm);
        if (res.data.meta.status == 201) {
          console.lgo(res);
        }
      });
      this.addFormVisible = false;
    },
    /* 确定修改 */
    handleConfirm() {
      this.$request
        .editCategory(this.form.id, {
          cat_name: this.form.categoryName,
        })
        .then((res) => {
          if (res.data.meta.status == 200) {
            this.$message.success("编辑成功");
          }
        });
      this.dialogVisible = false;
    },
    /* 获取分类列表 */
    getCategories() {
      this.$request
        .getCategories({
          type: [1, 2, 3],
        })
        .then((res) => {
          if (res.data.meta.status == 200) {
            console.log(res);
            this.tableData = res.data.data;
          }
        });
    },
  },
  created() {
    this.getCategories();
  },
=======
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
};
</script>

<style lang="less" scoped>
#category {
  .breadcrumb {
    height: 50px;
    line-height: 50px;
  }
  .success-btn {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .select-wrapper {
    .select-title {
      h2 {
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>