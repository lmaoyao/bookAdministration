<template>
    <div class="box">
        <Input search enter-button placeholder="请输入姓名..." />
        <ul class="aa">
            <router-link v-for="item in hotbooks" :key="item.bookId" class="bb" :to="{name:'xiq',params:{bid:item.bookId}}" tag="li">
                <Card style="width:320px">
                    <div style="text-align:center">
                        <h3>{{item.bookName}}</h3>
                        <img :src="item.bookCover">
                        <span class="info">{{item.bookInfo}}</span>
                        <br>
                        <span class="price">{{item.bookPrice}}</span>
                        <Button type="error" ghost @click="remove(item.bookId)" style="z-index: 999;display: block;margin: auto">删除</Button>
                    </div>
                </Card>
            </router-link>
        </ul>
    </div>
</template>
<script>
    import {getBook,removeBook} from "../api/index"
    export default {
        data(){
            return{
                hotbooks:[],
                flags : false
            }
        },
        created(){
          this.getbooks();
        },
        methods:{
           async getbooks(){
                let res = await getBook();
                this.hotbooks = res
           },
            async remove(id){
               await removeBook(id);//删除某一项
                //要删除前台的数据
                this.hotbooks = this.hotbooks.filter(item=>{
                   return  item.bookId !== id;
                })
            },
            flage(){
               this.$emit("flage",this.flags)
            }
        }
    }
</script>
<style scoped lang="less">
.ivu-card-bordered{
    width: 200px;
    height: 360px;
    text-align: center;
}
.box{
    background-color: lightgrey;

    .aa{
        margin: 10px 0;
        height: 400px;
        overflow: auto;

        .bb{
            float: left;
            padding: 20px 30px;
            position: relative;
            .info{
                display: block;
                width: 290px;
                height: 40px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: pre-line;
            }
        }
    }
    .aa::-webkit-scrollbar{
         display: none;
     }
}
    img{
        width: 200px;

    }

</style>