import { Input, useDebounce } from '@gwiyeomgo/react-toolkit';
import { useEffect, useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const debouncedInput = useDebounce(value, 500);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log(debouncedInput);
  }, [debouncedInput]);

  return (
    <div>
      <Input value={value} onChange={onChange} />
      <br />
      <Input style={{ color: 'blue' }} placeholder="문자를 입력하세요." />
      <br />
      <Input
        labelStyle={{ color: 'red' }}
        placeholder="문자를 입력하세요."
        label="라벨라벨라벨라벨라벨라벨라벨라"
      />
      <br />
      <Input
        labelPosition="inner"
        placeholder="문자를 입력하세요."
        label="라벨라벨라벨라벨"
      />
      <br />
    </div>
  );
};

export default App;
