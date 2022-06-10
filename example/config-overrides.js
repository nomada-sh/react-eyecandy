const { override, addWebpackPlugin } = require('customize-cra');
const path = require('path');
const addLessLoader = require('customize-cra-less-loader');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const { getLessVars } = require('antd-theme-generator');

const getLessColorVars = (filepath) => {
  const vars = getLessVars(filepath);
  return Object.entries(vars).reduce((acc, [key, value]) => {
    const include =
      /(color|-bg$|-background$|-background-light$|shadow|-border$|primary|blue|green|red|yellow|orange|pink|purple|cyan|magenta|volcano|gold|lime|geekblue)/.test(
        key
      );

    if (include) acc[key] = value;
    return acc;
  }, {});
};

const defaultVars = getLessColorVars(
  path.join(__dirname, '../node_modules/antd/lib/style/themes/default.less')
);
const darkVars = {
  ...getLessColorVars(
    path.join(__dirname, '../node_modules/antd/lib/style/themes/dark.less')
  ),
  '@primary-color': defaultVars['@primary-color'],
  '@picker-basic-cell-active-with-range-color': 'darken(@primary-color, 20%)',
};

const themeVariables = Array.from(
  new Set([...Object.keys(darkVars), ...Object.keys(defaultVars)])
);

const options = {
  antDir: path.join(__dirname, '../node_modules/antd'),
  stylesDir: path.join(__dirname, './src'),
  themeVariables,
  varFile: path.join(
    __dirname,
    '../node_modules/antd/lib/style/themes/default.less'
  ),
  outputFilePath: path.join(__dirname, './public/color.less'), // if provided, file will be created with generated less/styles
};

module.exports = override(
  addWebpackPlugin(new AntDesignThemePlugin(options)),
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
      },
    },
  })
);
