<template>
    <div>
        <div style="border-bottom:0.01rem solid #f8f8f8;padding:0.2rem 0;">
            <div style="padding:0 0.2rem;border-left: 0.1rem solid #888;width: 90%;margin: 0 auto;">基础信息</div>
        </div>
        <div>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="schoolname"
                    name="学校名称"
                    label="学校名称"
                    placeholder="输入学校名称"
                    :rules="[{ required: true, message: '请填写学校名称' }]"
                />
                <van-field
                    readonly
                    clickable
                    name="area"
                    :value="value"
                    label="地区选择"
                    placeholder="点击选择省市区"
                    @click="showArea = true"
                    />
                 <van-field
                    v-model="address"
                    name="详细地址"
                    label="详细地址"
                    placeholder="请输入详细地址"
                    :rules="[{ required: true, message: '请填写详细地址' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                    提交
                    </van-button>
                </div>
            </van-form>
        </div>
        <van-popup v-model="showArea" position="bottom">
            <van-area
                :area-list="areaList"
                @confirm="onConfirm"
                @cancel="showArea = false"
            />
        </van-popup>
    </div>
</template>
<script>
import { Form,Button,Field,Popup,Area  } from 'vant';
import areaList from '../../assets/js/area';
export default {
    name:'Garden',
    components:{
        [Form.name]:Form,
        [Button.name]:Button,
        [Field.name]:Field,
        [Popup.name]:Popup,
        [Area.name]:Area,
    },
    data() {
        return {
            schoolname:'',
            value: '',
            showArea: false,
            areaList: areaList,
            address:''
        }
    },
    methods: {
        onConfirm(values) {
            this.value = values
                .filter((item) => !!item)
                .map((item) => item.name)
                .join('/');
            this.showArea = false;
        },
        onSubmit(values) {
        console.log('submit', values);
        },

    },
}
</script>