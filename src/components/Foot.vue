<template>
    <div class="foot-box space-around">
        <span :class="{'select':index===1}" @click="goHome">数据</span>
        <span :class="{'select':index===2}" @click="goGarden">开园</span>
        <span :class="{'select':index===3}" @click="goBusiness">商业</span>
        <span :class="{'select':index===4}" @click="goMy">我的</span>
    </div>
</template>
<script>
export default {
    name:"Foot",
    data() {
        return {
           index:1 
        }
    },
    methods: {
        goHome() {
            this.index = 1;
            this.$router.push({
                name: "Home",
            });
        },
        goGarden() {
            this.index = 2;
           this.$router.push({
                name: "Garden",
            }); 
        },
        goBusiness() {
            this.index = 3;
           this.$router.push({
                name: "Business",
            }); 
        },
        goMy() {
            this.index = 4;
           this.$router.push({
                name: "My",
            }); 
        },

    },
}
</script>
<style>
.foot-box{
    position:fixed;
    bottom:0;
    left :0;
    width :100%;
    display:flex;
    background: #eee;
    height: 1rem;
}
.foot-box span {
    font-size: 0.4rem;
}
.select {
    font-weight: 600;
}
</style>