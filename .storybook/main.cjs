const {
  scss: preprocessScss
} = require('svelte-preprocess');
module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],
  staticDirs: ['../static'],
  "framework": {
    name: "@storybook/sveltekit",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  docs: {
    autodocs: true
  }
};