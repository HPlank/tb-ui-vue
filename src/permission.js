import router from '@/router'
import store from '@/store'

// 白名单
const whileList = ['/login']

/**
 * 路由前置守卫
 * @param {*} to  要到那里去
 * @param {*} from  你从哪里来
 * @param {*} next  是否要去
 */
router.beforeEach((to, from, next) => {
  // 用户以登陆，不允许进入login
  // 用户未登陆，只允许进入login
  if (store.getters.token) {
    // 用户以登陆，不允许进入login
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 用户未登陆，只允许进入login
    if (whileList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
