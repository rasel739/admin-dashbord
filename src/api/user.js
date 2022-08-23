import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/micro-cms/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/micro-cms/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/micro-cms/user/logout',
    method: 'post'
  })
}
