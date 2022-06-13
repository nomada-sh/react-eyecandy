const path = require('path');
const fs = require('fs');
const { generateTheme } = require('../lib/themeUtils');

(async function () {
  try {
    const { defaultVariables, darkVariables, themeVariables } =
      await generateTheme({
        antDir: path.join(__dirname, '../../../node_modules/antd'),
        stylesDir: path.join(__dirname, '../src'),
      });

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
    console.log(`Generated ${ThemePath}`);

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
      console.log(`Generated ${filepath}`);
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
    process.exit(1);
  }
})();

function lessVarNameToJsVarName(lessVarName) {
  let jsVarName = lessVarName;
  // Remove @
  jsVarName = jsVarName.replace(/^@/, '');
  // Replace - with _
  jsVarName = jsVarName.replace(/-/g, '_');

  return jsVarName;
}

function lessValueToJsValue(lessValue) {
  let jsValue = lessValue;

  // Remove \n from value
  jsValue = jsValue.replace(/\n/g, '');

  return jsValue;
}
