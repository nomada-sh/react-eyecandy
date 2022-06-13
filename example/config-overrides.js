const { override, addWebpackPlugin } = require('customize-cra');
const path = require('path');
const addLessLoader = require('customize-cra-less-loader');
const EyecandyThemePlugin = require('@nomada-sh/react-eyecandy/lib/EyecandyThemePlugin');

const options = {
  antDir: path.join(__dirname, '../node_modules/antd'),
  stylesDir: path.join(__dirname, './src'),
  varFile: path.join(
    __dirname,
    '../node_modules/antd/lib/style/themes/default.less'
  ),
  outputFilePath: path.join(__dirname, './public/color.less'), // if provided, file will be created with generated less/styles
};

module.exports = override(
  addWebpackPlugin(new EyecandyThemePlugin(options)),
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
      },
    },
  })
);
