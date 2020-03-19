module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env'],
  plugins: ["transform-regenerator"],
  env: {
    "test": {
      "presets": [
        ["@babel/preset-env", { "targets": { "node": "12.16.1" }}]
      ]
    }
  }
}