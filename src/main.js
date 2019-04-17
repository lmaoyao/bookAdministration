import Vue from 'vue'
import App from './App.vue'
import element from "element-ui"
Vue.use(element);
import  iview from "iview"
Vue.use(iview);
Vue.config.productionTip = false;
import "iview/dist/styles/iview.css"
import router from "./router/router"
import store from "./store/index"
import Vue2OrgTree from 'vue2-org-tree';
Vue.use(Vue2OrgTree)
import "./assets/index.less"
new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app');
