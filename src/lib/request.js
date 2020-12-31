import axios from "axios";
const request = {
    getUsers() {
        console.log("users");
    }
}
export default {
    install(Vue) {
        Vue.prototype.$request = request;
    }
}