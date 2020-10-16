import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import AreaDetails from '../components/home/AreaDetails.vue'
import NewDetails from '../components/home/NewDetails.vue'
import Garden from '../components/garden/Garden.vue'
import Business from '../components/business/Business.vue'
import My from '../components/my/My.vue'
import Screen from '../components/screen/Screen.vue'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                keepAlive: true,
                isBack: false,
                text:'数据'
            },
        },
        {
            path: '/NewDetails',
            name: 'NewDetails',
            component: NewDetails,
            meta: {
                keepAlive: true,
                isBack: true,
                text:'数据-今日新增'
            },
        },
        {
            path: '/AreaDetails',
            name: 'AreaDetails',
            component: AreaDetails,
            meta: {
                keepAlive: true,
                isBack: true,
                text:'数据-战区详情'
            },
        },
        {
            path: '/Screen',
            name: 'Screen',
            component: Screen,
            meta: {
                keepAlive: true,
                isBack: true,
                text:'筛选'
            },
        },
        {
            path: '/Garden',
            name: 'Garden',
            component: Garden,
            meta: {
                keepAlive: true,
                isBack: false,
                text:'开园'
            },
        },
        {
            path: '/Business',
            name: 'Business',
            component: Business,
            meta: {
                keepAlive: true,
                isBack: false,
                text:'商业'
            },
        },
        {
            path: '/My',
            name: 'My',
            component: My,
            meta: {
                keepAlive: true,
                isBack: false,
                text:'我的'
            },
        },
    ]
})