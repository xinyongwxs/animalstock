var path = require('path');
const nodeExternals = require('webpack-node-externals');

console.log(path.resolve(__dirname, 'bff/src'));
console.log(path.resolve(__dirname, 'node_modules'));
console.log(nodeExternals());
module.exports = {
    target: "node",
    node: {
        __dirname: false,
        __filename: false
    },
    entry: path.resolve(__dirname, 'bff/src/www.js'),
    output: {
        path: path.resolve(__dirname, 'server'),
        filename: 'node_bundle.js'
    },
    // externals: [nodeExternals()],
    mode: 'production',
    module: {
        rules: [
            {
                test: /.js$/,
                include: [
                    path.resolve(__dirname, 'bff/src')
                ],
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};