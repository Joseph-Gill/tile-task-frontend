module.exports = {
    root: true,
    "settings": {
        "react": {
            'version': 'detect'
        }
    },
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'no-var': 'error',
        'react/jsx-indent': ['error', 4],
        'react/jsx-no-literals': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/function-component-definition': ['error', {
            'namedComponents': 'arrow-function',
            'unnamedComponents': 'function-expression'
        }],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/jsx-max-depth': ['error', {'max': 3}],
        'react/button-has-type': 'off',
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-max-props-per-line': 'off'

    }
};
