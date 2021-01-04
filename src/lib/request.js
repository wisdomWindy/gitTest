<<<<<<< HEAD
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
            params,
            headers: {
                Authorization: window.sessionStorage.getItem("token")
            }
        });
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
export default {
    install(Vue) {
        Vue.prototype.$request = request;
    }
<<<<<<< HEAD
};
=======
}
>>>>>>> 7b954a5d5bd4257962c01869ada31193ed841b8d
