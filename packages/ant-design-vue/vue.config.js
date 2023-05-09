/*
 * @Author       : djkloop
 * @Date         : 2020-08-15 21:16:03
 * @LastEditors   : djkloop
 * @LastEditTime  : 2020-12-23 13:47:39
 * @Description  : 头部注释
 * @FilePath      : /daisy-form2/packages/iview/vue.config.js
 */
module.exports = {
    pages: {
        app: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    include: /node_modules/,
                    type: 'javascript/auto'
                },
            ]
        }
    }
}
