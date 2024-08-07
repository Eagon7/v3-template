import request from '/@/service'

export const getList = () => {
  return request({
    url: 'http://38.147.190.229:48080/profile/upload/2024/08/02/01_20240802050353A001.png',
    method: 'get',
  })
}

export const getTopList = () => {
  return request({
    url: 'http://38.147.190.229:48080/cgt/navservice/list',
    method: 'get',
  })
}
export const getReourceList = () => {
  return request({
    url: 'http://38.147.190.229:48080/cgt/resourcesub/list',
    method: 'get',
  })
}
export const getTotal = () => {
  return request({
    url: 'http://38.147.190.229:48080/cgt/resourcesub/get_total',
    method: 'get',
  })
}
