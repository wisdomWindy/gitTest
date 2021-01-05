<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
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
axios.defaults.headers.Authorization = window.sessionStorage.getItem("token");
/* 设置token */
/* axios.interceptors.request.use(function(config) {
    if (window.sessionStorage.getItem("token")) {
        config.headers.Authorization = window.sessionStorage.getItem("token");
    }
}); */
=======
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
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
            params,
            headers: {
                Authorization: window.sessionStorage.getItem("token")
            }
        });
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
}
>>>>>>> 7b954a5d5bd4257962c01869ada31193ed841b8d
>>>>>>> af350ed020cbc7d98a535527571da3a1ac07d798
