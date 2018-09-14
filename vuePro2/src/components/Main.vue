<template>
    <div class="container">
        <ul v-if="nav.length">
            <Link v-for="i in nav" :href="i.url" :key="i.id" @go="gogo" :context="i">{{i.name}}</Link>
        </ul>
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
                    {name: 'home page',url:'/',id:1},
                    {name: 'about page',url:'/about',id:2},
                ]
            }
        },
        components:{
            Link
        },
        methods: {
            gogo(event){
                console.log(`let us go,${event.target.id}`)
            }
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