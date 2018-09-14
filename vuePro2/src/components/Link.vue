<template>
    <li>
        <a :href="href" @click="onLink" :class="{active : isActive}" :id="context.id"> 
            <slot></slot>
        </a>
    </li>
</template>
<script>
    import router from '../router'
    export default {
        name: 'Link',
        props: ['href','context'],
        computed: {
            isActive(){
                return this.href === this.$root.currentRouter
            }
        },
        methods: {
            onLink(event){
                event.preventDefault();
                this.$root.currentRouter = this.href;
                this.$emit('go',event) //点击导航后，向父元素传递事件，此处为父元素调用导航每一项，点击时的回调函数。
                // pushState方法不会触发页面刷新，只是导致history对象发生变化，地址栏会有反应。
                //如果pushState的url参数，设置了一个新的锚点值（即hash），并不会触发hashchange事件。(因为根本就没有跳到这个页面上，只是在地址栏里修改了url)
                //pushState想要插入一个跨域的网址，导致报错。这样设计的目的是，防止恶意代码让用户以为他们是在另一个网站上
                window.history.pushState(
                    null, //state参数 一个与指定网址相关的状态对象，popstate事件触发时，该对象会传入回调函数。如果不需要这个对象，此处可以填null。
                    null, //title参数 新页面的标题，但是所有浏览器目前都忽略这个值，因此这里可以填null。
                    this.href //url参数 新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址
                )    
            }
        }
    }
</script>
<style scoped>
.active {color:red}
</style>

