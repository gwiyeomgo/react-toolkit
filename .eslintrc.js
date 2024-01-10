module.exports = {
  settings: {
    react: {
      version: 'detect', //eslint 가 react 버전을 인식할 수 있도록 추가
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true, //eslint 에러:module is not defined
    jest: true, //eslint 에러:jest is not defined
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:storybook/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser', //typescript eslint :
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module', //eslint 에러:Parsing error: ‘import’ and ‘export’ may appear only with ‘sourceType: module’ (eslint 오류)
  },
  plugins: [
    '@typescript-eslint', //typescript eslint :
    'react',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': ['off'],
    'react/react-in-jsx-scope': 'off', //import React from 'react' 등 불필요한 import 문 제거
    'react/prop-types': 'off', //eslint 에러:missing in props validation react/prop-types,props의 타입체크를 처리에 proptypes가 아닌 typescript 사용
  },
};
