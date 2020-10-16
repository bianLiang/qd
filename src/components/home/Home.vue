<template>
    <div>
        <div class="search-box space-around">
            <span @click="goScreen" style="font-size:0.3rem;">筛选</span>
            <van-search
                style="width:85%;"
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
            >
                <template #action>
                    <div @click="onSearch">搜索</div>
                </template>
            </van-search>
        </div> 
        <div @click="goNewDetails" class="added">
            <div class="title">今日新增</div>
            <div class="content space-between">
                <span>代理商:2位(东部战区)</span>
                <span>园所:10所(东部战区)</span>
            </div>
        </div>
        <div @click="goAreaDetails" v-for="(item,index) in list" :key="index" style="margin:0.2rem 0;" class="added">
            <div class="title">{{item.title}}</div>
            <div class="content space-between">
                <span>分子公司:{{item.subsidiary}}家</span>
                <span>大区:{{item.area}}个</span>
            </div>
            <div class="content space-between">
                <span>区域经理:{{item.manager}}位</span>
                <span>代理商:{{item.manager}}位</span>
            </div>
            <div class="content space-between">
                <span>园所:{{item.garden}}所</span>
                <span>当月总营收:{{item.revenue}}万</span>
            </div>
        </div>
    </div>
</template>
<script>
import { Search } from 'vant';
export default {
    name:'Home',
    components:{
        [Search.name]:Search
    },
    data() {
        return {
            value:'',
            list:[
                {
                    title:"东部战区",
                    subsidiary:1,
                    area:2,
                    manager:3,
                    agent:4,
                    garden:5,
                    revenue:1000
                },
                {
                    title:"西部战区",
                    subsidiary:1,
                    area:2,
                    manager:3,
                    agent:4,
                    garden:5,
                    revenue:1000
                },
            ]
        }
    },
    methods: {
        onSearch() {},
        goNewDetails() {
            const data = {
                title:'今日新增',
            }
            this.$router.push({
                name: "NewDetails",
                query: {
                    data: data
                }
            }); 
        },
        goAreaDetails() {
            const data = {
                title:'中部战区',
            }
            this.$router.push({
                name: "AreaDetails",
                 query: {
                    data: data
                }
            }); 
        },
        goScreen() {
            this.$router.push({
                name: "Screen"
            }); 
        }
    },
}
</script>
<style>
    .title{
        font-weight: 600;
    }
    .content{
        line-height: 0.8rem;
    }
    .content span{
        display: inline-block;
        width: 3.5rem;
    }
    .added {
        background: #f8f8f8;
        padding: 0.2rem;
    }
</style>