import { CountdownTimer } from "@gwiyeomgo/react-toolkit";

const App = () => {
  return (
    <div>
        <CountdownTimer
          type={"suffix"}
          targetTime={20231224120000}
          suffixList={['일']}
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
              keyList={["hours", "minutes"]}
              targetTime={20231224120000}
              fontSize={20}
            />
            <br />
            <CountdownTimer
              keyList={["hours", "minutes", "seconds"]}
              targetTime={20231224120000}
              fontSize={20}
            />
            <br />
            <CountdownTimer
              type="none"
              keyList={["hours", "minutes", "seconds"]}
              targetTime={20231224120000}
              fontSize={20}
            />
        </div>
    </div>
  );
};

export default App;
