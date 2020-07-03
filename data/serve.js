/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const fs = require('fs')
const path = require('path')

const config = {
  PORT: 3000,
}

function getJsonFileList (dir) {
  if (!dir) {
    return []
  }
  try {
    const files = fs.readdirSync(dir) || []
    return files
    // return files.map(filePath => path.resolve(dir, filePath))
  } catch (e) {
    console.error(e)
    return []
  }
}

function serverJsonFile (files = []) {
  const app = express()
  const port = config.PORT || 3000
  files.forEach(fileName => {
    const filePath = path.resolve(__dirname, './mock', fileName)
    const apiPath = '/' + fileName.replace('.json', '').split('_').join('/')
    if (fs.statSync(filePath).isDirectory() || !fs.existsSync(filePath)) {
      return
    }
    app.get(apiPath, (req, res) => {
      // console.log(req)
      let data = {
        message: 'not found',
      }
      try {
        data = fs.readFileSync(filePath, 'utf8')
        data = JSON.parse(data)
      } catch (e) {
        data.error = e
      }
      res.json(data)
    })
  })
  app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
  })
}

function start () {
  const fileList = getJsonFileList(path.resolve(__dirname, './mock'))
  serverJsonFile(fileList)
}

start()
