<template>
    <div>
        <Table border :columns="columns6" :data="data5"></Table>
    </div>
</template>
<script>
    import {getList} from "../api/index"
    import axios from "axios"
    export default {
        data () {
            return {
                columns6: [
                    {
                        title: '书名',
                        key: 'bookName'
                    },
                    {
                        title: '作者',
                        key: 'address'
                    },
                    {
                        title: '价格',
                        key: 'bookPrice',
                        filters: [
                            {
                                label: '大于50元',
                                value: 1
                            },
                            {
                                label: '小于50元',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            var bookPrice = parseInt(bookPrice);
                            if (value === 1) {
                                return row.bookPrice >50;
                            } else if (value === 2) {
                                return row.bookPrice <50;
                            }
                        }
                    },
                    {
                        title: '信息',
                        key: 'bookInfo',
                      /*  filters: [//地址
                            {
                                label: 'New York',
                                value: 'New York'
                            },
                            {
                                label: 'London',
                                value: 'London'
                            },
                            {
                                label: 'Sydney',
                                value: 'Sydney'
                            }
                        ],*/
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                    }
                ],
                data5: [
                   /* {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }*/
                ],
            }
        },
        created(){
          this.kk()
        },
        methods:{
            async kk() {
                let res = await getList();
                console.log(res,"dd");
                this.data5 = res
            },
            /*kk(){
             axios.get("../mock/books.json").then((result)=>{
                   let ff = result.data
                 console.log("sss",ff);
             })
            }*/
        }
    }
</script>
