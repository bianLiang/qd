<template>
    <div>
        <div @click="goPolicyDetails" v-for="(item,index) in policyList" :key="index" style="padding: 0.2rem;background: #f8f8f8;margin: 0.2rem 0;">
            <div>
                <span>【{{item.type}}】</span>
                <span>{{item.title}}</span>
            </div>
            <div style="margin: 0.2rem;">{{item.time}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Policy",
    data() {
        return {
            policyList:[
                {
                    type:'政策',
                    title:'校园缴费合作园拓展新政策',
                    time:'2020-06-01'
                },
                {
                    type:'商业',
                    title:'雏鹰金融-渠道合作政策',
                    time:'2020-06-02'
                },

            ]
        }
    },
    methods: {
        goPolicyDetails() {
             this.$router.push({
                name: "PolicyDetails"
            });
        }
    },
}
</script>