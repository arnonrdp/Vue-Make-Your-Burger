module.exports = {
  devServer: {
    proxy: {
      "/db/*": {
        target: "http://localhost:3000",
        secure: false,
        changeOrigin: true
      }
    }
  }
}