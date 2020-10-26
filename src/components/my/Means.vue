<template>
    <div>
        <div @click="goMeansDetails" v-for="(item,index) in noticeList" :key="index" style="padding: 0.2rem;background: #f8f8f8;margin: 0.2rem 0;">
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
    name:"Means",
    data() {
        return {
            noticeList:[
                {
                    type:'资料',
                    title:'关于合作园所视频收费新政策施行通知',
                    time:'2020-06-01'
                },
                {
                    type:'资料',
                    title:'城市合伙人项目',
                    time:'2020-06-02'
                },

            ]
        }
    },
    methods: {
        goMeansDetails() {
             this.$router.push({
                name: "MeansDetails"
            });
        }
    },
}
</script>