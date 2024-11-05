const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const path = require("node:path");

module.exports = merge(baseConfig, {
	mode: 'development',
	devtool:'eval-cheap-module-source-map', // 源码调试模式
	devServer:{
		port:3000,
		compress:false, // 是否开启gzip压缩
		hot:true,
		historyApiFallback:true, // history路由404问题
		static:{
			directory: path.join(__dirname, 'static'),
		}
	}
})