<template>
    <div>
        <div class="box">
            <div class="title">东部战区</div>
            <van-collapse v-model="activeNames">
            <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
            </van-collapse>
        </div>
    </div>
</template>
<script>
import { Collapse, CollapseItem } from 'vant';
export default {
    name:"AreaDetails",
    components:{
        [Collapse.name]:Collapse,
        [CollapseItem.name]:CollapseItem
    },
    data() {
        return {
             activeNames: [],
        }
    },
}
</script>
<style scoped>
.box{
    padding: 0.2rem;
}
.title{
        font-weight: 600;
    }
</style>