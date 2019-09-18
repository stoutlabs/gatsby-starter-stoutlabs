const path = require("path");

// setup absolute imports from /src, and make sure all references to react point to the installed version
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        react: path.resolve("./node_modules/react"),
      },
    },
  });
};
