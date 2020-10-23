import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import AreaDetails from '../components/home/AreaDetails.vue'
import NewDetails from '../components/home/NewDetails.vue'
import Garden from '../components/garden/Garden.vue'
import Business from '../components/business/Business.vue'
import My from '../components/my/My.vue'
import DetailedInformation from '../components/my/DetailedInformation.vue'
import Serve from '../components/my/Serve.vue'
import ParkData from '../components/my/ParkData.vue'
import Notice from '../components/my/Notice.vue'
import NoticeDetails from '../components/my/NoticeDetails.vue'
import Screen from '../components/screen/Screen.vue'
import ScreenGarten from '../components/screen/ScreenGarten.vue'
import Search from '../components/search/Search.vue'
import Kindergarten from '../components/search/Kindergarten.vue'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                keepAlive: false,
                isBack: false,
                text:'数据'
            },
        },
        {
            path: '/NewDetails',
            name: 'NewDetails',
            component: NewDetails,
            meta: {
                keepAlive: false,
                isBack: true,
                text:'数据-今日新增'
            },
        },
        {
            path: '/AreaDetails',
            name: 'AreaDetails',
            component: AreaDetails,
            meta: {
                keepAlive: false,
                isBack: true,
                text:'数据-战区详情'
            },
        },
        {
            path: '/Screen',
            name: 'Screen',
            component: Screen,
            meta: {
                keepAlive: false,
                isBack: true,
                text:'筛选'
            },
        },
        {
            path: '/ScreenGarten',
            name: 'ScreenGarten',
            component: ScreenGarten,
            meta: {
                keepAlive: false,
                isBack: true,
                text:'筛选'
            },
        },
        {
            path: '/Search',
            name: 'Search',
            component: Search,
            meta: {
                keepAlive: false,
                isBack: true,
                text:'地区'
            },
        },
        {
            path: '/Kindergarten',
            name: 'Kindergarten',
            component: Kindergarten,
            meta: {
                keepAlive: false,
                isBack: true,
                text:'幼儿园信息'
            },
        },
        {
            path: '/Garden',
            name: 'Garden',
            component: Garden,
            meta: {
                keepAlive: false,
                isBack: false,
                text:'开园账号'
            },
        },
        {
            path: '/Business',
            name: 'Business',
            component: Business,
            meta: {
                keepAlive: false,
                isBack: false,
                text:'商业'
            },
        },
        {
            path: '/My',
            name: 'My',
            component: My,
            meta: {
                keepAlive: false,
                isBack: false,
                text:'我的'
            },
        },
        {
            path: '/DetailedInformation',
            name: 'DetailedInformation',
            component: DetailedInformation,
            meta: {
                keepAlive: false,
                isBack: true,
                text:'详细信息'
            },
        },
        {
            path: '/Serve',
            name: 'Serve',
            component: Serve,
            meta: {
                keepAlive: false,
                isBack: true,
                text:'服务记录'
            },
        },
        {
            path: '/ParkData',
            name: 'ParkData',
            component: ParkData,
            meta: {
                keepAlive: false,
                isBack: true,
                text:'服务记录'
            },
        },
        {
            path: '/Notice',
            name: 'Notice',
            component: Notice,
            meta: {
                keepAlive: false,
                isBack: true,
                text:'通知'
            },
        },
        {
            path: '/NoticeDetails',
            name: 'NoticeDetails',
            component: NoticeDetails,
            meta: {
                keepAlive: false,
                isBack: true,
                text:'通知详情'
            },
        },
    ]
})