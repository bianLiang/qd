<template>
    <div>
        <div style="padding: 0 0.2rem;">
            <div class="space-between">
                <span>今日新采集园所记录</span>
                <span @click="isNewEidt=!isNewEidt" style="background: #eee;padding: 0.1rem 0.2rem;">{{isNewEidt? '查看':'编辑'}}</span>
            </div>
            <div class="item-box">
                <div style="height: 1rem;" class="space-between">
                    <span>园所名称:</span>
                    <span v-if="!isNewEidt">{{newParkName}}</span>
                    <input v-if="isNewEidt" style="height: 0.5rem;" v-model="newParkName" type="text" placeholder="输入园所名称">
                </div>
                <div style="height: 1rem;" class="space-between">
                    <span>园长联系方式:</span>
                    <span v-if="!isNewEidt">{{newPhone}}</span>
                    <input v-if="isNewEidt" style="height: 0.5rem;" v-model="newPhone" type="text" placeholder="输入园长联系方式">
                </div>
                <div style="height: 1rem;" class="space-between">
                    <span>园所地址:</span>
                    <span v-if="!isNewEidt">{{newAddress}}</span>
                    <input v-if="isNewEidt" style="height: 0.5rem;" v-model="newAddress" type="text" placeholder="输入园所地址">
                </div>
                <div style="height: 1rem;" class="space-between">
                    <span>备注:</span>
                    <span v-if="!isNewEidt">{{newRemarks}}</span>
                    <input v-if="isNewEidt" style="height: 0.5rem;" v-model="newRemarks" type="text" placeholder="输入备注">
                </div>
            </div>
        </div>
        <div style="padding: 0 0.2rem;">
            <div class="space-between">
                <span>历史采集园所记录</span>
                <span @click="isHistoryEidt=!isHistoryEidt" style="background: #eee;padding: 0.1rem 0.2rem;">{{isHistoryEidt? '查看':'编辑'}}</span>
            </div>
            <div class="item-box">
                <div style="height: 1rem;" class="space-between">
                    <span>园所名称:</span>
                    <span v-if="!isHistoryEidt">{{historyParkName}}</span>
                    <input v-if="isHistoryEidt" style="height: 0.5rem;" v-model="historyParkName" type="text" placeholder="输入园所名称">
                </div>
                <div style="height: 1rem;" class="space-between">
                    <span>园长联系方式:</span>
                    <span v-if="!isHistoryEidt">{{historyPhone}}</span>
                    <input v-if="isHistoryEidt" style="height: 0.5rem;" v-model="historyPhone" type="text" placeholder="输入园长联系方式">
                </div>
                <div style="height: 1rem;" class="space-between">
                    <span>园所地址:</span>
                    <span v-if="!isHistoryEidt">{{historyAddress}}</span>
                    <input v-if="isHistoryEidt" style="height: 0.5rem;" v-model="historyAddress" type="text" placeholder="输入园所地址">
                </div>
                <div style="height: 1rem;" class="space-between">
                    <span>备注:</span>
                    <span v-if="!isHistoryEidt">{{historyRemarks}}</span>
                    <input v-if="isHistoryEidt" style="height: 0.5rem;" v-model="historyRemarks" type="text" placeholder="输入备注">
                </div>
            </div>
        </div>
        <div style="padding: 0 0.2rem;">
            <div class="space-between">
                <span>今日达成合作园所记录</span>
                <span @click="isReachEidt=!isReachEidt" style="background: #eee;padding: 0.1rem 0.2rem;">{{isHistoryEidt? '查看':'编辑'}}</span>
            </div>
            <div class="item-box">
                <div style="height: 1rem;" class="space-between">
                    <span>园所名称:</span>
                    <span v-if="!isReachEidt">{{reachParkName}}</span>
                    <input v-if="isReachEidt" style="height: 0.5rem;" v-model="reachParkName" type="text" placeholder="输入园所名称">
                </div>
                <div style="height: 1rem;" class="space-between">
                    <span>园长联系方式:</span>
                    <span v-if="!isReachEidt">{{reachPhone}}</span>
                    <input v-if="isReachEidt" style="height: 0.5rem;" v-model="reachPhone" type="text" placeholder="输入园长联系方式">
                </div>
                <div style="height: 1rem;" class="space-between">
                    <span>园所地址:</span>
                    <span v-if="!isReachEidt">{{reachAddress}}</span>
                    <input v-if="isReachEidt" style="height: 0.5rem;" v-model="reachAddress" type="text" placeholder="输入园所地址">
                </div>
                <div style="height: 1rem;" class="space-between">
                    <span>合作类型:</span>
                    <span v-if="!isReachEidt">{{reachStye}}</span>
                    <input v-if="isReachEidt" style="height: 0.5rem;" v-model="reachStye" type="text" placeholder="输入合作类型">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ParkData",
    data() {
        return {
            isNewEidt:false,
            newParkName:'',
            newPhone:'',
            newAddress:'',
            newRemarks:'',
            isHistoryEidt:false,
            historyParkName:'',
            historyPhone:'',
            historyAddress:'',
            historyRemarks:'',
            isReachEidt:false,
            reachParkName:'',
            reachPhone:'',
            reachAddress:'',
            reachStye:''
        }
    },
}
</script>
<style scoped>
.item-box {
    border: 0.01rem solid #eee;
    padding: 0.2rem;
    margin: 0.2rem 0;
}
</style>