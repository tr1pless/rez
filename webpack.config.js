const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        filename: '[name].bandle.[chunkhash].js',
        clean: true,
        path: path.resolve(__dirname, './build'),
        environment: {
            arrowFunction: false,
        }    
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            src: path.resolve(__dirname, 'src'),
            store: path.resolve(__dirname, 'src/store'),
        },
    },
    devServer: {
        compress: true,
        port: 8000,
        client: {
            logging: 'info',
        },
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]']
              },
            {
               test:  /\.(j|t)sx?$/,
               exclude: /node_module/,
               use: ['babel-loader'],
            }, 
            {
                test:  /\.s?css?$/i,
                exclude: /\.module\.s?css$/i,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'icss',
                                localIdentName: '[name]__[hash:base64:5]',
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test:  /\.module\.s?css$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 3,
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[hash:base64:5]',
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}