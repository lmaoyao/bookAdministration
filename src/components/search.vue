<template>
    <div>

        <router-view></router-view>
    </div>
</template>

<script>
    import sousuo from "../comment/sousuo"
    import xq from "../comment/xiangqing"
    export default {
        name: "search",
        components:{
            sousuo,
            xq
        },
        data(){
            return{
                flags:true
            }
        },
        methods:{
            gg(flage){
                this.flags = flage
            }
        }
    }
</script>

<style scoped lang="less">

</style>