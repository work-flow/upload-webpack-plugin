# upload-webpack-plugin

这是基于[@Zenquan/upload](https://github.com/Zenquan/upload)，实现上传静态资源至又拍云，七牛云，阿里oss等的webpack插件

## 特性
- 支持又拍云
- 支持七牛云
- 支持阿里oss

## 使用
### 安装
```bash
npm i @jomsou/upload-webpack-plugin -D

# 选择各个平台sdk安装
npm i upyun -D
npm i qiniu -D
npm i aliyun-sdk aliyun-oss-upload-stream -D
```
### 配置

#### 公用参数

| 参数           | 说明                         | 类型     | 默认值      |
| -------------- | ---------------------------- | -------- | ----------- |
| sdk          | 必填，各平台提供的sdk         | object |  |
| remoteFilePath | 非必填，表示服务器远程路径   | string   |             |
| filePath       | 必填，本地文件夹路径       | string   |             |
| openConfirm    | 非必填，是否打开上传前的提示 | boolean  | true        |
| success        | 非必填，上传成功回调         | Function | files => {} |
| error          | 非必填，上传失败回调         | Function | files => {} |



#### 又拍云
```js
// webpack.config.[t|j]s
const { UpyunUploadPlugin } = require('@jomsou/upload-webpack-plugin')
const upyun = require('upyun')
const path = require('path')

module.exports = {
  plugins: [
    new UpyunUploadPlugin({
      sdk: upyun,
      serviceName: 'xxx',
      operatorName: 'xxx',
      password: 'xxx',
      remoteFilePath: 'xxx',                                 
      filePath: 'xxx',
      openConfirm: false,   
    })
  ]
}
```

#### 七牛云
```js
// webpack.config.[t|j]s
const { QiNiuUploadPlugin } = require('@jomsou/upload-webpack-plugin')
const qiniu = require('qiniu')
const path = require('path')

module.exports = {
  plugins: [
    new QiNiuUploadPlugin({
      sdk: qiniu,
      accessKey: 'xxx',
      secretKey: 'xxx',
      bucket: 'xxx',
      filePath: 'xxx',
      remoteFilePath: 'xxx',
      openConfirm: false,
    })
  ]
}
```

### 阿里oss
```js
// webpack.config.[t|j]s
const { UpyunUploadPlugin } = require('@jomsou/upload-webpack-plugin')
const ALY = require('aliyun-sdk')
const OssUploadStream = require('aliyun-oss-upload-stream')
const path = require('path')

module.exports = {
  plugins: [
     new AliOssUploadPlugin({
      sdk: ALY,
      accessKeyId: 'xxx',
      secretAccessKey: 'xxx',
      endpoint: 'xxx',
      bucket: 'xxx',
      openConfirm: false,
      filePath: 'xxx',
      ossUploadStream: OssUploadStream
    })   
  ]
}      
```

## 日志

- [x] 2021.11.18 支持又拍云、七牛云、阿里oss

## 感谢

- [@shihao905/upload-upyun](https://github.com/shihao905/upload-upyun)
- [@egoist/ts-lib-starter](https://github.com/egoist/ts-lib-starter)
