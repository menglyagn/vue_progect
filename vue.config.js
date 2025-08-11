const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const env = process.env.NODE_ENV
console.log('env:', env)
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'h5',
      chunks: ['chunk-vendors', 'chunk-common', 'index', 'vant']
    }
  },
  devServer: {
    disableHostCheck: true,
    open: false,
    progress: true, //显示进度
    proxy: {
      '/message|/login|/jyOpenApi': {
        //带有key开头的地址都进入转发  获取公钥
        //要访问的跨域的api的域名
        target: 'http://aiww.natapp1.cc', //后端接口地址,记得配置后端允许跨域http://aiww.natapp1.cc
        secure: false, // 使用的是http协议则设置为false，https协议则设置为truehttp://172.29.151.155:8000
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: config => {
    if (env === 'develop') {
      // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      // config.plugins.push(new BundleAnalyzerPlugin()) //本地资源分析查看
    } else {
      const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
      if (['release', 'production'].includes(env)) {
        config.plugins.push(
          new UglifyJsPlugin({
            uglifyOptions: {
              output: {
                comments: false // 去掉注释
              },
              warnings: false,
              compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log'] //移除console
              }
            }
          })
        )
      }

      config.plugins.push(
        // Ignore all locale files of moment.js
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // 下面是下载的插件的配置
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), //匹配文件名
          // test: /\.js$|\.html$|\.css/, //匹配文件名
          threshold: 10240, //对超过10k的数据进行压缩
          minRatio: 0.8
        }),
        //当你在编写代码时，可能已经添加了许多代码分离点(code split point)来实现按需加载(load stuff on demand)。
        //在编译完之后，你可能会注意到有一些很小的 chunk - 这产生了大量 HTTP 请求开销。幸运的是，
        //此插件可以通过合并的方式，后处理你的 chunk，以减少请求数。
        //maxChunks：使用大于或等于 1 的值，来限制 chunk 的最大数量。使用 1 防止添加任何其他额外的 chunk，这是因为 entry/main chunk 也会包含在计数之中。
        //minChunkSize: 设置 chunk 的最小大小。
        new webpack.optimize.LimitChunkCountPlugin({
          minChunkSize: 100
        })
      )

      // config.optimization.splitChunks = {
      //   name: true, // 缓存组里面的filename生效，覆盖默认命名
      //   minSize: 60000, // 字节 引入的文件大于60kb才进行分割
      //   cacheGroups: {
      //     vant: {
      //       name: 'vant',
      //       test: /[\\/]node_modules[\\/]vant[\\/]/,
      //       priority: -10,
      //       chunks: 'initial'
      //     }
      //   }
      // }
    }
  },
  //本地图片加hash
  chainWebpack: config => {
    if (env !== 'develop') {
      //非开发环境下开启压缩代码
      config.optimization.minimize(true)
    }
    //关闭预加载
    config.plugins.delete('prefetch-index').delete('preload-index')
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg|ani|cur)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 1,
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'image/[name].[hash:6].[ext]'
          }
        }
      })
  },
  css: {
    extract: false,
    loaderOptions: {
      // 配置sass，使项目中能够使用sass定义的全局变量及mixin混合函数
      sass: {
        prependData: '@import "~@/assets/style/common.scss";'
      },
      // 移动端自适应(注意：写在行业标签中style中的px不会转换为rem！！！！！！)
      postcss: {
        plugins: [
          // postcss-pxtorem 与 postcss-plugin-px2rem 推荐使用后者（因为 postcss-plugin-px2rem 这个插件 配置选项上有 exclude 属性，它可以配置 是否对 某个文件夹下的所有css文件不进行从px到rem的转换。）
          require('postcss-plugin-px2rem')({
            rootValue: 37.5, // 换算基数， 默认100
            unitPrecision: 5, // 允许REM单位增长到的十进制数字。
            propWhiteList: [], // 默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            propBlackList: [], // 黑名单
            exclude: false, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            selectorBlackList: [], // 要忽略并保留为px的选择器
            ignoreIdentifier: false, //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
            minPixelValue: 1 // 设置要替换的最小像素值(1px会被转rem)。 默认 0
          })
        ]
      }
    }
  }
}
