export default {
    entry: './src/index.js',
    experiments: {
        outputModule: true
    },
    output: {
        chunkFormat: 'module',
        chunkLoading: 'import',
        module: true
    },
    externalsType: 'module-import',
    externals: ['vue', 'axios'],
    optimization: {
        minimize: false
    }
};