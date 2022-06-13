const path = require('path');
const {
  getLessVars,
  generateTheme: generateAntdTheme,
} = require('antd-theme-generator');

async function generateTheme(options) {
  const vars = getVariables(options);
  options.themeVariables = vars.themeVariables;

  await generateAntdTheme(options);

  return vars;
}

function getLessColorVars(filepath) {
  const vars = getLessVars(filepath);
  return Object.entries(vars).reduce((acc, [key, value]) => {
    const include =
      /(color|-bg$|-background$|-background-light$|shadow|-border$|primary|blue|green|red|yellow|orange|pink|purple|cyan|magenta|volcano|gold|lime|geekblue)/.test(
        key
      );

    if (include) acc[key] = value;
    return acc;
  }, {});
}

function getVariables(options) {
  const { antDir } = options;

  const defaultVariables = getLessColorVars(
    path.join(antDir, '/lib/style/themes/default.less')
  );

  const darkVariables = {
    ...getLessColorVars(path.join(antDir, '/lib/style/themes/dark.less')),
    '@primary-color': defaultVariables['@primary-color'],
    '@picker-basic-cell-active-with-range-color': 'darken(@primary-color, 20%)',
  };

  const themeVariables = Array.from(
    new Set([...Object.keys(darkVariables), ...Object.keys(defaultVariables)])
  );

  return {
    defaultVariables,
    darkVariables,
    themeVariables,
  }
}

module.exports = {
  generateTheme,
  getLessColorVars,
  getVariables,
};
