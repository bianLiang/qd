<template>
    <div class="head-box">
        <van-icon  @click="backHistory" v-if="$route.meta.isBack"  class="icon" name="arrow-left" />
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
        top: 0.3rem;
    }
</style>