import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 响应拦截器
service.interceptors.response.use(
  // 请求成功
  (response) => {
    const data = response.data

    // 需要判断当前请求是否成功
    if (data != null) {
      // 成功返回解析后的数据
      const message1 = '-登陆成功-'
      ElMessage.success(message1)
      return data
    } else {
      // 失败(请求成功,业务失败) 消息提示
      const message1 = '-请求成功,业务失败-'
      ElMessage.error(message1)
      return Promise.reject(new Error(message1))
    }
  },
  // 请求失败
  (error) => {
    const message2 = '-请求失败-'
    ElMessage.error(message2)
    return Promise.reject(error)
  }
)

export default service
