module.exports = {
  chainWebpack: config => {
    config.module
            .rule("eslint")
            .use("eslint-loader")
            .options({
                fix: true
            });
  },
   devServer: {
    proxy: 'http://localhost:7001/'
  }
}
