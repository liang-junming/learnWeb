// path 是node.js一个核心模块，用于操作文件路径
const path = require('path');


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
    }
};
