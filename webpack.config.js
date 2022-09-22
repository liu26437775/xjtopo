const path = require('path')

module.exports = {
	//编译模式
	mode: 'development', //development production
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
		compress: true,
		// 指定端口号:5000
		port: 9000
	}
}
