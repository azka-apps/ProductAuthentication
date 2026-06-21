module.exports = {
  preset: '@react-native/jest-preset',
  moduleNameMapper: {
    '\\.(ttf)$': '<rootDir>/__mocks__/file-mock.js',
    '^@react-native-vector-icons/fontawesome6/static$':
      '<rootDir>/__mocks__/vector-icon-mock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native|@react-navigation)/)',
  ],
};
