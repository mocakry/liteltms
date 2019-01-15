import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  /*base: process.env.BASE_URL,*/
  routes: [
    /*设置---网点*/
    {
      path:'/branchList',
      name:'BranchList',
      component:()=>import('./views/setting/branches/BranchList')
    },
    /*设置---账号*/
    {
      path:'/accountList',
      name:'AccountList',
      component:()=>import('./views/setting/account/AccountList')
    }
  ]
})
