<template>
    <div class="box">
        <div @click="isStartTime  = true" class="item space-between">
            <span>开始时间</span>
            <div class="space-between">
                <span style='margin-right: 0.2rem;'>{{startTime}}</span>
                <van-icon name="arrow" />
            </div>
        </div>
        <div @click="isEndTime  = true;" class="item space-between">
            <span>结束时间</span>
            <div class="space-between">
                <span style='margin-right: 0.2rem;'>{{endTime}}</span>
                <van-icon name="arrow" />
            </div>
        </div>
        <div @click="isProvince = true" class="item space-between">
            <span>地区</span>
            <div class="space-between">
                <span style='margin-right: 0.2rem;'>{{province}}</span>
                <van-icon name="arrow" />
            </div>
        </div>
        <!-- <div @click="isCity = true" class="item space-between">
            <span>市</span>
            <div class="space-between">
                <span style='margin-right: 0.2rem;'>{{city}}</span>
                <van-icon name="arrow" />
            </div>
        </div>
        <div @click="isCounty= true" class="item space-between">
            <span>县</span>
            <div class="space-between">
                <span style='margin-right: 0.2rem;'>{{county}}</span>
                <van-icon name="arrow" />
            </div>
        </div> -->
        <div @click="isSource=true" class="item space-between">
            <span>园所来源</span>
            <div class="space-between">
                <span style='margin-right: 0.2rem;'>{{source}}</span>
                <van-icon name="arrow" />
            </div>
        </div>
        <div class="submit" @click="submit">确定</div>
        
        <van-popup v-model="isStartTime" position="bottom" :style="{ height: '40%' }">
            <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
            @cancel="isStartTime=false"
            @confirm="confirmStartTime"
            />
        </van-popup>
        <van-popup v-model="isEndTime" position="bottom" :style="{ height: '40%' }">
            <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
            @cancel="isEndTime=false"
            @confirm="confirmEndTime"
            />
        </van-popup>
        <van-popup v-model="isProvince" position="bottom" :style="{ height: '40%' }">
            <!-- <van-picker
            title="省"
            show-toolbar
            :columns="provinceColumns"
            @confirm="onConfirmProvince"
            @cancel="isProvince=false"
            /> -->
             <van-area
                :area-list="provinceColumns"
                @confirm="onConfirmProvince"
                @cancel="isProvince = false"
                :columns-num="columnsNum"
            >
                <template #title>
                    <span class="btn" @click="onCityBtn" :class="{'select-btn': isCityBtn}">显示市</span>
                    <span class="btn" @click="onCountyBtn" :class="{'select-btn': isCountyBtn}">显示县</span>
                </template>
            </van-area>
        </van-popup>
        <van-popup v-model="isCity" position="bottom" :style="{ height: '40%' }">
            <van-picker
            title="市"
            show-toolbar
            :columns="cityColumns"
            @confirm="onConfirmCity"
            @cancel="isCity=false"
            />
        </van-popup>
        <van-popup v-model="isCounty" position="bottom" :style="{ height: '40%' }">
            <van-picker
            title="区"
            show-toolbar
            :columns="countyColumns"
            @confirm="onConfirmCounty"
            @cancel="isCounty=false"
            />
        </van-popup>
        <van-popup v-model="isSource" position="bottom" :style="{ height: '40%' }">
            <van-picker
            title="园所来源"
            show-toolbar
            :columns="sourceColumns"
            @confirm="onConfirmSource"
            @cancel="isSource=false"
            />
        </van-popup>
    </div>
    
</template>
<script>
import { Icon } from 'vant';
import { DatetimePicker,Popup,Picker,Area  } from 'vant';
import areaList from "../../assets/js/area";
export default {
    name:'Screen',
    components:{
        [Icon.name]: Icon,
        [DatetimePicker.name]: DatetimePicker,
        [Popup.name]: Popup,
        [Picker.name]: Picker,
        [Area.name]: Area,
    },
    data() {
        return {
            columnsNum:1,
            isCityBtn:false,
            isCountyBtn:false,
            maxDate:new Date(),
            minDate:new Date(2000, 0, 1),
            currentDate:new Date(2000, 0, 1),
            isStartTime:false,
            startTime:'请选择',
            isEndTime:false,
            endTime:'请选择',
            isProvince:false,
            province:'请选择',
            provinceColumns: areaList,
            isCity:false,
            cityColumns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
            city:'请选择',
            isCounty:false,
            countyColumns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
            county:'请选择',
            isSource:false,
            sourceColumns: ['线下', '线上'],
            source:'请选择',
        }
    },
    methods: {
        onCityBtn() {
            this.isCityBtn = !this.isCityBtn;
            if (this.isCityBtn) {
                this.columnsNum = 2;
            } else {
                this.columnsNum = 1;
                this.isCountyBtn = false;
            }
        },
        onCountyBtn() {
            this.isCountyBtn = !this.isCountyBtn;
            if (this.isCountyBtn) {
                this.columnsNum = 3;
            } else {
                this.columnsNum = 2;
            }
        },
        formatTime(data){
             const d = new Date(data);
            const month = (d.getMonth() + 1)<10? '0'+ (d.getMonth() + 1): (d.getMonth() + 1);
            const t = d.getDate()<10? '0' + d.getDate():d.getDate()
            return d.getFullYear() + '-' + month + '-' + t;
        },
        confirmStartTime() {
            this.startTime=this.formatTime(this.currentDate);
            this.isStartTime = false;
        },
        confirmEndTime() {
            this.endTime=this.formatTime(this.currentDate);
            this.isEndTime = false;
            
        },
        onConfirmProvince(values) {
            this.province = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
            this.isProvince = false;
        },
        onConfirmCity(value) {
            this.city = value;
            this.isCity = false;
        },
        onConfirmCounty(value) {
            this.county = value;
            this.isCounty = false;
        },
        onConfirmSource(value) {
            this.source = value;
            this.isSource = false;
        },
        submit() {
            const data = {
                startTime:this.startTime==='请选择'? '':this.startTime,
                endTime:this.endTime==='请选择'? '':this.endTime,
                province:this.province==='请选择'? '':this.province,
                city:this.city==='请选择'? '':this.city,
                county:this.county==='请选择'? '':this.county,
                source:this.source==='请选择'? '':this.source
            }
            this.$router.push({
                name: "Search",
                query: {
                    data: data
                }
            }); 
        }


    },
}
</script>
<style>
.box{
    padding: 0 0.2rem;
}
.item {
    border-bottom: 0.01rem solid #f8f8f8;
    height: 1rem;
}
.submit {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background: #f8f8f8;
    border-radius: 0.2rem;
    margin-top: 1rem;
}
.btn {
    border: 0.01rem solid #888;
    padding: 0.1rem;
    border-radius: 0.1rem;
}
.select-btn {
    background: #576b95;
    color: #fff;
}
</style>