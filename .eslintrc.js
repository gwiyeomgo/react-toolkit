module.exports = {
  settings: {
    react: {
      version: 'detect', //react 버전 지정
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true, //eslint 에러:module is not defined
    jest: true, //eslint 에러:jest is not defined
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', //typescript eslint :
    'plugin:react/recommended',
  ],
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
    'react/react-in-jsx-scope': 'off', //import React from 'react'; 표시 안해도 사용 가능
    'react/prop-types': 'off', //eslint 에러:missing in props validation react/prop-types,props의 타입체크를 처리에 proptypes가 아닌 typescript 사용
  },
};
