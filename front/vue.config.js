module.exports = {
  outputDir: "./docs",
  publicPath: "",
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
