const path = require('path'); // подключение стандартной библиотеки Node.js - path, что-то вроде разборщика путей
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // точка входа
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, './public/index.html'),
        }),
    ],
    output: {                // указание, куда собирать проект
        filename: 'main.js',   // файл, который генерируется и передается в браузер
        path: path.resolve(__dirname, './'), // название директория
    },
};