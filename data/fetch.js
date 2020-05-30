/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const Axios = require('axios')
const { fetch: { routes = [], outputPath = 'data/mock', auth: { cookie = '', token = '' } } } = require('./config.js')

const baseURL = 'http://pro.crmeb.net/'

function axiosInterceptors (axios) {
  axios.interceptors.request.use(function (config) {
    console.log('REQ', config.method.toUpperCase(), config.url)
    return config
  })
  axios.interceptors.response.use(function (response) {
    if (!response.data) {
      console.log('RES', 'no response data')
    } else {
      console.log('RES', response.data.msg)
    }
    return response
  })
}

function getAxiosInstance () {
  const axios = Axios.create({
    baseURL,
    headers: {
      cookie,
      Accept: 'application/json, text/plain, */*',
      'Authori-zation': token,
    },
  })
  axiosInterceptors(axios)
  return axios
}

function writeResult ({ url, data }) {
  if (!url || !data) {
    return
  }
  const filename = url.split('?')[0].replace(/\//g, '_')
  const folder = outputPath
  const ext = '.json'
  const path = `${folder}/${filename}${ext}`
  fs.writeFileSync(path, JSON.stringify(data, null, 2), { encoding: 'utf-8' })
}

function start () {
  const axios = getAxiosInstance()
  const queue = routes.map(path => {
    return axios.get(path)
      .then(res => ({ url: res.config.url, data: res.data }))
      .then(res => {
        try {
          writeResult(res)
        } catch (err) {
          console.log(`${res.url}写入文件失败`, err.message)
        }
        return res
      })
  })
  Promise.all(queue).then(result => {
    console.log(`成功抓取 ${result.length} 条记录`)
  }).catch(e => {
    console.log('部分接口请求失败', e)
  })
}

start()
