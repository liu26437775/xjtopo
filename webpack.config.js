const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
	//编译模式
	mode: 'development', //development production
	module: {
		rules: [{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: '/\.js$/',
				exclude: /node_modules/,
		 	use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
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
		path: path.resolve(__dirname, "dist"),
		filename: "jxtopo.js",
		library: "jxtopo", // 在全局变量中增加一个library变量
		libraryTarget: "umd",
		environment: {
			// 是否使用箭头函数
			arrowFunction: false,
		},
	},
	devServer: {
		//....//
		static: {
			directory: path.join(__dirname, './'),
			watch: true
		},
		// 指定端口号:5000
		compress: true,
		port: 9000
	},
	target: ['web', 'es5']
}
