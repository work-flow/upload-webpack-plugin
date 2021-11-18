var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/index.ts
__export(exports, {
  AliOssUploadPlugin: () => alioss_default,
  QiNiuUploadPlugin: () => qiniu_default,
  UpyunUploadPlugin: () => upyun_default
});

// src/upyun.ts
var import_upload = __toModule(require("@jomsou/upload"));
var UpyunUploadPlugin = class {
  constructor(option) {
    this.option = option;
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tap("upyun-plugin", () => {
      new import_upload.UpyunUpload(this.option);
    });
  }
};
var upyun_default = UpyunUploadPlugin;

// src/qiniu.ts
var import_upload2 = __toModule(require("@jomsou/upload"));
var QiNiuUploadPlugin = class {
  constructor(option) {
    this.option = option;
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tap("qiniu-plugin", () => {
      new import_upload2.QiuNiuUpload(this.option);
    });
  }
};
var qiniu_default = QiNiuUploadPlugin;

// src/alioss.ts
var import_upload3 = __toModule(require("@jomsou/upload"));
var AliOssUploadPlugin = class {
  constructor(option) {
    this.option = option;
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tap("alioss-plugin", () => {
      new import_upload3.AliOssUpload(this.option);
    });
  }
};
var alioss_default = AliOssUploadPlugin;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AliOssUploadPlugin,
  QiNiuUploadPlugin,
  UpyunUploadPlugin
});
