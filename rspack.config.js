export default {
    entry: './src/index.js',
    output: {
        library: 'modern-module'
    },
    experiments: {
        outputModule: true
    },
    output: {
        chunkFormat: 'module',
        chunkLoading: 'import',
        module: true
    },
    externalsType: 'import',
    externals: ['vue', 'axios'],
    optimization: {
        minimize: false
    }
};