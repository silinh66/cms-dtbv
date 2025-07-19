const CracoLessPlugin = require("craco-less");

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#238c31" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
