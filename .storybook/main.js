const webpack = require("webpack");
const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: createWebpackConfig,
  managerWebpack: createWebpackConfig,
};

function createWebpackConfig(config) {
  // Transpile all node_modules under the @sumup/* namespace.
  config.module.rules = config.module.rules.map((rule) => {
    // Modify all rules that apply to story files.
    if (
      rule.test &&
      rule.test instanceof RegExp &&
      [".js", ".ts", ".tsx"].some((extension) => rule.test.test(extension))
    ) {
      return {
        ...rule,
        exclude: /node_modules\/(?!(@sumup|acorn-jsx)\/).*/,
      };
    }
    return rule;
  });
  // Expose environment variables to Storybook
  config.plugins = [
    ...config.plugins,
    new webpack.DefinePlugin({
      "process.env.UNSAFE_DISABLE_ACCESSIBILITY_ERRORS": JSON.stringify(
        process.env.UNSAFE_DISABLE_ACCESSIBILITY_ERRORS
      ),
    }),
  ];
  // Emotion 11
  config.resolve.alias = {
    ...config.resolve.alias,
    "@emotion/core": toPath("node_modules/@emotion/react"),
    "@emotion/styled/base": toPath("node_modules/@emotion/styled"),
    "@emotion/styled": toPath("node_modules/@emotion/styled"),
    "emotion-theming": toPath("node_modules/@emotion/react"),
  };

  return config;
}
