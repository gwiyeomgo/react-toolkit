import { Loading } from "@gwiyeomgo/react-toolkit";

const App = () => {
  return (
    <>
      <div>
        <Loading type="default" size={30} speed={1} color={"pink"} />
        <br />
        <Loading
          type="default"
          size={30}
          style={{
            border: "8px dotted red",
          }}
        />
      </div>
      <div>
        <Loading type="line" size={20} />
        <Loading
          type="line"
          size={30}
          speed={5}
          colorPalette={["#00b8ff", "#0097e1", "#0876b8", "#004fa7"]}
        />
      </div>
    </>
  );
};
export default App;
