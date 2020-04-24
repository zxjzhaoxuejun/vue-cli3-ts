module.exports = {
  publicPath: "/", //部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir: "dist", //运行时生成的生产环境构建文件的目录(默认'dist'，构建之前会被清除)
  assetsDir: "", //静态资源目录(js、css、img、fonts)，相对outputDir的目录(默认'')
  indexPath: "index.html", //指定生成index.html的输出路径(相对outputDir)也可以是绝对路径
  lintOnSave: true, //是否开启ESlint（保存时检查）
  filenameHashing: true, //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
  productionSourceMap: false, //生产环境是否生成 sourceMap 文件
  css: {
    extract: true, //是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, //开启 CSS source maps
    loaderOptions: {}, //css预设器配置项
    requireModuleExtension: true, //启用CSS modules for all css / pre-processor files.
  },
  devServer: {
    //环境配置
    host: "localhost",
    port: 8080,
    https: false, //是否开启https
    hotOnly: false, //是否配置热更新
    open: true, //配置自动启动浏览器
    proxy: {
      //配置多个代理跨域(配置一个 proxy: 'http://localhost:4000' )
      "/api": {
        target: "http://127.0.0.1:3000",
        ws: true, //是否跨域
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  },
};
