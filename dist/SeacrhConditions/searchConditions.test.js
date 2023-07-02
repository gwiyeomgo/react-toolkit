"use strict";

var _react = require("@testing-library/react");
var _searchConditions = require("./searchConditions");
var TestPage = function TestPage(_ref) {
  var pageName = _ref.pageName;
  var _useSearchConditions = (0, _searchConditions.useSearchConditions)(),
    searchConditions = _useSearchConditions.searchConditions;
  console.log("pageName 페이지의 ", pageName);
  console.log("searchConditions", searchConditions);
};
describe("SearchConditionsProvider test", function () {
  test('SearchConditionsProvider 에 렌더링 완료 (성공)', function () {
    (0, _react.render)( /*#__PURE__*/React.createElement(_searchConditions.SearchConditionsProvider, {
      pageName: "페이지1"
    }, /*#__PURE__*/React.createElement(TestPage, {
      pageName: "페이지1"
    })));
  });
  it('SearchConditionsProvider 에 pageName 이 없는 경우 (실패)', function () {
    var originalError = console.error;
    console.error = jest.fn();
    expect(function () {
      (0, _react.render)( /*#__PURE__*/React.createElement(_searchConditions.SearchConditionsProvider, null, /*#__PURE__*/React.createElement(TestPage, {
        pageName: "페이지2"
      })));
    }).toThrow(new Error('SearchConditionsProvider 에 pageName props 값을 지정해 주세요.'));
    console.error = originalError;
  });
  test("useSearchConditions 를 SearchConditionsProvider 로 감싸지 않고 사용한 경우 (실패)", function () {
    var originalError = console.error;
    console.error = jest.fn();
    expect(function () {
      (0, _react.render)( /*#__PURE__*/React.createElement(TestPage, {
        pageName: "페이지3"
      }));
    }).toThrow(new Error('useSearchConditions 는 SearchConditionsProvider 내부에서 사용되어야 합니다'));
    console.error = originalError;
  });
});