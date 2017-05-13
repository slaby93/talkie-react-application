const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
    context: path.join(__dirname, 'src/'),
    devtool: 'inline-source-map',
    entry: [
        'babel-polyfill',
        './index.js'
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {test: /(\.css|\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.svg/, loader: 'svg-url-loader'},
            {
                test: /\.(gif|png|jpe?g)$/i,
                loaders: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            bypassOnDebug: true,
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 4,
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 3,
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: './resources/image/login_background.jpg',
                to: './login_background.jpg'
            },
            {
                from: './resources/image/login_background_edited.jpg',
                to: './login_background_edited.jpg'
            },
            {
                from: './resources/image/crying_jordan.png',
                to: './crying_jordan.png'
            }
        ])
    ]
}
module.exports = config
