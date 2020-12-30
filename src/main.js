/* 导入vue */
import Vue from 'vue';
/* 导入 顶级组件*/
import App from './App.vue';
/* 导入 router 组件 */
import router from "./router";
/* 导入element-ui */
import ElementUI from "element-ui";
/* 导入element-ui中的样式 */
import "element-ui/lib/theme-chalk/index.css";
/* 注册element-ui */
Vue.use(ElementUI);
/* 设置禁止生产环境下的提示信息 */
Vue.config.productionTip = false
    /* 创建vue实例 */
new Vue({
    router,
    render: h => h(App),
}).$mount("#app")