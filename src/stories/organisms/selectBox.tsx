import { Select } from '../../lib/Select/select';
import React from 'react';
const SelectBox = () => {
  return (
    <div>
      <Select.Provider defaultValue={'a'}>
        <Select.Trigger />
        <Select.OptionList>
          <Select.Option value="a" index={1}>
            Option 1
          </Select.Option>
          <Select.Option value="b" index={2}>
            Option 2
          </Select.Option>
          <Select.Option value="c" index={3}>
            Option 3
          </Select.Option>
        </Select.OptionList>
      </Select.Provider>
    </div>
  );
};

export default SelectBox;
