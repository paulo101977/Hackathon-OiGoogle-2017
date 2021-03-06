const path = require('path');
// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
    plugins: [
        // your custom plugins
    ],
    module: {
        rules: [
           {
            test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
            loaders: ['file-loader'],
            include: path.resolve(__dirname, '../')
            },
        ],
    },
    externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true
    }
};
