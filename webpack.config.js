var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

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
            loaders: ['babel', 'jsx'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loaders: ['style', 'css', 'postcss']
        }, {
            test: /\.styl$/,
            loader: 'style!css!stylus!postcss'
        }]
    },
    postcss: function () {
        return [autoprefixer];
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
        // new HtmlWebpackPlugin
    ]
};

