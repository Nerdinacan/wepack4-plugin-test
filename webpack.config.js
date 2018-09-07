const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
    mode: "production",
    // optimization: {
    //     minimize: false
    // },
    // entry: {
    //     vendor: [
    //         "libs/jquery/jquery.migrate",
    //         "libs/jquery/jquery.autocomplete",
    //         "libs/jquery/jquery.event.hover",
    //         "libs/jquery/jquery.event.drag",
    //         "libs/jquery/jquery.mousewheel",
    //         "libs/jquery/jquery.form",
    //         "libs/jquery/jquery.rating",
    //         "libs/jquery/select2",
    //         "libs/jquery.sparklines",
    //         "libs/jquery/jquery-ui",
    //         "libs/jquery/jstorage",
    //         "libs/jquery/jquery.complexify"
    //     ]
    // },
    // output: {
    //     filename: '[name].js'
    // },
    module: {
        rules: [
            // {
            //     test: require.resolve('jquery'),
            //     use: [{
            //         loader: 'expose-loader',
            //         options: 'jQuery'
            //     }, {
            //         loader: 'expose-loader',
            //         options: '$'
            //     }]
            // },
            // {
            //     test: require.resolve("jquery-autocomplete"),
            //     use: "imports-loader?$=>jquery"
            // },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};

module.exports = config;
