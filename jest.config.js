//jest.config.ts
module.exports = {
  verbose: true,
  testEnvironment: 'jsdom', //테스트 환경 : Consider using the "jsdom" test environment.

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  //SyntaxError: Cannot use import statement outside a module
  preset: 'ts-jest', //trypeScript파일은 ts-jest에서 CommonJS구문으로 변환

  // testMatch: ["**/*.spec.[jt]s?(x)", "**/*.test.[jt]s?(x)"], //테스트 파일 위치
  testMatch: ['<rootDir>/src/**/*.test.tsx'], //타입스크립트만 테스트

  moduleNameMapper: {
    //  '^#/(.*)$': '<rootDir>/src/lib/$1',
    // '^#utils/(.*)$': '<rootDir>/src/lib/Util/$1',
    // '^#hooks/(.*)$': '<rootDir>/src/lib/Util/hooks/$1',
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },

  // Module file extensions for importing
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],

  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/src/demo_init_ts/'],
  //https://stackoverflow.com/questions/49263429/jest-gives-an-error-syntaxerror-unexpected-token-export
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)',
  ],
  //Module ts-jest in the transform option was not found.”
  transform: {
    '^.+\\.(ts|js)x?$': 'babel-jest',
  },
  //타이머 설정
  fakeTimers: {
    enableGlobally: false,
  },

  //테스트 커버리지
  collectCoverage: true,
  coverageDirectory: 'coverage',
  //커버리지 보고 형식 설정
  coverageReporters: ['text', 'lcov'],
  //커버리지 최소 기준 설정
  coverageThreshold: {
    './src/': {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
  //커버리지 수집 범위 설정
  //collectCoverageFrom: ['**/*.[jt]s?(x)', '!**/*.stories.[jt]s?(x)','!**/*.types.[jt]s?(x)'],
  collectCoverageFrom: ['src/lib/**/*.tsx'], // "**/*.[jt]s?(x)" 는  파일 확장자가 js, jsx, ts, 또는 tsx인 모든 파일을 의미
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], //  "<rootDir>/src/setupTests.js"
};
