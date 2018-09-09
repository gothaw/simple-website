const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                //sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    entry: {
          'bundle.js': [
              path.resolve(__dirname, 'src/js/index.js'),
              path.resolve(__dirname, 'src/js/modules/_home.js'),
              path.resolve(__dirname, 'src/js/modules/_careers.js'),
              path.resolve(__dirname, 'src/js/modules/_aboutUs.js'),
              path.resolve(__dirname, 'src/js/modules/_projects.js')
          ]
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: '/dist/js' // for webpack server
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader?url=false"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/main.css",
        })
    ]
};