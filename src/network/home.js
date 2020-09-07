import { request } from './request'

export function getHomeMultiData () {
  return request ({
    url: '/home/multidata'
  })
}

export function getHomeGoodsData () {
  return request ({
    url: '/home/goods'
  })
}
