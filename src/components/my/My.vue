<template>
    <div>
        <div v-if="!isLogin" class="login">
            <van-button type="info" @click="goLogin">登录</van-button>
        </div>
        <div v-if="isLogin" class="space-between head">
            <img class="touxiang" src="../../assets/img/touxiang.jpg" alt="">
            <div style="width: 70%;">
                <div class="space-between" style="margin-bottom:0.2rem;">
                    <span>姓名</span>
                    <span @click="goDetailedInformation" class="center">详细信息<van-icon name="arrow" /></span>
                </div>
                <div>幼视通营销中心总部</div>
            </div>
        </div>
        <div>
            <div class="space-between itme" @click="isShowDaily=true">
                <span>工作日报</span>
                <van-icon name="arrow" />
            </div>
            <div class="space-between itme" @click="goNotice">
                <span>通知公告</span>
                <van-icon name="arrow" />
            </div>
            <div class="space-between itme" @click="goPolicy">
                <span>合作政策</span>
                <van-icon name="arrow" />
            </div>
            <div class="space-between itme" @click="goMeans">
                <span>资料</span>
                <van-icon name="arrow" />
            </div>
            <div class="space-between itme" @click="goFramework">
                <span>组织架构</span>
                <van-icon name="arrow" />
            </div>
            <div class="space-between itme" @click="goPersonalSettings">
                <span>个人设置</span>
                <van-icon name="arrow" />
            </div>
        </div>
        <van-popup close-on-click-overlay=true position="bottom" v-model="show" :style="{ height: '30%',width: '100%' }">
            <div class="form-box">
                <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="position: fixed;width: 98%;bottom: 0.2rem;left: 50%;margin-left: -49%;">
                    <van-button round block type="info" native-type="submit">
                    提交
                    </van-button>
                </div>
                </van-form>
            </div>
        </van-popup>
        <van-popup close-on-click-overlay=true v-model="isShowDaily">
            <div class="space-between" style="padding: 0.4rem;">
                <div class="serve" @click="goServe">服务记录</div>
                <div class="serve" @click="goParkData">园所数据</div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import { Icon,Button,Popup,Form,Field } from 'vant';
export default {
    name:"My",
    components:{
        [Icon.name]:Icon,
        [Button.name]:Button,
        [Popup.name]:Popup,
        [Form.name]:Form,
        [Field.name]:Field,
    },
    data() {
        return {
            isLogin:false,
            show:false,
            username:'',
            password:'',
            isShowDaily:false
        }
    },
    methods: {
        goLogin() {
            this.show = true;
        },
        onSubmit(values) {
            console.log('submit', values);
            this.isLogin = true;
            this.show = false;
        },
        goDetailedInformation() {
            this.$router.push({
                name: "DetailedInformation"
            });
        },
        goServe() {
            this.isShowDaily = false;
            this.$router.push({
                name: "Serve"
            });
        },
        goParkData() {
            this.isShowDaily = false;
            this.$router.push({
                name: "ParkData"
            });
        },
        goNotice() {
            this.$router.push({
                name: "Notice"
            });
        },
        goPolicy() {
            this.$router.push({
                name: "Policy"
            });
        },
        goMeans() {
            this.$router.push({
                name: "Means"
            });
        },
        goPersonalSettings() {
            this.$router.push({
                name: "PersonalSettings"
            });
        },
        goFramework() {
            this.$router.push({
                name: "Framework"
            });
        },
    },
}
</script>
<style>
    .login {
        height: 2rem;
        line-height: 2rem;
        width: 100%;
        background: #f8f8f8;
        text-align: center;
    }
    .head {
        padding: 0.3rem;
        background: #f8f8f8;
    }
    .touxiang{
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 0.75rem;
    }
    .itme {
        padding: 0.3rem;
        border-bottom: 0.01rem solid #eee;
    }
    .serve {
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        width: 2rem;
        border-radius: 0.2rem;
        background: #eee;
        margin: 0 0.2rem;
    }
</style>