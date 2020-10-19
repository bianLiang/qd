<template>
    <div>
        <div style="padding: 0.2rem;">
            <div style="font-size: 0.4rem;">视频缴费</div>
            <div>家长账号总付费数</div>
            <div class="btn-box" style="width: 7rem;margin: 0 auto;">
                <span @click="onPaymentAmount(index)" v-for="(item,index) in paymentAmount" :key="index" :class="{'select':paymentAmountIndex===index}">{{item}}</span>
            </div>
            <div style="margin-left: 0.03rem;">
                <input @input="onChangeInput('1')" placeholder="自定义" v-model="amountValue1" type="text">
                <span>&nbsp;-&nbsp;</span>
                <input @input="onChangeInput('1')" placeholder="自定义" v-model="amountValue2" type="text">
            </div>
        </div>
        <div style="padding: 0.2rem;">
            <div>当月家长付费率</div>
            <div class="btn-box" style="width: 7rem;margin: 0 auto;">
                <span @click="onRate(index)" v-for="(item,index) in rate" :key="index" :class="{'select':rateIndex===index}">{{item}}</span>
            </div>
            <div style="margin-left: 0.03rem;">
                <input @input="onChangeInput('2')" placeholder="自定义" v-model="rateValue1" type="text">%
                <span>&nbsp;-&nbsp;</span>
                <input @input="onChangeInput('2')" placeholder="自定义" v-model="rateValue2" type="text">%
            </div>
        </div>
        <div style="padding: 0.2rem;">
            <div style="font-size: 0.4rem;">闸机付费</div>
            <div>门禁卡总售出数</div>
            <div class="btn-box" style="width: 7rem;margin: 0 auto;">
                <span @click="onTotalSales(index)" v-for="(item,index) in totalSales" :key="index" :class="{'select':totalSalesIndex===index}">{{item}}</span>
            </div>
            <div style="margin-left: 0.03rem;">
                <input @input="onChangeInput('3')" placeholder="自定义" v-model="totalSalesValue1" type="text">
                <span>&nbsp;-&nbsp;</span>
                <input @input="onChangeInput('3')" placeholder="自定义" v-model="totalSalesValue2" type="text">
            </div>
        </div>
        <div style="padding: 0.2rem;">
            <div>门禁卡当月售出数</div>
            <div class="btn-box" style="width: 7rem;margin: 0 auto;">
                <span @click="onSameMonth(index)" v-for="(item,index) in sameMonth" :key="index" :class="{'select':sameMonthIndex===index}">{{item}}</span>
            </div>
            <div style="margin-left: 0.03rem;">
                <input @input="onChangeInput('4')" placeholder="自定义" v-model="sameMonthValue1" type="text">
                <span>&nbsp;-&nbsp;</span>
                <input @input="onChangeInput('4')" placeholder="自定义" v-model="sameMonthValue2" type="text">
            </div>
        </div>
        <div style="padding: 0.2rem;">
            <div>总添加人脸数</div>
            <div class="btn-box" style="width: 7rem;margin: 0 auto;">
                <span @click="onTotalFace(index)" v-for="(item,index) in totalFace" :key="index" :class="{'select':totalFaceIndex===index}">{{item}}</span>
            </div>
            <div style="margin-left: 0.03rem;">
                <input @input="onChangeInput('5')" placeholder="自定义" v-model="totalFaceValue1" type="text">
                <span>&nbsp;-&nbsp;</span>
                <input @input="onChangeInput('5')" placeholder="自定义" v-model="totalFaceValue2" type="text">
            </div>
        </div>
        <div style="padding: 0.2rem;">
            <div>当月添加人脸数</div>
            <div class="btn-box" style="width: 7rem;margin: 0 auto;">
                <span @click="onSameMonthFace(index)" v-for="(item,index) in sameMonthFace" :key="index" :class="{'select':sameMonthFaceIndex===index}">{{item}}</span>
            </div>
            <div style="margin-left: 0.03rem;">
                <input @input="onChangeInput('6')" placeholder="自定义" v-model="sameMonthFaceValue1" type="text">
                <span>&nbsp;-&nbsp;</span>
                <input @input="onChangeInput('6')" placeholder="自定义" v-model="sameMonthFaceValue2" type="text">
            </div>
        </div>
        <div class="submit" @click="submit">确定</div>
    </div>
</template>
<script>
export default {
    name:"ScreenGarten",
    data() {
        return {
            amountValue1:'',
            amountValue2:'',
            paymentAmountIndex:0,
            paymentAmount:['不限','0~20','20~50','50~100','100以上','200以上'],
            rateIndex:0,
            rateValue1:'',
            rateValue2:'',
            rate:['不限','0%~20%','20%~50%','50%~80%','80%~100%'],
            totalSalesIndex:0,
            totalSalesValue1:'',
            totalSalesValue2:'',
            totalSales:['不限','0~20','20~50','50~100','100以上','200以上'],
            sameMonthIndex:0,
            sameMonthValue1:'',
            sameMonthValue2:'',
            sameMonth:['不限','0~20','20~50','50~100','100以上','200以上'],
            totalFaceIndex:0,
            totalFaceValue1:'',
            totalFaceValue2:'',
            totalFace:['不限','0~20','20~50','50~100','100以上','200以上'],
            sameMonthFaceIndex:0,
            sameMonthFaceValue1:'',
            sameMonthFaceValue2:'',
            sameMonthFace:['不限','0~20','20~50','50~100','100以上','200以上']
        }
    },
    methods: {
        onChangeInput(value) {
            if(value === '1') {
                this.paymentAmountIndex = null;
            } else if (value === '2') {
                this.rateIndex = null;
            } else if (value === '3') {
                this.totalSalesIndex = null;
            } else if (value === '4') {
                this.sameMonthIndex = null;
            } else if (value === '5') {
                this.totalFaceIndex = null;
            } else if (value === '6') {
                this.sameMonthFaceIndex = null;
            }
        },
        onPaymentAmount(index) {
            this.paymentAmountIndex = index;
        },
        onRate(index) {
            this.rateIndex = index;
        },
        onTotalSales(index) {
            this.totalSalesIndex = index;
        },
        onSameMonth(index) {
            this.sameMonthIndex = index;
        },
        onTotalFace(index) {
            this.totalFaceIndex = index;
        },
        onSameMonthFace(index) {
            this.sameMonthFaceIndex = index;
        },
        submit() {
            console.log(this.amountValue1)
            const data = {
                amountValue1:this.amountValue1
            };
            this.$router.push({
                name: "Kindergarten",
                query: {
                    data: data
                }
            }); 
        }
    },
}
</script>
<style scoped>
.btn-box span {
    display: inline-block;
    padding: 0.2rem;
    text-align: center;
    border-radius: 0.1rem;
    border: 0.01rem solid #888;
    margin:0.1rem 0;
    margin-right: 0.39rem;
    width: 1.5rem;
}
.select {
    background: #f8f8f8;
}
input {
    width: 1.82rem;
    height: 0.75rem;
    border-radius: 0.1rem;
    border: 0.01rem solid #888;
    text-align: center;
}
.submit {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background: #f8f8f8;
    border-radius: 0.2rem;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
}
</style>