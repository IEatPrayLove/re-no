const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(process.env.NODE_ENV,process.env.BASE_ENV)
module.exports = {
	entry: path.join(__dirname, '../src/main.tsx'), // 入口文件
	output: { // 文件出口配置
		filename: '[name].js',
		path: path.join(__dirname, '../dist'),
		clean: true,
		publicPath: '/', // 打包之后文件的公共前缀路径
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-react',
							'@babel/preset-typescript',
						]
					}
				}
			},
			{
				test: /\.(css|scss)$/,
				use:['style-loader', 'css-loader','postcss-loader','sass-loader'],
			}
		]
	},
	resolve: {
		extensions: [".ts",".tsx",".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html'),
			inject: true,
		}),
		new webpack.DefinePlugin({
			'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV),
		}),
	]
}