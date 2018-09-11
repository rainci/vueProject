<template>
    <li>{{item.id}}-{{item.text}}
        <span>{{newItem}}</span>
    </li>
</template>
<script>
    // 父组件通过prop传递值，子组件通过props接收值
    export default {
        name: 'Item',
        props: ['item'],
        data() {
            return {
            }
        },
        computed: {
            newItem(){
                 this.item['child'] = true
                 return this.item;
            }
        }
    }
</script>
