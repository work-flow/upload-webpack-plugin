import { UpyunUpload } from '@jomsou/upload'
import type { UPYUN_OPTION_TYPE } from '@jomsou/upload'

class UpyunUploadPlugin {
  option: UPYUN_OPTION_TYPE
  constructor(option: UPYUN_OPTION_TYPE) {
    this.option = option
  }
  apply(compiler: {
    hooks: {
      afterEmit: { tap: (name: string, callback: Function) => void }
    }
  }) {
    compiler.hooks.afterEmit.tap('upyun-plugin', () => {
      new UpyunUpload(this.option)
    })
  }
}

export default UpyunUploadPlugin
