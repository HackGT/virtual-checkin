const path = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    target: "web",
    entry : __dirname + "/src/index.tsx",
    output: {
        path: __dirname + "/output",
        filename: "index.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json", ".css"],
        modules: [ path.resolve(__dirname, 'node_modules'), 'node_modules'],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: path.join(__dirname, 'node_modules'),
            include: [path.join(__dirname, '/src/')],
            options: { 
                configFile:  path.join(__dirname, 'tsconfig.json'),
            }
          }, { 
            enforce: "pre", test: /\.js$/, loader: "source-map-loader"
          }
        ]
    },
	plugins:[
		new HtmlWebpackPlugin({
			hash: true,
			template: './index.html',
			path: "./output/",
			filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
	devServer: {
		port: 8800,
		https: true,
        allowedHosts: ["localhost"]
    },
    bail: true,
    node: {
      __dirname: false,
      __filename: false
    }
};