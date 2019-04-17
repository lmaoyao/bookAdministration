<template>
    <div>
        <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请发表你的评论..." />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value8: ''
            }
        }
    }
</script>
