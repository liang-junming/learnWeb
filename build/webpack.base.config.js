// path 是node.js一个核心模块，用于操作文件路径
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        /**
           path.resolve() 将一些列path合并成一个绝对路径
           __dirname node.js提供，指向被执行文件的绝对路径
           假如此文件 webpack.base.config.js 的绝对路径是/home/test
           path.resolve(__dirname, 'dist') 将返回 /home/test/dist
         */
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        /*
          生成一个默认的html模板
         */
        new HtmlWebpackPlugin({
            title: 'learning ts',
            // 也可使用 template 属性指定模版文件
            // template: './src/index.html',

            // 可使用 filename 属性指定输出文件名, 默认文件名为 index.html
            // filename: 'myIndex.html',
        })
    ]
};
