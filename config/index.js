import path from "path";

// 不同的客户端环境
const TARO_ENV = process.env.TARO_ENV;

const config = {
  projectName: "taro-express-mysql-travel",
  date: "2024-1-11",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: `dist/${TARO_ENV}`,
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  sass: {
    data: `$primaryColor: '#0066e6';`,
  },
  alias: {
    "@/components": path.resolve(__dirname, "..", "src/components"),
    "@/common": path.resolve(__dirname, "..", "src/common"),
    "@/api": path.resolve(__dirname, "..", "src/api"),
    "@/model": path.resolve(__dirname, "..", "src/model"),
  },
  framework: "react",
  compiler: {
    type: "webpack5",
    prebundle: {
      enable: false,
      force: true,
      exclude: ["taro-ui"],
    },
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    // commonChunks: ["runtime", "vendors", "taro", "lib"],
    // webpackChain(chain) {
    //   chain.merge({
    //     optimization: {
    //       splitChunks: {
    //         cacheGroups: {
    //           lib: {
    //             name: "lib",
    //             minChunks: 2,
    //             priority: 2,
    //           },
    //         },
    //       },
    //     },
    //   });
    // },
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    esnextModules: ["taro-ui", "taro-skeleton"],
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  rn: {
    appName: "taroDemo",
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
