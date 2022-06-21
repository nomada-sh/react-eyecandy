const { override } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader');
const path = require('path');
const { aliasWebpack } = require('react-app-alias-ex');

module.exports = override(
  // Fixes: Module not found: Error: Can't resolve '@nomada-sh/react-eyecandy' in 'example/src'.
  aliasWebpack({
    alias: {
      '@nomada-sh/react-eyecandy': path.resolve(
        '../packages/react-eyecandy/src'
      ),
    },
  }),
  // Fixes: TS6305: Output file 'packages/react-eyecandy/src/index.tsx'.
  // has not been built from source file 'packages/react-eyecandy/src/index.tsx'.
  // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/issues/525#issuecomment-1008331771
  (config) => {
    const forkTsPlugInInstances = config.plugins.find(
      (p) => p.constructor.name === 'ForkTsCheckerWebpackPlugin'
    );
    if (!forkTsPlugInInstances) return config;

    forkTsPlugInInstances.options.typescript.build = true;

    return config;
  },
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
      },
    },
  })
);
