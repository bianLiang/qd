<template>
    <div>
        <div style="padding: 0.2rem;">
            <div>主题</div>
            <div class="space-between" style="margin: 0.2rem 0;">
                <span @click="themeIndex = index" :class="{'select':themeIndex === index}" v-for="(item,index) in theme" :key="index" class="theme-item">{{item}}</span>
            </div>
        </div>
        <div style="padding: 0.2rem;margin: 0.2rem 0;">
            <div>方式</div>
            <div class="space-between" style="margin: 0.2rem 0;">
                <span  @click="modeIndex = index" :class="{'select':modeIndex === index}" v-for="(item,index) in mode" :key="index" class="theme-item">{{item}}</span>
            </div>
        </div>
        <div style="padding:0 0.2rem;margin: 0.2rem 0;">
            <div class="space-between" style="margin: 0.2rem 0;" @click="onShowTime('startTime')">
                <span>开始时间</span>
                <span>
                    {{startTime?startTime:'请选择'}}
                    <van-icon name="arrow" />
                </span>
            </div>
            <div class="space-between" style="margin: 0.2rem 0;" @click="onShowTime('endTime')">
                <span>结束时间</span>
                <span>
                    {{endTime?endTime:'请选择'}}
                    <van-icon name="arrow" />
                </span>
            </div>
        </div>
        <div style="padding:0 0.2rem;margin:0.5rem 0;">
            <div>小结</div>
            <van-field
            v-model="summary"
            rows="1"
            autosize
            type="textarea"
            placeholder="请输入小结"
            />
        </div>
        <div style="padding:0 0.2rem;margin:0.5rem 0;">
            <div style="margin: 0.2rem 0;">上传图片</div>
            <van-uploader v-model="fileList" multiple />
        </div>
        <div class="foot-btn" @click="submit">
            确定
        </div>
        
        <van-popup v-model="showTime" position="bottom" :style="{ height: '50%' }">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                title="选择年月日"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="onConfirm"
                />
        </van-popup>
    </div>
</template>
<script>
import { Icon,DatetimePicker,Popup,Field,Uploader } from 'vant'
export default {
    name:"Serve",
    components:{
        [Icon.name]:Icon,
        [DatetimePicker.name]:DatetimePicker,
        [Popup.name]:Popup,
        [Field.name]:Field,
        [Uploader.name]:Uploader,
    },
    data() {
        return {
             minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            themeIndex:null,
            theme:['洽谈','施工','售后服务','其他'],
            modeIndex:null,
            mode:['入园','电话','微信','其他'],
            startTime:"",
            endTime:"",
            showTime:false,
            identification:'',
            summary:'',
            fileList:[]
        }
    },
    methods: {
        onShowTime(name) {
            this.currentDate = new Date();
            this.identification = name;
            this.showTime = true;
        },
        onConfirm(value) {
            this[this.identification] = this.getTime(value);
            this.showTime = false;
        },
        getTime(value) {
            const myDate = new Date(value);
            let year = myDate.getFullYear();
            let month = (myDate.getMonth() + 1)<10 ? '0'+(myDate.getMonth() + 1): (myDate.getMonth() + 1);
            let data = myDate.getDate()<10? '0' + myDate.getDate() : myDate.getDate();
            return year + '-' + month + '-' + data;
        },
        submit() {
            this.$router.push({
                name: "My"
            });
        }
    },
}
</script>
<style scoped>
    .theme-item {
        width: 1.5rem;
        display: inline-block;
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
        border: 0.01rem solid #888;
        border-radius: 0.2rem;
        padding: 0.1rem;
    }
    .foot-btn {
        position: fixed;
        background: #1989fa;
        width: 90%;
        bottom: 0.2rem;
        color: #fff;
        height: 0.7rem;
        text-align: center;
        line-height: 0.7rem;
        border-radius: 0.1rem;
        left: 50%;
        margin-left: -45%;
    }
    .select {
        background: #888;
        color: #fff;
    }
</style>