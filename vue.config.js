const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api/": {
        target: "http://localhost:3310/api/",
        pathRewrite: { '^/api': '' }
      }
    }
  }
})
