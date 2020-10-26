<template>
    <div>
        <div style="line-height: 0.6rem;padding: 0.2rem;border-bottom: 0.01rem solid #eee;">
            <div class="space-between">
                <span>上级领导:<span style="font-weight: 600;">北京铭软云视科技有限公司</span></span>
                <span style="font-weight: 600;">(顶级)</span>
            </div>
            <div class="space-between">
                <span>当前层级:<span style="font-weight: 600;">营销中心总部</span></span>
                <span style="font-weight: 600;">(一级)</span>
            </div>
        </div>
        <div style="padding: 0.2rem;">
            <div>下级组织:</div>
            <div>
                <van-collapse v-model="activeNames">
                        <van-collapse-item style="font-weight: 600;" title="战区 (二级)" name="1">
                            <div style="background: #eee;padding: 0.2rem 0.4rem;">
                                <div class="space-between">
                                    <span>东部战区</span>
                                    <span style="border: 0.01rem solid;padding: 0.1rem;border-radius: 0.1rem;" @click="onShow">调整</span>
                                </div>
                            </div>
                        </van-collapse-item>
                        <van-collapse-item style="font-weight: 600;" title="大区与分子公司 (三级)" name="2">内容</van-collapse-item>
                        <van-collapse-item style="font-weight: 600;" title="区域经理 (四级)" name="3">内容</van-collapse-item>
                        <van-collapse-item style="font-weight: 600;" title="加盟商与城市合伙人 (五级)" name="4">内容</van-collapse-item>
                </van-collapse>
            </div>
        </div>
        <van-popup v-model="show" position="bottom" :style="{ height: '70%' }">
            <div>
                <div style="padding: 0.2rem;text-align: center;">调整至上级</div>
                <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
                <div style="padding: 0.2rem;text-align: center;margin-top: 1rem;">调整至下级</div>
                <van-dropdown-menu>
                <van-dropdown-item v-model="value2" :options="option2" />
                </van-dropdown-menu>
            </div>
        </van-popup>
    </div>
</template>
<script>
import { Collapse, CollapseItem,Popup,DropdownMenu,DropdownItem } from 'vant';
export default {
    name:'Framework',
    components:{
        [Collapse.name]:Collapse,
        [CollapseItem.name]:CollapseItem,
        [Popup.name]:Popup,
        [DropdownMenu.name]:DropdownMenu,
        [DropdownItem.name]:DropdownItem,
    },
    data() {
        return {
            activeNames: [],
            show:false,
            value1: 0,
            option1: [
                { text: '营销中心总部', value: 0 },
                { text: '战区', value: 1 },
                { text: '大区与分子公司', value: 2 },

            ],
            value2: 0,
            option2: [
                { text: '加盟商与城市合伙人', value: 0 },
            ],
        }
    },
    methods: {
        onShow() {
            this.show = true;
        }
    },
}
</script>
<style>
.title {
    font-weight: 600;
}
</style>