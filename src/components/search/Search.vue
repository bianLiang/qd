<template>
    <div>
        <div class="search-box space-around">
            <span @click="goScreen" style="font-size:0.3rem;">筛选</span>
            <van-search
                style="width:85%;"
                v-model="value"
                show-action
                placeholder="按地区搜索"
                @search="onSearch"
            >
                <template #action>
                    <div @click="onSearch">搜索</div>
                </template>
            </van-search>
        </div>
        <div class="data-box">
            <div class="space-between term">
                <span>{{startTime}}至{{endTime}}</span>
                <span>{{province}}{{city}}{{county}}</span>
            </div>
            <div class="term">
                <div class="space-between content">
                    <span>所属战区：东部战区</span>
                    <span>所属分子公司或大区：</span>
                </div>
                <div class="space-between content">
                    <span>区域经理：张三</span>
                    <span>代理商：李四</span>
                </div>
            </div>
            <div class="term">
                <div>该地区5月份营收：10万元</div>
                <div class="space-between content">
                    <span>视频缴费：4万元</span>
                    <span>闸机销售：2万元（利润3千）</span>
                </div>
                <div class="space-between content">
                    <span>闸机卡销售：1万元</span>
                    <span>晨检机器人：1万元</span>
                </div>
                <div class="space-between content">
                    <span>广告机销售：1万元</span>
                    <span>分班播报机销售：1万元</span>
                </div>
            </div>
            <div>
                <div>合作园所共计：100所</div>
                <div class="space-between content">
                    <span>视频园：30家</span>
                    <span>闸机园：40家</span>
                </div>
                <div class="space-between content">
                    <span>硬件园：20家</span>
                    <span>普通园：10家</span>
                </div>
                <div class="space-between content">
                    <span>缴费园：20家</span>
                    <span>其他园：15家</span>
                </div>
            </div>
        </div>
        <div class="region-data-box">
            <div v-for="(item,index) in areaList" :key="index" class="space-between area-list">
                <div style="width: 20%;">东港区</div>
                <div style="border-left: 0.01rem solid #555;width: 70%;padding: 0.2rem;">
                    <div>合作园所共计：350所</div>
                    <div class="space-between content">
                        <span @click="goKindergarten">视频园：100家</span>
                        <span>闸机园：200家</span>
                    </div>
                    <div class="space-between content">
                        <span>硬件园：100家</span>
                        <span>普通园：30家</span>
                    </div>
                    <div class="space-between content">
                        <span>缴费园：100家</span>
                        <span>其他园：50家</span>
                    </div>
                    <div class="space-between content">
                        <span>代理商：王五</span>
                        <span>区域经理：马六</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Search } from 'vant';
export default {
    name:"Search",
    components:{
        [Search.name]:Search
    },
    data() {
        return {
            value:'',
            startTime:'',
            endTime:'',
            province:'',
            city:'',
            county:'',
            source:'',
            areaList:[
                '',
                ''
            ]
        }
    },
    mounted() {
        const data = this.$route.query.data;
        console.log(data)
        this.startTime = data.startTime;
        this.endTime = data.endTime;
        this.province = data.province;
        this.city = data.city;
        this.county = data.county;
        this.source = data.source;
    },
    methods: {
        onSearch() {},
        goScreen() {
            this.$router.push({
                name: "Screen"
            }); 
        },
        goKindergarten() {
            const data = {
                startTime:this.startTime? '':this.startTime,
                endTime:this.endTime? '':this.endTime,
                province:this.province? '':this.province,
                city:this.city? '':this.city,
                county:this.county? '':this.county,
                source:this.source? '':this.source
            }
            this.$router.push({
                name: "Kindergarten",
                query: {
                    data: data
                }
            }); 
        },
    },
}
</script>
<style>
.data-box {
    padding: 0 0.2rem;
}
.term {
    border-bottom: 0.01rem solid #f8f8f8;
    padding: 0.2rem 0;
}
.content {
    line-height: 0.5rem;
}
.content span {
    display: inline-block;
    width: 48%;
}
.area-list {
    background: #eee;
    padding: 0.2rem;
    width: 90%;
    border-radius: 0.2rem;
    margin: 0.2rem auto;
}
</style>