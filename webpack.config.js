const path = require('path')
const outputPath = path.resolve(__dirname, 'build')

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: outputPath,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            {
                test: /\.md$/,
                use: 'raw-loader'
            }
        ]
    },
    devServer: {
        contentBase: outputPath
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    }
}
