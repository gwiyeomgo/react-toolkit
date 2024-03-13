import { Button } from '../Buttton/button';
import { Input, InputRef } from '../Input/input';
import { useDebounce } from '../Util/hooks/useDebounce';
import { Icon } from '../Icon/icon';
import { ChangeEvent, CSSProperties, useState } from 'react';
import styled from 'styled-components';
import React from 'react';
import styles from '../styles.module.css';

export type InputWithDebounceProps = {
  value?: string;
  buttonStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  onClickSearch?: (text: string) => void;
  delay: number;
};
const Container = styled.div``;

const SearchInput = (props: InputWithDebounceProps) => {
  const { buttonStyle, inputStyle } = props;
  const [value, setValue] = useState('');
  const debouncedResult = useDebounce(value, props.delay);
  const ref = React.createRef<InputRef>();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // 검색 작업에 debouncedValue 사용
  const handleSearch = () => {
    props.onClickSearch?.(debouncedResult);

    setValue('');
    ref.current?.clear();
  };

  return (
    <Container className={styles.search}>
      <Input
        ref={ref}
        typeSearch={true}
        style={{
          ...inputStyle,
        }}
        value={value}
        onChange={onChange}
      />
      <Button
        color={'primary'}
        icon={
          <Icon
            icon={'Search'}
            width={'20px'}
            height={'20px'}
            color={'white'}
          />
        }
        onClick={handleSearch}
        isSearchButton={true}
        style={{
          ...buttonStyle,
        }}
      />
    </Container>
  );
};

export { SearchInput };
