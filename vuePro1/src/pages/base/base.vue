<template>
    <div>
        <!-- 第一行注释和第二行效果一样 -->
        <!-- <ButtonEmit v-on:pass="showFather" :val="inputText" @input="shuru"></ButtonEmit> -->
        <!--  <ButtonEmit v-bind="post"></ButtonEmit> 等价于<ButtonEmit v-bind:id="post.id" v-bind:title="post.title"></ButtonEmit> -->
        <ButtonEmit v-on:pass="showFather" v-model="inputText" :val="inputText" v-bind="post"></ButtonEmit>
        {{inputText}}
        <BaseInput class="username-input" :label="label" placeholder="Enter your username"></BaseInput> 
        <!-- 当我们用一个对象同时设置多个 prop 的时候，也可以将这个 .sync 修饰符和 v-bind 配合使用这样会把 doc 对象中的每一个属性 (如 title) 都作为一个独立的 prop 传进去，然后各自添加用于更新的 v-on 监听器 -->
        <BaseInput v-bind.sync="post"></BaseInput>     
    </div>
</template>
<script>
    import ButtonEmit from './buttonEmit.vue'
    import BaseInput from './baseInput.vue'
    export default {
        name: 'Base',
        components: {
            ButtonEmit,
            BaseInput    
        },
        data(){
            return {
                inputText:'child input',
                post: {id: 1,title: 'My Journey with Vue',label:'name:'},
                label:'name:'
            }
        },
        methods: {
            showFather (event) {
                alert(`father click ${event} times`)
            },
            shuru (event) {
                this.inputText = event;
            }
        }
    }
</script>