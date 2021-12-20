module.exports = {

    // assetsDir: 'static',
    // parallel: false,
     publicPath: './', //部署应用包时的基本 URL,
    // baseUrl: './',//让打包后（npm run build )的index.html去找相对路径下的css和js文件,在vue-cli.3.3版本后 baseUrl被废除了，因此这边要写成 publicPath。
    // outputDir: "dist", //打包目录
    // indexPath: "index.html",

    devServer: {
        proxy: {
            // 配置跨域
            '/zlk': {
                target: 'http://10.5.151.223:9500',//周
                // ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/zlk': ''
                }
            },
            '/lzy': {
                target: 'http://10.5.150.185:8085',//鲁
                // ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/lzy': ''
                }
            },
            '/lsr': {
                target: 'http://10.5.151.223:9503',//刘
                changOrigin: true,
                pathRewrite: {
                    '^/lsr': ''
                }
            },
            '/ljd': {
                target: 'http://10.5.151.223:9502',//李
                changOrigin: true,
                pathRewrite: {
                    '^/ljd': ''
                }
            },
        },
        disableHostCheck: true,
    },
    // 第三方插件配置

    pluginOptions: {
        // ...
    },

    //图标
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
};