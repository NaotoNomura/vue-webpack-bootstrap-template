module.exports = {
  verbose: true,
  setupFiles: [
    "<rootDir>/jest.init.js"
  ],
  moduleFileExtensions: [
    "ts",
    "js",
    "json",
    "vue"
  ],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.(ts|js)$": "<rootDir>/node_modules/babel-jest"
  },
}