var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src',
        open: true
    },
    mode: 'development',
    watch: true,
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })]
}
    