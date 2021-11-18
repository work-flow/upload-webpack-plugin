const { UpyunUploadPlugin, QiNiuUploadPlugin, AliOssUploadPlugin } = require('@jomsou/upload-webpack-plugin')
const upyun = require('upyun')
const qiniu = require('qiniu')
const ALY = require('aliyun-sdk')
const OssUploadStream = require('aliyun-oss-upload-stream')
const path = require('path')

module.exports = {
  assetsDir: 'assets',
  configureWebpack: {
    plugins: [
      // new UpyunUploadPlugin({
      //   sdk: upyun,
      //   serviceName: process.env.jr_UPYUN_SERVICE || '',
      //   operatorName: process.env.jr_UPYUN_OPERATOR || '',
      //   password: process.env.jr_UPYUN_PASSWD || '',
      //   remoteFilePath: '/huodong/2021/11/test-webpack-plugins/assets',                                 
      //   filePath: path.resolve(process.cwd(), 'dist/assets'),
      //   openConfirm: false,   
      // })
      // new QiNiuUploadPlugin({
      //   sdk: qiniu,
      //   accessKey: process.env.QINIU_ACCESSKEY || '',
      //   secretKey: process.env.QINIU_SECRETKEY || '',
      //   bucket: 'zeditor',
      //   filePath: path.resolve(__dirname, './dist'),
      //   remoteFilePath: '/dist',
      //   openConfirm: false,
      // })
      new AliOssUploadPlugin({
        sdk: ALY,
        accessKeyId: process.env.ALIOSS_ACCESSKEYID || '',
        secretAccessKey: process.env.ALIOSS_SECRETACESSKEY || '',
        endpoint: process.env.ALIOSS_ENDPOINT || '',
        bucket: 'zeditor',
        openConfirm: false,
        filePath: path.resolve(__dirname, './dist'),
        ossUploadStream: OssUploadStream
      })   
    ]
  }
}