const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
  configureWebpack: {
    plugins: [
      new (require("webpack").DefinePlugin)({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      }),
    ],
  },
});
