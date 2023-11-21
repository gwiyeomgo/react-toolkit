import { Loading } from "@gwiyeomgo/react-toolkit";

const App = () => {
  return (
    <>
      <div
        style={{
          Width: "100%",
          height: "auto",
          display: " flex",
          backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px"
        }}
      >
        <Loading
          style={{
            width: "40px",
            height: "40px"
          }}
        />
      </div>
      <br />
      <div
        style={{
          Width: "100%",
          height: "auto",
          display: " flex",
          backgroundColor: "#87CEEB",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px"
        }}
      >
        <Loading
          style={{
            width: "30px",
            height: "30px",
            border: "4px solid #fff",
            borderBottomColor: "transparent"
          }}
        />
      </div>
      <br />
      <div
        style={{
          Width: "100%",
          height: "auto",
          display: " flex",
          backgroundColor: "#B6D7A8",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px"
        }}
      >
        <Loading
          style={{
            width: "40px",
            height: "40px",
            border: "8px dotted #fff"
          }}
        />
      </div>
      <br />
      <div
        style={{
          Width: "100%",
          height: "auto",
          display: " flex",
          backgroundColor: "#D1C9E7",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px"
        }}
      >
        <Loading
          style={{
            width: "40px",
            height: "40px",
            border: "4px solid transparent",
            borderBottomColor: "#fff"
          }}
        />
      </div>
      <br/>
      <div
        style={{
          Width: "100%",
          height: "auto",
          display: " flex",
          backgroundColor: "#FFD966",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px"
        }}
      >
        <Loading
          style={{
            width: "30px",
            height: "30px",
            border: "4px solid transparent",
            borderBottomColor: "red"
          }}
        />
      </div>
    </>
  );
};
export default App;
