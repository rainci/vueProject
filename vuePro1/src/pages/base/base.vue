<template>
    <div>
        <!-- 第一行注释和第二行效果一样 -->
        <!-- <ButtonEmit v-on:pass="showFather" :val="inputText" @input="shuru"></ButtonEmit> -->
        <ButtonEmit v-on:pass="showFather" v-model="inputText" :val="inputText"></ButtonEmit>
        {{inputText}}
    </div>
</template>
<script>
    import ButtonEmit from './buttonEmit.vue'
    export default {
        name: 'Base',
        components: {
            ButtonEmit    
        },
        data(){
            return {
                inputText:'child input'
            }
        },
        methods: {
            showFather(event){
                alert(`father click ${event} times`)
            },
            shuru(event){
                this.inputText = event;
            }
        }
    }
</script>