<template>
    <li>{{item.text}}</li>
</template>
<script>
    export default {
        name: 'Item',
        props: ['item'],
        data() {
            return {
                aa: { id: 0, text: '蔬菜' }
            }
        }
    }
</script>
