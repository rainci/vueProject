<template>
    <li>{{item.text}}</li>
</template>
<script>
    // 父组件通过prop传递值，子组件通过props接收值
    export default {
        name: 'Item',
        props: ['item'],
        data() {
            return {
            }
        }
    }
</script>
