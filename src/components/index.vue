<template>
  <el-container class="index-container">
    <el-header class="index-header">
      <el-row>
        <el-col :span="8"
          ><div class="grid-content bg-purple logo">
            <img src="../assets/logo.png" alt="" /></div
        ></el-col>
        <el-col :span="8"
          ><div class="grid-content bg-purple-light title">
            电子商务后台管理系统
          </div></el-col
        >
        <el-col :span="8"
          ><div class="grid-content bg-purple btn-wrapper">
<<<<<<< HEAD
            <el-button type="warning" @click="logout">退出</el-button>
=======
            <el-button type="warning">警告按钮</el-button>
>>>>>>> 7b954a5d5bd4257962c01869ada31193ed841b8d
          </div></el-col
        >
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="index-aside">
        <el-row class="tac index-aside">
          <el-col :span="24" class="index-aside">
            <el-menu router unique-opened
              default-active="2"
              class="el-menu-vertical-demo nav-list"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-submenu index="1">
                <template slot="title" class="title"
                  ><i class="el-icon-location"></i
                  ><span>用户管理</span></template
                >
                <el-menu-item-group>
                  <el-menu-item index="/users"
                    ><i class="el-icon-menu"></i
                    ><span slot="title">用户列表</span></el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title" class="title"
                  ><i class="el-icon-location"></i
                  ><span>权限管理</span></template
                >
                <el-menu-item-group>
                  <el-menu-item index="/roles"
                    ><i class="el-icon-menu"></i
                    ><span slot="title">角色列表</span>
                    </el-menu-item>
                    <el-menu-item index="/rights"
                    ><i class="el-icon-menu"></i
                    ><span slot="title">权限列表</span>
                    </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title" class="title"
                  ><i class="el-icon-location"></i><span>商品管理</span></template>
                <el-menu-item-group>
                  <el-menu-item index="/goods"><i class="el-icon-menu"></i><span slot="title">商品列表</span></el-menu-item>
                  <el-menu-item index="/params"><i class="el-icon-menu"></i><span slot="title">分类参数</span></el-menu-item>
                  <el-menu-item index="/category"><i class="el-icon-menu"></i><span slot="title">商品分类</span></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title" class="title"><i class="el-icon-location"></i><span>订单管理</span></template>
                <el-menu-item-group>
                  <el-menu-item index="/orders"><i class="el-icon-menu"></i><span slot="title">订单列表</span></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title" class="title"><i class="el-icon-location"></i><span>数据统计</span></template>
                <el-menu-item-group>
                  <el-menu-item index="/data"><i class="el-icon-menu"></i><span slot="title">数据报表</span></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main class="index-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
<<<<<<< HEAD
    logout(){
      window.sessionStorage.removeItem("token");
    }
  },
  beforeCreated(){
    if(!window.sessionStorage.getItem("token")){
      this.$router.push("login");
    }
  },
  
=======
  },
>>>>>>> 7b954a5d5bd4257962c01869ada31193ed841b8d
};
</script>

<style lang="less" scoped>
.index-container {
  height: 100%;
  .index-header {
    .logo {
      img {
        width: 50px;
        height: 54px;
        display: block;
        margin: auto;
      }
    }
    .title {
      line-height: 54px;
      text-align: center;
    }
    .btn-wrapper {
      line-height: 54px;
      text-align: right;
    }
  }

  .index-aside {
    height: 100%;
    .nav-list {
      height: 100%;
    }
  }
}
</style>