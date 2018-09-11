<template>
    <div>
       <label for="">{{label}}</label>
       <input type="text" v-bind="$attrs"> 
    </div>
</template>
<script>
    export default {
        name: 'BaseInput',
        props: ['label'],
        data(){
            return {}
        }
    }
</script>
