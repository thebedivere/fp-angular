'use strict'

const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpack = require('html-webpack-plugin'),
    LiveReloadPlugin = require('webpack-livereload-plugin'),
    ChunkWebpack = webpack.optimize.CommonsChunkPlugin,
    rootDir = path.resolve(__dirname)

module.exports = {
    entry: {
        vendor: path.resolve(rootDir, 'src', 'vendor'),
        app: path.resolve(rootDir, 'src', 'app')
    },
    output: {
        path: path.resolve(rootDir, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        }),
        new LiveReloadPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }

}