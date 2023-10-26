import { CountdownTimer } from "@gwiyeomgo/react-toolkit";

const App = () => {
  return (
    <div>
        <CountdownTimer
          type="daysSuffix"
          targetTime={20231224120000}
          suffixIndex={0}
          suffix="일"
        />
        <br />
        <CountdownTimer targetTime={20231224120000} />
        <br />
        <CountdownTimer targetTime={20231224120000} fontSize={40} />
        <br />
        <CountdownTimer targetTime={20231224120000} fontSize={20} />
        <br />
        <br />
        <div style={{ width: "200px" }}>
            <CountdownTimer
              keys={["hours", "minutes"]}
              targetTime={20231224120000}
              fontSize={20}
            />
            <br />
            <CountdownTimer
              keys={["hours", "minutes", "seconds"]}
              targetTime={20231224120000}
              fontSize={20}
            />
            <br />
            <CountdownTimer
              type="none"
              keys={["hours", "minutes", "seconds"]}
              targetTime={20231224120000}
              fontSize={20}
            />
        </div>
    </div>
  );
};

export default App;
