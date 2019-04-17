<template>
    <div style="background: blanchedalmond">
        <div class="icon">
            <!--返回按钮-->
            <Icon type="md-arrow-round-back"  @click="go"/>
        </div>
        <div class="box">
            <ul class="box-ul">
                <li>
                    <label for="bookName">书的名称</label>
                    <Input prefix="ios-contact" style="width: 30%" id="bookName" v-model="book.bookName"/>
                </li>
                <li>
                    <label for="bookInfo">书的信息</label>
                    <Input v-model="book.bookInfo" type="textarea" :autosize="{minRows: 2,maxRows: 5}" id="bookInfo" style="max-width: 30%;"/>
                </li>
                <li>
                    <label for="bookPrice">书的价格</label>
                    <Input v-model.number="book.bookPrice" prefix="logo-usd" style="width: 120px" id="bookPrice" />
                </li>

                <li>
                    <Button type="primary" @click="update">确定</Button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {findOneBook,updateBook} from  "../api/index"
    export default {
        name: "xiangqing",
        data(){
            return{
                book:[],
            }
        },
        computed:{
            bid(){
                return this.$route.params.bid
            },
        },
        created(){
            this.getData();
        },
        methods:{
            go(){
                this.$router.go(-1)
            },
            async getData(){
                this.book = await findOneBook(this.bid)
                //如果是空对象跳到列表页
                Object.keys(this.book).length>0?void 0:this.$router.push("/")
            },
            async update(){//修改图书信息
                await updateBook(this.bid,this.book);
                this.$router.push("/search/sous")
            }
        },
        watch:{
            $route(){//只要路径变化，重新获取数据
                this.getData();
            }
        }
    }
</script>

<style scoped lang="less">
.icon{
    font-size: 30px;
    color: blue;
}
    .box{
        .box-ul{
           li{
               padding-top: 15px;
               text-align: center;
               label{
                   font-size: 20px;
                   display: block;
               }
           }
        }
    }
</style>