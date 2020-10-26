<template>
    <div>
        <div @click="showModify=true" class="space-between" style="margin: 0.2rem 0;background: #eee;padding: 0.3rem 0.2rem">
            <span>修改登录密码</span>
            <van-icon name="arrow" />
        </div>
        <div @click="goMy" class="space-between" style="margin: 0.2rem 0;background: #eee;padding: 0.3rem 0.2rem">
            <span>注销账号</span>
            <van-icon name="arrow" />
        </div>
        <van-popup v-model="showModify" position="bottom" :style="{ height: '30%' }" >
            <div>
                <van-form @submit="onSubmit">
                    <van-field
                        v-model="password"
                        type="password"
                        name="新密码"
                        label="新密码"
                        placeholder="新密码"
                        :rules="[{ required: true, message: '请填写新密码' }]"
                    />
                    <div style="position: fixed;width: 98%;bottom: 0.2rem;left: 50%;margin-left: -49%;">
                        <van-button round block type="info" native-type="submit">
                        确定
                        </van-button>
                    </div>
                </van-form>
            </div>
        </van-popup>
    </div>
</template>
<script>
import { Icon,Popup,Field,Button,Form } from 'vant';
export default {
    name:"PersonalSettings",
    components:{
        [Icon.name]:Icon,
        [Popup.name]:Popup,
        [Field.name]:Field,
        [Button.name]:Button,
        [Form.name]:Form,
    },
    data() {
        return {
            showModify:false,
            password:''
        }
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
            this.showModify = false;
        },
        goMy() {
            this.$router.push({
                name: "My"
            });
        },
    },
}
</script>