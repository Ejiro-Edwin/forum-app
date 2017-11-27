module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: false
        },
        sourceType: 'module'
    },
    globals: {
        "Vue": false
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'vue/html-indent': ['error', 4]
    }
}