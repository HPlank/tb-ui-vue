import { login } from '@/api/sys'
// import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN, REFRESHTOKEN } from '@/constant'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, data) {
      state.token = data.token
      setItem(TOKEN, data.token)
      setItem(REFRESHTOKEN, data.refreshToken)
    }
  },
  /**
   * 登陆请求动作
   */
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password
          // password: md5(password)
        })
          .then((data) => {
            // console.log(data)
            this.commit('user/setToken', data)
            // 跳转
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
