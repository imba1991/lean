import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import note from '@/components/note'
import vip from '@/components/vip'
import xiezuo from '@/components/xiezuo'
import down from '@/components/down'
import child from '@/components/child'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {path:'/note',component:note},
    {path:'/vip',component:vip},
    {path:'/xiezuo',component:xiezuo},
    {path:'/down',component:down},
    {path:'/child',component:child}
  ]
})
