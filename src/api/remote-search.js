import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/micro-cms/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/micro-cms/transaction/list',
    method: 'get',
    params: query
  })
}
