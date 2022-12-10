import { resolve } from 'path';

export const stories = [
  '../src/**/*.stories.mdx',
  '../src/**/*.stories.@(js|jsx|ts|tsx)',
];
export const addons = [
  '@storybook/addon-links',
  '@storybook/addon-essentials',
  'storybook-css-modules',
  '@storybook/addon-interactions',
  {
    name: '@storybook/addon-postcss',
    options: {
      cssLoaderOptions: {
        // When you have splitted your css over multiple files
        // and use @import('./other-styles.css')
        importLoaders: 1,
      },
      postcssLoaderOptions: {
        // When using postCSS 8
        implementation: require('postcss'),
      },
    },
  },
];
export const framework = '@storybook/react';
export async function webpackFinal(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve(__dirname, '../src/'),
  };
  return config;
}
export const core = {
  builder: '@storybook/builder-webpack5',
};
