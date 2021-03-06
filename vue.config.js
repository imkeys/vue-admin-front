module.exports = {
  transpileDependencies: [
    'vue-draggable-resizable-gorkys'
  ],
  css: {
    extract: {
      filename: 'static/css/[name].css?hash=[hash:8]',
      chunkFilename: 'static/css/[name].css?hash=[hash:8]'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.fallback.options.name = 'static/img/[name].[ext]?hash=[hash:8]'
        return options
      })
    config
      .when(process.env.NODE_ENV !== 'development',
        config => config.devtool('none')
      )
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
  },
  configureWebpack: {
    output: {
      filename: 'static/js/[name].js?hash=[hash:8]',
      chunkFilename: 'static/js/[name].js?hash=[hash:8]'
    },
    externals: {
      'vue': 'Vue',
      'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter',
      'axios': 'axios'
    },
    devServer: {
      disableHostCheck: true,
      port: '9001',
      open: 'http://localhost:9001/#/login',
      proxy: {
        '/': {
          target: 'http://localhost:9501',
          changeOrigin: true,
          pathRewrite: {
            '^/api/': '/api/'
          }
        }
      }
    }
  }
}
