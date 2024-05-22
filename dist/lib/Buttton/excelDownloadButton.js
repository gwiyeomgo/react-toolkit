var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import { CSVLink } from 'react-csv';
import React, { forwardRef, useRef, useState } from 'react';
import { Button } from './button';
// Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
//https://sambalim.tistory.com/151
//eslint 에러:Component definition is missing display name for forwardRef
//forwardRef => React.forwardRef<HTMLInputElement>
//https://stackoverflow.com/questions/67992894/component-definition-is-missing-display-name-for-forwardref
// 부모 컴포넌트(ExcelDownloadButton)에서 자식 컴포넌트(CSVLink)의 DOM요소에  접근할 수 있게 하도록 forwardRef 사용
// TS2769: No overload matches this call.
// Type 'ForwardedRef<unknown>' is not assignable to type MLAnchorElement
//React.forwardRef 함수 ref의 타입을 명시
const ChildCSVLink = forwardRef((props, ref) =>
  React.createElement(CSVLink, Object.assign({}, props, { ref: ref })),
);
const ExcelDownloadButton = (props) => {
  const { headers, fileName, buttonName, fetchData, style, type } = props,
    rest = __rest(props, [
      'headers',
      'fileName',
      'buttonName',
      'fetchData',
      'style',
      'type',
    ]);
  //https://stackoverflow.com/questions/65611889/how-to-add-ref-to-csvlink-in-react-typescript
  const csvLinkRef = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  //기존에는 생성된 데이터를 다운로드 해야 했다.
  //onClick 시점에 async로 데이터를 받아 오고 해당 데이터를 다운 받는 방법
  const handleExport = () =>
    __awaiter(void 0, void 0, void 0, function* () {
      var _a;
      try {
        setLoading(true);
        const data = yield fetchData();
        setData(data);
        setLoading(false);
        //옵셔널 체이닝(optional chaining)
        // csvLinkRef 존재? current확인 current있다면 link확인 link있다면 click()
        (_a =
          csvLinkRef === null || csvLinkRef === void 0
            ? void 0
            : csvLinkRef.current) === null || _a === void 0
          ? void 0
          : _a.link.click();
      } catch (error) {
        console.log('Failed:', error);
      }
    });
  return React.createElement(
    'div',
    null,
    React.createElement(
      Button,
      Object.assign(
        {
          type: type,
          onClick: handleExport,
          style: Object.assign({}, style),
          loading: loading,
        },
        rest,
      ),
      buttonName,
    ),
    React.createElement(ChildCSVLink, {
      data: data,
      headers: headers,
      filename: fileName,
      ref: csvLinkRef,
      target: '_blank',
    }),
  );
};
//eslint 에러:  Component definition is missing display name
// displayName 지정
ChildCSVLink.displayName = 'ChildCSVLink';
ExcelDownloadButton.displayName = 'ExcelDownloadButton';
export { ChildCSVLink, ExcelDownloadButton };
