import { Select } from "@gwiyeomgo/react-toolkit";

const App = () => {
  return (
    <div>
      <Select.Provider defaultValue={"a"}>
        <Select.Trigger />
        <Select.OptionList>
          <Select.Option value="a">Option 1</Select.Option>
          <Select.Option value="b">Option 2</Select.Option>
          <Select.Option value="c">Option 3</Select.Option>
        </Select.OptionList>
      </Select.Provider>
    </div>
  );
};

export default App;
