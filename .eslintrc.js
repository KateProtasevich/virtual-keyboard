module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "script"
        
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "max-classes-per-file": ["error", 5],
        "no-plusplus": "off",
        "strict": ["error", "global"],
        "prefer-const": "off",
        "prefer-destructuring": ["error", {"object": true, "array": false}],
        "no-param-reassign": ["error", { "props": false }],
        "no-use-before-define": ["error", { "functions": false, "classes": true }]
    }
};