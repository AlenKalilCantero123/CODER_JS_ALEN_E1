// webpack.config.js
const path = require('path');

module.exports = {
    entry: './scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 5500,
        proxy: {
            '/api': {
                target: 'https://student-api.up.railway.app',
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },
};
