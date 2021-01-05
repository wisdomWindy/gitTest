<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
/*
 * @description: 
 * @version: 
 * @Author: 
 * @Date: 2021-01-02 10:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-02 17:45:50
 */
/* 导入 axios */
import axios from "axios";
/* 设置基地址*/
axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
axios.defaults.headers.Authorization = window.sessionStorage.getItem("token");
/* 设置token */
/* axios.interceptors.request.use(function(config) {
    if (window.sessionStorage.getItem("token")) {
        config.headers.Authorization = window.sessionStorage.getItem("token");
    }
}); */
<<<<<<< HEAD
=======
=======
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
/* 创建请求方法对象 */
const request = {
    login(params) {
        return axios.post("login", params);
    },
    getUsers(params) {
        return axios.get("users", {
            params,
            headers: {
                Authorization: window.sessionStorage.getItem("token")
            }
        });
    },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
    fixStatus(params) {
        console.log(params)
        console.log(window.sessionStorage.getItem("token"))
        return axios.put("users/" + params.uId + "/state/" + params.type, {
            headers: {
                Authorization: window.sessionStorage.getItem("token")
            }
        });
    },
    addUser(params) {
        /*  axios.interceptors.request.use(function(config) {
             console.log(config);
         }); */
        return axios.post("users", params, {
            headers: {
                Authorization: window.sessionStorage.getItem("token")
            }

        });
    },
    deleteUser(params) {
        return axios.delete("users/" + params.id, {
            headers: {
                Authorization: window.sessionStorage.getItem("token")
            }
        });
    },
    editUser(params, id) {
        return axios.put("users/" + id, params);
    },
    searchUser(params) {
        console.log(params);
        return axios.get("users/" + params.id, {
<<<<<<< HEAD
=======
=======
    fixStatus(params, id, type) {
        return axios.put("users/:uId/state/:type", params);
    },
    addUser(params) {
        return axios.post("users", params);
    },
    deleteUser(params) {
        return axios.delete("users/:id", params);
    },
    searchUser(params) {
        return axios.get("users/:id", {
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
            params,
            headers: {
                Authorization: window.sessionStorage.getItem("token")
            }
        });
<<<<<<< HEAD
    },
    /* 角色列表 */
    roleList() {
        return axios.get("roles");
    },
    /* 通过id获取角色 */
    getRoleById(id) {
        return axios.get("roles/" + id);
    },
    /* 编辑用户 */
    editRole(id, params) {
        return axios.put("users/" + id + "role", params);
    },
    /* 编辑角色提交 */
    editRoleById(id, params) {
        return axios.put("roles/" + id, params);
    },
    /* 添加角色 */
    addRole(params) {
        return axios.post("roles", params);
    },
    /* 树形权限 */
    roleAll(type) {
        return axios.get("rights/" + type);
    },
    /* 角色授权 */
    authorization(roleId, params) {
        return axios.post("roles/" + roleId + "/rights", params);
    },
    /* 删除角色 */
    deleteRold(id) {
        return axios.delete("roles/" + id);
    },
    /* 获取商品分类 */
    getCategories(params) {
        return axios.get("categories", { params });
    },
    /* 获取商品列表 */
    getGoods(params) {
        return axios.get("goods", { params });
    },
    /* 获取单个商品 */
    getGoodsById(id) {
        return axios.get("goods/" + id);
    },
    /* 编辑提交商品 */
    editGoods(id, params) {
        return axios.put("goods/" + id, params);
    },
    /* 删除商品 */
    deleteGoodsById(id) {
        return axios.delete("goods/" + id);
    },
    /* 添加商品 */
    addGoods(params) {
        return axios.post("goods", params);
    },
    /* 获取静态和动态参数 */
    getParams(id, params) {
        return axios.get("categories/" + id + "/attributes", { params });
    },
    /* 编辑提交参数 */
    editParam(id, attrId, params) {
        return axios.put("categories/" + id + "/attributes/" + attrId, params);
    },
    /* 删除参数 */
    deleteParams(id, attrId) {
        return axios.delete("categories/" + id + "/attributes/" + attrId);
    },
    /* 编辑商品分类 */
    editCategory(id, params) {
        return axios.put("categories/" + id, params);
    },
    /* 删除商品分类 */
    deleteCategory(id) {
        return axios.delete("categories/" + id);
    },
    /* 添加商品分类 */
    addCategory(params) {
        return axios.post("categories", params);
    },
    /* 获取订单 */
    getOrders(params) {
        return axios.get("orders", { params });
    },
    /* 修改订单状态 */
    editOrder(id, params) {
        return axios.put("orders/" + id, params);
    },
    /* 请求省市区列表 */
    getCities() {
        return axios.get("https://vyps.api.storeapi.net/api/104/239?appid=4804", {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
    },
    /* 获取数据统计 */
    getData() {
        return axios.get("reports");
    }
};
/* 暴露请求方法对象 */
=======
<<<<<<< HEAD
    },
    roleList() {
        return axios.get("roles");
    },
    editRole(id, params) {
        return axios.put("users/" + id + "role", params);
    },
    roleAll(type) {
        return axios.get("rights/" + type);
    },
    authorization(roleId, params) {
        return axios.post("roles/" + roleId + "/rights", params);
    },
    deleteRold(id) {
        return axios.delete("roles/" + id);
    },
    getCategories(params) {
        return axios.get("categories", { params });
    },
    getGoods(params) {
        return axios.get("goods", { params });
    },
    getGoodsById(id) {
        return axios.get("goods/" + id);
    },
    deleteGoodsById(id) {
        return axios.delete("goods/" + id);
    },
};
/* 暴露请求方法对象 */
=======
    }
};
/* 暴露请求方法对象 */
=======
import axios from "axios";
const request = {
    getUsers() {
        console.log("users");
    }
}
>>>>>>> 7b954a5d5bd4257962c01869ada31193ed841b8d
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
export default {
    install(Vue) {
        Vue.prototype.$request = request;
    }
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
}
>>>>>>> 7b954a5d5bd4257962c01869ada31193ed841b8d
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
>>>>>>> 46a552920bfb8c6ad228c9dd1802477cdfa4ba64
