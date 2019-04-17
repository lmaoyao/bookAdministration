<template>
        <div class="box">
            <ul class="box-ul">
                <li>
                    <label for="bookName">书的名称</label>
                    <Input v-model="book.bookName" placeholder="书名" clearable style="width: 30%" id="bookName" />
                </li>
                <li>
                    <label for="address">书的作者</label>
                    <Input v-model="book.address" placeholder="作者" clearable style="width: 30%" id="address" />
                </li>
                <li>
                    <label for="bookInfo">书的信息</label>
                    <Input v-model="book.bookInfo" type="textarea" :autosize="{minRows: 2,maxRows: 5}" id="bookInfo" style="max-width: 30%;" placeholder="图书的信息"/>
                </li>
                <li>
                    <label for="bookCore">书的封面</label>
                    <Input v-model="book.bookCover" type="textarea" :autosize="true" placeholder="图片地址" id="bookCore" style="width: 30%" />
                </li>
                <li>
                    <label for="bookPrice">书的价格</label>
                    <Input v-model.number="book.bookPrice" prefix="logo-usd" style="width: 120px" id="bookPrice" />
                </li>

                <li>
                    <Button type="primary" @click="this.add">确定</Button>
                </li>
            </ul>
        </div>

</template>

<script>
    import {addBook} from "../api/index"
    export default {
        name: "add",
        data(){
            return{
                book:{},
            }
        },
        methods:{
            async add(){
                   await addBook(this.book);
                   this.$router.push("/search/sous")
            }
        }
    }
</script>

<style scoped lang="less">
.box{
    background: blanchedalmond;
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