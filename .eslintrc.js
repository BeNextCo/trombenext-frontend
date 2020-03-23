module.exports = {
    'env': {
        'browser': true,
        'jest': true
    },
    'extends': [
        'eslint:recommended', 
        'plugin:react/recommended',
        'standard'
    ],
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'rules': {
        'react/prop-types': 0,
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    }
}