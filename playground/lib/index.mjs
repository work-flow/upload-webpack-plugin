// src/upyun.ts
import { UpyunUpload } from "@jomsou/upload";
var UpyunUploadPlugin = class {
  constructor(option) {
    this.option = option;
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tap("upyun-plugin", () => {
      new UpyunUpload(this.option);
    });
  }
};
var upyun_default = UpyunUploadPlugin;

// src/qiniu.ts
import { QiuNiuUpload } from "@jomsou/upload";
var QiNiuUploadPlugin = class {
  constructor(option) {
    this.option = option;
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tap("qiniu-plugin", () => {
      new QiuNiuUpload(this.option);
    });
  }
};
var qiniu_default = QiNiuUploadPlugin;

// src/alioss.ts
import { AliOssUpload } from "@jomsou/upload";
var AliOssUploadPlugin = class {
  constructor(option) {
    this.option = option;
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tap("alioss-plugin", () => {
      new AliOssUpload(this.option);
    });
  }
};
var alioss_default = AliOssUploadPlugin;
export {
  alioss_default as AliOssUploadPlugin,
  qiniu_default as QiNiuUploadPlugin,
  upyun_default as UpyunUploadPlugin
};
