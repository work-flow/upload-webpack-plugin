import { UPYUN_OPTION_TYPE, QINIU_OPTION_TYPE, ALIOSS_OPTION_TYPE } from '@jomsou/upload';

declare class UpyunUploadPlugin {
    option: UPYUN_OPTION_TYPE;
    constructor(option: UPYUN_OPTION_TYPE);
    apply(compiler: {
        hooks: {
            afterEmit: {
                tap: (name: string, callback: Function) => void;
            };
        };
    }): void;
}

declare class QiNiuUploadPlugin {
    option: QINIU_OPTION_TYPE;
    constructor(option: QINIU_OPTION_TYPE);
    apply(compiler: {
        hooks: {
            afterEmit: {
                tap: (name: string, callback: Function) => void;
            };
        };
    }): void;
}

declare class AliOssUploadPlugin {
    option: ALIOSS_OPTION_TYPE;
    constructor(option: ALIOSS_OPTION_TYPE);
    apply(compiler: {
        hooks: {
            afterEmit: {
                tap: (name: string, callback: Function) => void;
            };
        };
    }): void;
}

export { AliOssUploadPlugin, QiNiuUploadPlugin, UpyunUploadPlugin };
