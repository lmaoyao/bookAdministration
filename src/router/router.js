import Vue from "vue";
import VueRouter from "vue-router"
Vue.use(VueRouter);
import list from "../components/list"
import comment from "../components/comment"
import search from "../components/search"
import settings from "../components/settings"
import add from "../components/add"
// import lists from "../comment/lists"
import aa from "../comment/aa"
import sousou from "../comment/sousuo"
import xiangqing from "../comment/xiangqing"
export default new VueRouter({
    routes:[
        {
          path:"/",
          redirect:"/list/lists"
        },
        {
            path:"/list",
            name:"list",
            component:list,
            children:[
                {
                    path:"lists",
                    component:aa
                }
            ]
        },
        {
            path:"/comment",
            name:"comment",
            component:comment
        },
        {
            path:"/search",
            name:"search",
            component:search,
            children:[
                {
                    path:"sous",
                    components:{
                        default: sousou,
                        aa:xiangqing
                    },

                },
                {
                    path:"xq/:bid",
                    components:{
                        default:xiangqing,
                        aa:sousou
                    },
                    name:"xiq"
                }

            ]
        },
        {
            path:"/settings",
            name:"settings",
            component:settings
        },
        {
            path:"/add",
            component:add,
        },
        {
          path:"/xq/:id",
          component:xiangqing
        },
        {
            path:"*",
            redirect:"/list/lists"
        }
    ]
})