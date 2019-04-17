import Vue from "vue";
import Vuex from "vuex"
import  * as actions from "./actions"
import * as getters from "./getters"
import * as  mutations from "./mustations"
import state from "./state"
import  createLogger from "vuex/dist/logger"
Vue.use(Vuex);
const  debug = process.env.NODE_ENV !="production"
const store = new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    strict:debug,
    plugins:debug?[createLogger()]:[]
});
export default store
