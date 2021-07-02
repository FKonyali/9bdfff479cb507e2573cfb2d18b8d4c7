
module.exports = {
    runtimeCompiler: true,
    publicPath: process.env.NODE_ENV === 'production' ?
        '/hotel/' :
        '/',
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
            args[0].title = 'Hotel'
            return args
        })
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}