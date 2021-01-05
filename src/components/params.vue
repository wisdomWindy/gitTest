<template>
  <div id="params">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>
    <el-alert
      title="注意：只允许为第三级分类设置相关参数"
      type="warning"
      class="el-icon-warning warning-info"
    >
    </el-alert>
    <el-row class="select-wrapper">
      <el-col :span="5" class="select-title">
        <h2>请选择商品分类：</h2>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple-dark">
          <el-cascader
            :options="options"
            :props="{
              expandTrigger: 'hover',
              label: 'cat_name',
              value: 'cat_id',
            }"
            v-model="value"
            @change="handleChange"
          >
            <!-- <template slot-scope="{ node, data }">
              <span>{{ data.cat_name }}</span>
              <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
            </template> -->
          </el-cascader>
        </div>
      </el-col>
    </el-row>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="动态参数" name="many">
        <el-button type="primary" disabled>添加动态参数</el-button>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="#" width="auto">
          </el-table-column>
          <el-table-column prop="attr_name" label="属性名" width="auto">
          </el-table-column>
          <el-table-column prop="attr_vals" label="属性值" width="auto">
          </el-table-column>

          <el-table-column prop="date" label="操作" width="auto">
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
      </el-tab-pane>
      <el-tab-pane label="静态参数" name="only">
        <el-button type="primary" disabled>添加静态参数</el-button>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="#" width="auto">
          </el-table-column>
          <el-table-column prop="attr_name" label="属性名" width="auto">
          </el-table-column>
          <el-table-column prop="attr_vals" label="属性值" width="auto">
          </el-table-column>
          <el-table-column label="操作" width="auto">
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
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="编辑参数" :visible.sync="editFormVisible">
          <el-form :model="editParamForm">
            <el-form-item label="属性名" :label-width="formLabelWidth" width="100%">
              <el-input
                v-model="editParamForm.attr_name"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="属性值" :label-width="formLabelWidth">
              <el-input
                v-model="editParamForm.attr_vals"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="editFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleConfirmEdit"
              >确 定</el-button
            >
          </div>
        </el-dialog>
  </div>
</template>

<script>
export default {
  name: "params",
  data() {
    return {
      /* 与级联新选择器双向绑定获取选定的数据 */
      value: [],
      options: [],
      activeName: "many",
      tableData: [],
      sel: "many",
      cat_id: "",
      attr_id: "",
      editFormVisible: false,
      formLabelWidth: "120px",
      editParamForm: {
        attr_name: "",
        attr_vals: "",
      },
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
      this.sel = tab.name;
      this.getParams(this.value[this.value.length - 1], {
        sel: this.sel,
      });
    },
    handleChange(value) {
      console.log(value);
      this.value = value;
      this.getParams(this.value[this.value.length - 1], {
        sel: this.sel,
      });
    },
     /* 删除参数 */
    handleDelete(index,row){
      this.$request.deleteParams(row.cat_id,row.attr_id).then(res=>{
        if(res.data.meta.status==200){
          this.$message.success("删除成功");
        }
      });
    },
    /* 编辑参数 */
    handleEdit(index, row) {
      this.editFormVisible = true;
      this.editParamForm.attr_name = row.attr_name;
      this.editParamForm.attr_vals = row.attr_vals;
      this.cat_id = row.cat_id;
      this.attr_id = row.attr_id;
    },
    /* 确认编辑 */
    handleConfirmEdit() {
      this.editFormVisible = false;
      this.$request
        .editParam(this.cat_id, this.attr_id, this.editParamForm)
        .then((res) => {
          if (res.data.meta.status == 200) {
            this.$message.succes("修改成功");
          }
        });
    },
    /* 获取分类 */
    getCategories() {
      this.$request
        .getCategories({
          type: [1, 2, 3],
        })
        .then((res) => {
          if (res.data.meta.status == 200) {
            console.log(res);
            this.options = res.data.data;
          }
        });
    },
    /* 获取参数 */
    getParams(id, params) {
      this.$request.getParams(id, params).then((res) => {
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
};
</script>

<style lang="less" scoped>
#params {
  .breadcrumb {
    height: 50px;
    line-height: 50px;
  }
  .warning-info {
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