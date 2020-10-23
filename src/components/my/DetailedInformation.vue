<template>
    <div>
        <div class="title">详细信息</div>
        <div v-if="!isEdit" style="text-align: center;padding: 0.2rem;margin-bottom: 0.4rem;">
            <img class="touxiang" src="../../assets/img/touxiang.jpg" alt="">
        </div>
        <div v-if="isEdit" style="text-align: center;padding: 0.2rem;margin-bottom: 0.4rem;">
            <van-uploader :after-read="afterRead"><img class="touxiang" src="../../assets/img/touxiang.jpg" alt=""></van-uploader>
            
        </div>
        <div class="space-between item">
            <span>账号:</span>
            <div>
                <span>姓名</span>
            </div>
        </div>
        <div class="space-between item">
            <span>手机号:</span>
            <div style="width: 70%;text-align: right;">
                <span v-if="!isEdit">18355463749</span>
                <input v-if="isEdit" style="height: 0.6rem;width: 100%;" type="text" placeholder="18355463749">
            </div>
        </div>
        <div class="space-between item">
            <span>邮箱:</span>
            <div style="width: 70%;text-align: right;">
                <span v-if="!isEdit">mayun@mingsoftage.com</span>
                <input v-if="isEdit" style="height: 0.6rem;width: 100%;" type="text" placeholder="mayun@mingsoftage.com">
            </div>
        </div>
        <div class="space-between item">
            <span>组织级别:</span>
            <div>
                <span>营销中心总部</span>
            </div>
        </div>
        <div class="space-between item">
            <span>所属组织:</span>
            <div>
                <span>北京铭软云视科技有限公司</span>
            </div>
        </div>
        <van-button v-if="!isEdit" style="width:100%;margin-top:1rem;" type="info" @click="isEdit = true;">修改</van-button>
        <van-button v-if="isEdit" style="width:100%;margin-top:1rem;" type="info" @click="submit">确定</van-button>
    </div>
</template>
<script>
import { Button,Uploader } from 'vant';
export default {
    name:'DetailedInformation',
    components:{
        [Button.name]:Button,
        [Uploader.name]:Uploader,
    },
    data() {
        return {
            isEdit:false,
        }
    },
    methods: {
        submit() {
            this.isEdit = false;
        },
         afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },
    },
}
</script>
<style scoped>
    .title{
        font-size: 0.4rem;
        font-weight: 600;
        border-left: 0.1rem solid #888;
        padding: 0 0.2rem;
        margin: 0 0.2rem;
    }
    .touxiang{
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 0.75rem;
    }
    .item {
        padding: 0 0.2rem;
    }
</style>