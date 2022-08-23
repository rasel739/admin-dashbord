import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/micro-cms/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/micro-cms/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/micro-cms/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/micro-cms/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/micro-cms/role/${id}`,
    method: 'delete'
  })
}
