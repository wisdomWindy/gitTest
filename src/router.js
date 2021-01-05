/* 导入 vue */
import Vue from "vue";
/* 导入 vur-router */
import VueRouter from "vue-router";
/* 导入组件 */
import index from "./components/index.vue";
import login from "./components/login.vue";
import users from "./components/users.vue";
import roles from "./components/roles.vue";
import rights from "./components/rights.vue";
import goods from "./components/goods.vue";
import params from "./components/params.vue";
import category from "./components/category.vue";
import orders from "./components/orders.vue";
import data from "./components/data.vue";
/* 注册vue-router */
Vue.use(VueRouter);
/* 创建路由规则 */
const routes = [{
    path: "/",
    component: index,
    children: [{
        path: "users",
        component: users
    }, {
        path: "roles",
        component: roles
    }, {
        path: "rights",
        component: rights
    }, {
        path: "goods",
        component: goods
    }, {
        path: "params",
        component: params
    }, {
        path: "category",
        component: category
    }, {
        path: "orders",
        component: orders
    }, {
        path: "data",
        component: data
    }, {
        path: "/",
        redirect: "/users"
    }]
}, {
    path: "/login",
    component: login
}];
/* 创建router实例 */
const router = new VueRouter({
    routes
});
/* 暴露router实例对象 */
export default router;