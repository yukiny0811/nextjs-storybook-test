const loaders = (options = {}) => [
  { loader: 'style-loader' },
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      ...options,
    },
  },
  { loader: 'postcss-loader' },
];

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.reduce(
        (acc, cur) => [
          ...acc,
          ...cur.test.toString() === /\.css$/.toString()
            ? [
              { test: /\.module\.css$/, use: loaders({ modules: true }) },
              { test: /^.*(?<!\.module)\.css$/, use: loaders() },
            ]
            : [cur],
        ],
        [],
      ),
    },
  })
}