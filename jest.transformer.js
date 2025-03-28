const babelJest = require('babel-jest').default;

const customTransformer = {
  process(src, filename, config, options) {
    const babelConfig = {
      presets: ['module:metro-react-native-babel-preset'],
      babelrc: false,
      configFile: false,
    };
    
    return babelJest.createTransformer(babelConfig).process(src, filename, config, options);
  },
};

module.exports = customTransformer; 