import { CSVLink } from 'react-csv';
import React, { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Button, ButtonColors, ButtonType } from './button';

// Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
//https://sambalim.tistory.com/151

//eslint 에러:Component definition is missing display name for forwardRef
//forwardRef => React.forwardRef<HTMLInputElement>
//https://stackoverflow.com/questions/67992894/component-definition-is-missing-display-name-for-forwardref

// 부모 컴포넌트(ExcelDownloadButton)에서 자식 컴포넌트(CSVLink)의 DOM요소에  접근할 수 있게 하도록 forwardRef 사용

// TS2769: No overload matches this call.
// Type 'ForwardedRef<unknown>' is not assignable to type MLAnchorElement
//React.forwardRef 함수 ref의 타입을 명시
const ChildCSVLink = forwardRef((props: any, ref: any) => (
  <CSVLink {...props} ref={ref} />
));
/*https://fonts.google.com/noto/specimen/Noto+Sans+KR*/
/*일정 시간(duration)에 걸쳐 CSS 프로퍼티의 값이 변화 :transition*/

type ExcelDownloadButtonProps = {
  headers: { label: string; key: string }[];
  fileName: string;
  buttonName: string;
  fetchData: () => any;
  style?: React.CSSProperties;
  type?: ButtonType;
  color?: ButtonColors;
};
const ExcelDownloadButton = (props: ExcelDownloadButtonProps) => {
  const {
    headers,
    fileName,
    buttonName,
    fetchData,
    style,
    type,
    color,
    ...rest
  } = props;
  //https://stackoverflow.com/questions/65611889/how-to-add-ref-to-csvlink-in-react-typescript
  const csvLinkRef: ForwardedRef<
    CSVLink & HTMLAnchorElement & { link: HTMLAnchorElement }
  > = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //기존에는 생성된 데이터를 다운로드 해야 했다.
  //onClick 시점에 async로 데이터를 받아 오고 해당 데이터를 다운 받는 방법
  const handleExport = async () => {
    try {
      setLoading(true);
      const data = await fetchData();
      setData(data);
      setLoading(false);

      //옵셔널 체이닝(optional chaining)
      // csvLinkRef 존재? current확인 current있다면 link확인 link있다면 click()
      csvLinkRef?.current?.link.click();
    } catch (error) {
      console.log('Failed:', error);
    }
  };

  return (
    <div>
      <Button
        type={type}
        color={color}
        onClick={handleExport}
        style={{ ...style }}
        loading={loading}
        {...rest}
      >
        {buttonName}
      </Button>
      <ChildCSVLink
        data={data}
        headers={headers}
        filename={fileName}
        ref={csvLinkRef}
        target="_blank"
      />
    </div>
  );
};

//eslint 에러:  Component definition is missing display name
// displayName 지정
ChildCSVLink.displayName = 'ChildCSVLink';
ExcelDownloadButton.displayName = 'ExcelDownloadButton';
export { ChildCSVLink, ExcelDownloadButton, ExcelDownloadButtonProps };
