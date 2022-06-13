const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const { getVariables } = require('./themeUtils');

class EyecandyThemePlugin extends AntDesignThemePlugin {
  constructor(options) {
    const { themeVariables } = getVariables(options);

    options.themeVariables = themeVariables;

    super(options);
  }
}

module.exports = EyecandyThemePlugin;
