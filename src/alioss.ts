import { AliOssUpload } from '@jomsou/upload'
import type { ALIOSS_OPTION_TYPE } from '@jomsou/upload'

class AliOssUploadPlugin {
  option: ALIOSS_OPTION_TYPE
  constructor(option: ALIOSS_OPTION_TYPE) {
    this.option = option
  }
  apply(compiler: {
    hooks: {
      afterEmit: { tap: (name: string, callback: Function) => void }
    }
  }) {
    compiler.hooks.afterEmit.tap('alioss-plugin', () => {
      process.nextTick(() => {
        new AliOssUpload(this.option)
      })
    })
  }
}

export default AliOssUploadPlugin
