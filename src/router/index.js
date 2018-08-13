import Vue from 'vue'
import Router from 'vue-router'
import userCenter from '@/components/user-center/user-center'
import recommend from '@/components/recommend/recommend'
import singer from '@/components/singer/singer'
import rank from '@/components/rank/rank'
import search from '@/components/search/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: recommend
    },
    {
      path: '/user',
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
