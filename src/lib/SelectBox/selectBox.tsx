import { Select } from '../../lib/SelectBox/select';
import React from 'react';

type SelectTriggerProps = {
  id: number;
  value: string;
  label: string;
};
const SelectBox = ({ data }: { data: SelectTriggerProps[] }) => {
  return (
    <div>
      <Select.Provider defaultValue={data[0].value}>
        <Select.Trigger data={data} />
        <Select.OptionList>
          {data.map((obj) => (
            <Select.Option key={obj.id} index={obj.id} value={obj.value}>
              {obj.label}
            </Select.Option>
          ))}
        </Select.OptionList>
      </Select.Provider>
    </div>
  );
};

export { SelectBox, SelectTriggerProps };
