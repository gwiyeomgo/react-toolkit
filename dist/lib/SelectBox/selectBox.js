import { Select } from '../../lib/SelectBox/select';
import React from 'react';
const SelectBox = ({ data }) => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Select.Provider,
      { defaultValue: data[0].value },
      React.createElement(Select.Trigger, { data: data }),
      React.createElement(
        Select.OptionList,
        null,
        data.map((obj) =>
          React.createElement(
            Select.Option,
            { key: obj.id, index: obj.id, value: obj.value },
            obj.label,
          ),
        ),
      ),
    ),
  );
};
export { SelectBox };
