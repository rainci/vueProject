<template>
    <el-main>
        <ol>
            <Item
                v-for=" i in list"
                :key="i.id"
                :item= "i"
            ></Item>    
        </ol>
        <div class="test-two">
            <slot name="two"></slot>
        </div>
        <div class="test-one">
            <slot name="one"></slot>
        </div>
        <div>
            <slot age="18"></slot> 
            <slot :date="datass[0].date"></slot> 
            <slot :address="datass[1].address"></slot> 
        </div>
        <el-table :data="datass">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
    </el-main>
</template>
<script>
    import Item from '../components/item.vue'
    export default {
        name: 'List',
        props: ['datass'],
        components: {
            Item
        },
        data() {
            return {
                list: [
                    { id: 1, text: '蔬菜' },
                    { id: 2, text: '奶酪' },
                    { id: 3, text: '随便其它什么人吃的东西' }
                ]
            }
        }
    }
</script>
