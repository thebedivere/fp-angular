'use strict'

const HtmlWebpack = require( 'html-webpack-plugin' )
const path = require( 'path' )
const webpack = require( 'webpack' )
const LiveReloadPlugin = require( 'webpack-livereload-plugin' )
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin

const rootDir = path.resolve( __dirname )
let outputPath = path.resolve( __dirname, 'dist' )
let sourcePath = path.resolve( __dirname, 'src' )

module.exports = {
    context: sourcePath,
    entry: {
        vendor: path.join( sourcePath, 'vendor' ),
        polyfills: path.join( sourcePath, 'polyfills' ),
        main: path.join( sourcePath, 'main' )
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    presets: [ 'es2015' ]
                }
            },
            { loader: 'raw-loader', test: /\.(css|html)$/ },
            { loaders: [ 'to-string-loader', 'style-loader', 'css-loader', 'sass-loader' ], test: /\.scss$/ }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: outputPath,
        sourceMapFilename: '[name].bundle.map'
    },
    plugins: [
        new ChunkWebpack( {
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        } ),
        new HtmlWebpack( {
            filename: 'index.html',
            inject: 'body',
            template: path.join( sourcePath, 'index.html' )
        } ),
        new LiveReloadPlugin(),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        )
    ],
    resolve: {
        modules: [
            'node_modules',
            sourcePath
        ],
        extensions: [ '.ts', '.js' ],
        alias: {
            '@angular/common': '@angular/common/common.umd.js',
            '@angular/compiler': '@angular/compiler/compiler.umd.js',
            '@angular/core': '@angular/core/core.umd.js',
            '@angular/http': '@angular/http/http.umd.js',
            '@angular/platform-browser': '@angular/platform-browser/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': '@angular/platform-browser-dynamic/platform-browser-dynamic.umd.js',
            '@angular/router': '@angular/router/router.umd.js',
            '@angular/router-deprecated': '@angular/router-deprecated/router-deprecated.umd.js',
            '@angular/upgrade': '@angular/upgrade/upgrade.umd.js',
            'rxjs/Observable': 'rxjs/bundles/Rx.umd.min.js',
            'rxjs/add/operator/map': 'rxjs/bundles/Rx.umd.min.js',
            'rxjs/add/observable/fromEvent': 'rxjs/bundles/Rx.umd.min.js',
            rxjs: 'rxjs/bundles/Rx.umd.min.js'
        }
    }
}