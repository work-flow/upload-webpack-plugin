import { QiuNiuUpload } from '@jomsou/upload'
import type { QINIU_OPTION_TYPE } from '@jomsou/upload'

class QiNiuUploadPlugin {
  option: QINIU_OPTION_TYPE
  constructor(option: QINIU_OPTION_TYPE) {
    this.option = option
  }
  apply(compiler: {
    hooks: {
      afterEmit: { tap: (name: string, callback: Function) => void }
    }
  }) {
    compiler.hooks.afterEmit.tap('qiniu-plugin', () => {
      process.nextTick(() => {
        new QiuNiuUpload(this.option)
      })
    })
  }
}

export default QiNiuUploadPlugin
