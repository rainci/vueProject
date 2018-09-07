<template>
    <div>
        <button v-on:click="$emit('pass',count++)">$emit向父组件传递事件</button>
        <input 
            type="text"
           :value="val"
            @input="$emit('input',$event.target.value)"
        >
    </div>
    
</template>
<script>
    export default {
        name: 'ButtonEmit',
        props: ['val'],
        data(){
            return {
                count: 0

            }
        }
    }
</script>