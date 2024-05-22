import { Button } from '../Buttton/button';
import { Input } from '../Input/input';
import { useDebounce } from '../Util/hooks/useDebounce';
import { Icon } from '../Icon/icon';
import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';
import styles from '../styles.module.css';
const Container = styled.div``;
const SearchInput = (props) => {
  const { buttonStyle, inputStyle } = props;
  const [value, setValue] = useState('');
  const debouncedResult = useDebounce(value, props.delay);
  const ref = React.createRef();
  const onChange = (event) => {
    setValue(event.target.value);
  };
  // 검색 작업에 debouncedValue 사용
  const handleSearch = () => {
    var _a, _b;
    (_a = props.onClickSearch) === null || _a === void 0
      ? void 0
      : _a.call(props, debouncedResult);
    setValue('');
    (_b = ref.current) === null || _b === void 0 ? void 0 : _b.clear();
  };
  return React.createElement(
    Container,
    { className: styles.search },
    React.createElement(Input, {
      ref: ref,
      typeSearch: true,
      style: Object.assign({}, inputStyle),
      value: value,
      onChange: onChange,
    }),
    React.createElement(Button, {
      type: 'primary',
      icon: React.createElement(Icon, {
        icon: 'Search',
        width: '20px',
        height: '20px',
        color: 'white',
      }),
      onClick: handleSearch,
      isSearchButton: true,
      style: Object.assign({}, buttonStyle),
    }),
  );
};
export { SearchInput };
