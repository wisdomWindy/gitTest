<template>
  <div id="roles">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button @click="handleAdd">添加角色</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-row
            :span="24"
            :gutter="20"
            v-for="tag in props.row.children"
            :key="tag.id"
            class="row"
          >
            <el-col :span="4"
              ><el-tag closable type="primary">{{
                tag.authName
              }}</el-tag></el-col
            >
            <el-col :span="20">
              <el-row
                :span="24"
                :offset="4"
                v-for="item in tag.children"
                :key="item.id"
              >
                <el-col :span="4"
                  ><el-tag closable type="success">{{
                    item.authName
                  }}</el-tag></el-col
                >
                <el-col :span="20">
                  <el-row>
                    <el-tag
                      closable
                      type="warning"
                      v-for="value in item.children"
                      :key="value.id"
                      >{{ value.authName }}</el-tag
                    >
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column label="#" type="index" prop="id"> </el-table-column>
      <el-table-column label="角色名称" prop="roleName"> </el-table-column>
      <el-table-column label="角色描述" prop="roleDesc"> </el-table-column>
      <el-table-column label="操作">
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
          <el-button
            size="mini"
            type="success"
            icon="el-icon-check"
            @click="handleRole(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加角色" :visible.sync="addRoleFormVisible">
      <el-form :model="addRoleFormData">
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input
            v-model="addRoleFormData.roleName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色描述" :label-width="formLabelWidth">
          <el-input
            v-model="addRoleFormData.roleDesc"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editRoleFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirmAdd">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="编辑角色" :visible.sync="editRoleFormVisible">
      <el-form :model="editRoleFormData">
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input
            v-model="editRoleFormData.roleName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色描述" :label-width="formLabelWidth">
          <el-input
            v-model="editRoleFormData.roleDesc"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editRoleFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirmEdit">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="权限列表" :visible.sync="dialogVisible">
      <el-tree
        :data="data"
        show-checkbox
        ref="tree"
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="checkedKeys"
        :props="defaultProps"
        :default-expand-all="true"
      >
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="getKey">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "roles",
  data() {
    return {
      tableData: [],
      first: [],
      second: [],
      data: [],
      id: "",
      formLabelWidth: "120px",
      editRoleFormVisible: false,
      editRoleFormData: {
        roleName: "",
        roleDesc: "",
      },
      dialogVisible: false,
      defaultProps: {
        children: "children",
        label: "authName",
      },
      rolesId: [],
      checkedKeys: [],
      addRoleFormVisible:false,
      addRoleFormData:{
        roleName:"",
        roleDesc:""
      }
    };
  },
  methods: {
    /* 获取角色列表 */
    getRoles() {
      this.$request.roleList().then((res) => {
        if (res.data.meta.status == 200) {
          console.log(res);
          this.tableData = res.data.data;
        }
      });
    },
    /* 获取当前角色权限 */
    handleRole(index, row) {
      this.dialogVisible = true;
      this.checkedKeys = [];
      row.children.filter(function (ele) {
        this.checkedKeys.push(ele.id);
      }, this);
      this.id = row.id;
    },
    /* 获取权限列表 */
    getRolesAll() {
      this.$request.roleAll("tree").then((res) => {
        if (res.data.meta.status == 200) {
          console.log(res);
          this.$message.success("获取角色列表成功");
          this.data = res.data.data;
          console.log(this.data);
        }
      });
    },
    /* 设置权限 */
    getKey() {
      console.log(this.$refs.tree.getCheckedNodes());
      const that = this;
      this.$refs.tree.getCheckedNodes().forEach(function (ele) {
        that.rolesId.push(ele.id);
      });
      this.$request
        .authorization(this.id, { rids: this.rolesId })
        .then((res) => {
          if (res.data.meta.status == 200) {
            this.$message.success("修改权限成功");
          }
        });
      console.log(this.rolesId);
      this.dialogVisible = false;
    },
    /* 删除角色 */
    handleDelete(index, row) {
      this.$request.deleteRole(row.id).then((res) => {
        if (res.data.meta.status == 200) {
          this.$message.success("删除角色成功");
        }
      });
    },
    /* 编辑角色 */
    handleEdit(index, row) {
      this.editRoleFormVisible = true;
      this.id = row.id;
      this.editRoleFormData.roleName=row.roleName;
      this.editRoleFormData.roleDesc=row.roleDesc;
    },
    /* 确认编辑 */
    handleConfirmEdit() {
      this.editRoleFormVisible = false;
      this.$request.editRoleById(this.id, this.editRoleFormData).then((res) => {
        if (res.data.meta.status == 200) {
          console.log(res);
        }
      });
    },
    handleConfirmAdd(){
      this.addRoleFormVisible=false;
      this.$request.addRole(this.addRoleFormData).then(res=>{
        if(res.data.meta.status==200){
          this.$message.success("添加用户成功");
          this.getRoles();
        }
      });
    },
    handleAdd(){
      this.addRoleFormVisible=true;
    }
  },
  created() {
    this.getRoles();
    this.getRolesAll();
  },
};
</script>

<style lang="less" scoped>
#roles {
  .breadcrumb {
    height: 30px;
  }
  .table {
    .icon-wrapper {
      text-align: center;
    }
    .row {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>