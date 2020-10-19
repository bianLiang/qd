<template>
    <div>
        <div class="search-box space-around">
            <span @click="goScreen" style="font-size:0.3rem;">筛选</span>
            <van-search
                style="width:85%;"
                v-model="value"
                show-action
                placeholder="搜索园所名称/园长姓名"
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
            <div style="padding: 0.2rem;" class="area-list">
                <div>
                    <div>日照市东港区小星星幼儿园</div>
                    <div class="space-between content">
                        <span>园所规模：200儿童</span>
                        <span>开通时间：2020-05-01</span>
                    </div>
                    <div class="space-between content">
                        <span>园长：马园长</span>
                        <span>代理商：李四</span>
                    </div>
                </div>
                <div>
                    <div>视频缴费</div>
                    <div class="space-between content">
                        <span>设备数：18台</span>
                        <span>家长账号总付费数：160个</span>
                    </div>
                    <div>当月家长账号付费率：60% （96/160）</div>
                    <div>当月营收：1500元 （家长当月付费）</div>
                    <div>闸机付费</div>
                    <div>设备：双通道单摆门 （人脸识别+刷卡）</div>
                    <div class="space-between content">
                        <span>总添加人脸：100张</span>
                        <span>当月添加人脸：20张</span>
                    </div>
                    <div class="space-between content">
                        <span>总售出门禁卡：100张</span>
                        <span>当月售出门禁卡：20张</span>
                    </div>
                    <div>当月营收：1200元 （当月添加人脸+当月售出门禁卡）</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Search } from 'vant';
export default {
    name:"Kindergarten",
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
            gardenList:[]
        }
    },
     mounted() {
        const data = this.$route.query.data;
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
                name: "ScreenGarten"
            }); 
        }
    },
}
</script>
<style scoped>
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