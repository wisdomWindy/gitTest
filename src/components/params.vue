<template>
  <div id="params">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>
<<<<<<< HEAD
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
=======
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
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
<<<<<<< HEAD
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
=======
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
  </div>
</template>

<script>
export default {
  name: "params",
  data() {
    return {
<<<<<<< HEAD
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
=======
      value: [],
<<<<<<< HEAD
      options: [],
=======
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
<<<<<<< HEAD
    getCategories(){
      this.$request.getCategories({
        type:1
      }).then(res=>{
        if(res.data.meta.status==200){
          this.data=res.data.data;
        }
      });
    }
=======
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
  },
};
</script>

<style lang="less" scoped>
<<<<<<< HEAD
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
=======

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
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
}
</style>