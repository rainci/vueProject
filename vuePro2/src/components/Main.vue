<template>
    <div class="container">
        <!-- <ul>
            <Link v-for="itme in nav" :href="item.url"></Link>
        </ul> -->
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import Link from '@/components/Link.vue'
    export default {
        name: 'Main',
        data(){
            return {
                nav: [
                    {name: 'home page',url:'/'},
                    {name: 'about page',url:'/about'},
                ]
            }
        },
        components:{
            Link
        }
    }
</script>
<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>