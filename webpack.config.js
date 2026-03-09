const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/js/main.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/bundle.[contenthash].js', // Added hash for cache busting
            clean: true,
        },
        devServer: {
            static: './dist',
            hot: true,
            open: true,
            host: '0.0.0.0',
            port: 8081,
            allowedHosts: 'all',
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                    ],
                },
                {
                    test: /\.html$/i,
                    exclude: path.resolve(__dirname, 'src/index.html'),
                    loader: 'html-loader',
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/images/[name][ext]',
                    },
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/style.[contenthash].css', // Added hash for cache busting
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify: isProduction ? {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                } : false,
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'src/robots.txt', to: '' },
                    { from: 'src/sitemap.xml', to: '' },
                    { from: 'src/google285c8dba93d0e59c.html', to: '' },
                ],
            }),
        ],
    };
};
