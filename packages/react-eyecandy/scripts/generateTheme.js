const path = require('path');
const fs = require('fs');
const { getLessVars, generateTheme } = require('antd-theme-generator');

const getLessColorVars = filepath => {
  const vars = getLessVars(filepath);
  return Object.entries(vars).reduce((acc, [key, value]) => {
    const include = /(color|-bg$|-background$|-background-light$|shadow|-border$|primary|blue|green|red|yellow|orange|pink|purple|cyan|magenta|volcano|gold|lime|geekblue)/.test(
      key
    );

    if (include) acc[key] = value;
    return acc;
  }, {});
};

const defaultVariables = getLessColorVars(
  path.join(
    __dirname,
    '../../../node_modules/antd/lib/style/themes/default.less'
  )
);
const darkVariables = {
  ...getLessColorVars(
    path.join(
      __dirname,
      '../../../node_modules/antd/lib/style/themes/dark.less'
    )
  ),
  '@primary-color': defaultVariables['@primary-color'],
  '@picker-basic-cell-active-with-range-color': 'darken(@primary-color, 20%)',
};

const themeVariables = Array.from(
  new Set([...Object.keys(darkVariables), ...Object.keys(defaultVariables)])
);

const options = {
  antDir: path.join(__dirname, '../../../node_modules/antd'),
  stylesDir: path.join(__dirname, '../src'),
  themeVariables,
};

(async () => {
  try {
    await generateTheme(options);

    const lessVarNameToJsVarName = lessVarName => {
      let jsVarName = lessVarName;
      // Remove @
      jsVarName = jsVarName.replace(/^@/, '');
      // Replace - with _
      jsVarName = jsVarName.replace(/-/g, '_');

      return jsVarName;
    };

    const lessValueToJsValue = lessValue => {
      let jsValue = lessValue;

      // Remove \n from value
      jsValue = jsValue.replace(/\n/g, '');

      return jsValue;
    };

    // Generate Theme.ts
    const ThemeContent =
      'export interface Theme {\n' +
      themeVariables.reduce((acc, key) => {
        acc += `  ${lessVarNameToJsVarName(key)}: string;\n`;
        return acc;
      }, '') +
      '}\n';

    const ThemePath = path.join(__dirname, '../src/theme/types/Theme.ts');
    fs.writeFileSync(ThemePath, ThemeContent);

    const createTheme = ({ variables, name }) => {
      const content =
        "import { Theme } from './types/Theme';\n\n" +
        `export const ${name}: Partial<Theme> = {\n` +
        Object.entries(variables).reduce((acc, [key, value]) => {
          const newValue = lessValueToJsValue(value);
          const quoutes =
            newValue.includes("'") || newValue.includes('`') ? '"' : "'";
          acc += `  ${lessVarNameToJsVarName(
            key
          )}: ${quoutes}${newValue}${quoutes},\n`;
          return acc;
        }, '') +
        '}\n';

      const filepath = path.join(__dirname, `../src/theme/${name}.ts`);
      fs.writeFileSync(filepath, content);
    };

    // Generate DefaultTheme.ts
    createTheme({
      variables: defaultVariables,
      name: 'DefaultTheme',
    });

    // Generate DarkTheme.ts
    createTheme({
      variables: darkVariables,
      name: 'DarkTheme',
    });
  } catch (e) {
    console.error(e);
  }
})();
