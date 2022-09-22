const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
	//编译模式
	mode: 'production', //development production
	module: {
		rules: [{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader']
		}]
	},
	plugins: [new HtmlWebpackPlugin({
			template: './index.html', //需要放打包文件的html模板路径
			filename: 'index.html' //打包完成后的这个模板叫什么名字
		}),
		new MiniCssExtractPlugin({
			filename: 'index_[contenthash].css'
		})
	],
	entry: path.join(__dirname, './src/index.js'),
	output: {
		path: path.join(__dirname, './dist'), //输出文件的存放路径
		filename: 'bundle.js' //输出文件的名称
	},
	devServer: {
		//....//
		static: {
			directory: path.join(__dirname, './'),
			watch: true
		},
		// 启动gzip压缩，提高效率
		compress: false,
		// 指定端口号:5000
		port: 9000
	}
}
