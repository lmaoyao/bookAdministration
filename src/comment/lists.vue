<template>
    <div>
        <Table border :columns="columns7" :data="data6"></Table>
    </div>
</template>
<script>
    import {getList} from "../api/index"
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '书名',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '价格',
                        key: 'Price'
                    },
                    {
                        title: '作者',
                        key: 'address'
                    },
                    {
                        title: '选择',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6:[],
            }
        },
        created(){
            this.kk();
        },
        computed:{
          bid(){
              return this.data6.id
          }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: `${this.data6[index].name}`,
                    content: `<div>
作者：${this.data6[index].address}<br>时间：${this.data6[index].time}<br>出版商：${this.data6[index].Publisher  }<br>商品编码:${this.data6[index].code}
</div>`
                })
            },

            remove (index) {
                this.data6.splice(index, 1);
            },
           async kk() {
               let res = await getList();
               this.data6 = res
           }
        }
    }
</script>
