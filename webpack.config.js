const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2));
const { resolve } = require('path');

console.log('argv: ',argv);

const _mode = argv.mode||'development'
const _mergeConfig = require(`./config/webpack.${_mode}.js`);


const webpackBaseConfig={
    entry:{
        main: resolve('src/index.tsx'),
    },
    output:{
        path: resolve(process.cwd(), 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.(ts|tsx)$/,
            exclude: /(node_modules)/,
            use: {
            // `.swcrc` can be used to configure swc
            loader: 'swc-loader',
            },
        },
        {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/i,
            type: 'asset/resource',
        }
        ],
    },
};
module.exports = merge.default(webpackBaseConfig, _mergeConfig);