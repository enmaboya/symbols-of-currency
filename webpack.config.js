const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'symbols-of-currency.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        clean: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

};
