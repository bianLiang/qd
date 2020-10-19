<template>
    <div class="head-box">
        <span class="icon">
            <van-icon style="margin:0 0.1rem" size=".4rem" @click="backHistory" v-if="$route.meta.isBack"  name="arrow-left" />
            <van-icon style="margin:0 0.1rem" size=".4rem" @click="goHome" v-if="$route.meta.isBack" name="cross" />
        </span>
        
        {{$route.meta.text}}
    </div>
</template>
<script>
import { Icon } from 'vant';
export default {
    name:"Head",
    data() {
        return {
            
        }
    },
    components:{
        [Icon.name]: Icon,
    },
    methods: {
        backHistory() {
            this.$router.back(); //返回上一层
        },
        goHome() {
            this.$router.push({
                name: "Home"
            }); 
        },
    },
}
</script>
<style>
    .head-box{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 1rme;
        line-height: 1rem;
        background: #eee;
        text-align: center;
    }
    .icon {
        position: absolute;
        left: 0.2rem;
    }
</style>