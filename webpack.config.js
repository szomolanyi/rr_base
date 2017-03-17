var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: "./src/index.js",  //náš vstupní bod aplikace
    output: {
        filename: "bundle.js"   //výstupní balík všech zdrojových kódů
    },
    module: { //sem budeme zanedlouho vkládat transformační moduly
        loaders : [
            {
                test: /.css$/,
                loader: "style!css",
                exclude: "node_modules"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
                //loaders: ['eslint-loader', 'babel-loader?presets[]=es2015']
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
