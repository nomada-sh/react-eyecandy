const path = require('path');
const fs = require('fs');
const { generateTheme, getLessVars } = require('antd-theme-generator');

const getLessColorVars = (filepath) => {
  const vars = getLessVars(filepath);
  return Object.entries(vars).reduce((acc, [key, value]) => {
    const include =
      /color/.test(key) ||
      /-bg$/.test(key) ||
      /-background$/.test(key) ||
      /-background-light$/.test(key) ||
      /shadow/.test(key) ||
      /-border$/.test(key) ||
      /primary/.test(key) ||
      /blue/.test(key) ||
      /green/.test(key) ||
      /red/.test(key) ||
      /yellow/.test(key) ||
      /orange/.test(key) ||
      /pink/.test(key) ||
      /purple/.test(key) ||
      /cyan/.test(key) ||
      // /black/.test(key) ||
      // /white/.test(key) ||
      /magenta/.test(key) ||
      /volcano/.test(key) ||
      /gold/.test(key) ||
      /lime/.test(key) ||
      /geekblue/.test(key);
    if (include) acc[key] = value;
    return acc;
  }, {});
};

const defaultVars = getLessColorVars(
  path.join(__dirname, '../../node_modules/antd/lib/style/themes/default.less')
);
const darkVars = {
  ...getLessColorVars(
    path.join(__dirname, '../../node_modules/antd/lib/style/themes/dark.less')
  ),
  '@primary-color': defaultVars['@primary-color'],
  '@picker-basic-cell-active-with-range-color': 'darken(@primary-color, 20%)',
};

const defaultVarsType =
  'export const DefaultTheme: Theme = {\n' +
  Object.entries(defaultVars).reduce((acc, [key, value]) => {
    let newKey = key;
    let newValue = value;
    // Remove @
    newKey = key.replace(/^@/, '');
    // Replace - with _
    newKey = newKey.replace(/-/g, '_');
    // Remove \n from value
    newValue = value.replace(/\n/g, '');

    acc += `${newKey}: \"${newValue}\",\n`;
    return acc;
  }, '') +
  '};\n';

fs.writeFileSync(path.join(__dirname, '../src/default.ts'), defaultVarsType);

const darkVarsType =
  'export const DarkTheme: Theme = {\n' +
  Object.entries(darkVars).reduce((acc, [key, value]) => {
    let newKey = key;
    let newValue = value;
    // Remove @
    newKey = key.replace(/^@/, '');
    // Replace - with _
    newKey = newKey.replace(/-/g, '_');
    // Remove \n from value
    newValue = value.replace(/\n/g, '');

    acc += `${newKey}: \"${newValue}\",\n`;
    return acc;
  }, '') +
  '};\n';

fs.writeFileSync(path.join(__dirname, '../src/dark.ts'), darkVarsType);

const themeVariables = Array.from(
  new Set([...Object.keys(darkVars), ...Object.keys(defaultVars)])
);

const themeVariablesJSON = themeVariables.reduce((acc, key) => {
  let newKey = key;
  // Remove @
  newKey = key.replace(/^@/, '');
  // Replace - with _
  newKey = newKey.replace(/-/g, '_');

  acc[newKey] = 'string';
  return acc;
}, {});

fs.writeFileSync(
  path.join(__dirname, '../src/themeVariables.json'),
  JSON.stringify(themeVariablesJSON, null, 2)
);

const options = {
  antDir: path.join(__dirname, '../../node_modules/antd'),
  stylesDir: path.join(__dirname, '../src'),
  themeVariables,
  outputFilePath: path.join(__dirname, '../public/color.less'), // if provided, file will be created with generated less/styles
};

generateTheme(options)
  .then((less) => {
    console.log('Theme generated successfully');
  })
  .catch((error) => {
    console.log('Error', error);
  });
