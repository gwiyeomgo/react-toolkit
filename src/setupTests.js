// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
//import '@testing-library/jest-dom';
//https://github.com/testing-library/jest-dom/discussions/400
//require('@testing-library/jest-dom');
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

jest.mock('heic2any', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue('blob:"test"'),
}));

// html2canvas를 프로미스를 반환하도록 모킹
jest.mock('html2canvas', () => ({
  ...jest.requireActual('html2canvas'),
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    //toDataURL과 관련된 부분은 브라우저 환경에서 작동하는 기능이기 때문에 JSDOM 환경에서는 어려움 -> 콘솔 경고 발생
    toDataURL: jest.fn().mockResolvedValue('mocked-image'),
  }),
}));

//imageCompression
jest.mock('browser-image-compression', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(''),
}));

jest.mock('react-daum-postcode', () => ({
  ...jest.requireActual('react-daum-postcode'),
  __esModule: true,
  default: jest.fn().mockResolvedValue(''),
}));

jest.mock('focus-trap-react', () => ({
  ...jest.requireActual('focus-trap-react'),
  __esModule: true,
  default: jest.fn().mockResolvedValue(''),
}));
//console.error
//Not implemented: window.scrollTo window
jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
