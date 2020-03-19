module.exports = {
    plugins: ['@typescript-eslint'],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser"
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended",
        "typescript"
    ],
    rules: {
        "vue/html-indent": ["error",2,{"baseIndent": 1}],
        "vue/script-indent": ["error",2,{"baseIndent": 0}],
        '@typescript-eslint/indent': ['error', 2]
    },
}
