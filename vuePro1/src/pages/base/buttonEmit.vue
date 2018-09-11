<template>
    <div>
        <button v-on:click="$emit('pass',count++)">$emit向父组件传递事件</button>
        <input 
            type="text"
           :value="val"
           :title="title"
           :id="id"
            @input="$emit('input',$event.target.value)"
        >
        <p>numId:{{numId}}</p>
    </div>
    
</template>
<script>
    export default {
        name: 'ButtonEmit',
        props: ['val','id','title'],
        data(){
            return {
                count: 0,
                numId: this.id

            }
        }
    }
</script>