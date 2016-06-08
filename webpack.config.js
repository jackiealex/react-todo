var webpack = require('webpack');

var _OUTPUT_ = 'build';

module.exports = {
	context:  __dirname + '/src',
    entry: {
        app: "./app.js"
    },
    resolve: {
        alias: {
            // jquery: "./static/js/jquery.js"
        }
    },
    output: {
        path: _OUTPUT_,
        filename: "[name].js",
        chunkFilename: '[name].chunk.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader', 'jsx'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
        // new HtmlWebpackPlugin
    ]
};

