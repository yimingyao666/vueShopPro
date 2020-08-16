import axios from 'axios'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export function request (config) {
  // 1.创建axios的实例
  const instance = axios.create({
    timeout: 5000
  })

  // 2.axios的拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(data => {
    return data
  }, err => {
    console.log(err)
  })

  // 发送请求
  return instance(config)
}
