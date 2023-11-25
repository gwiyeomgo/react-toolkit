import { useState } from "react";
import { ToggleButton }from "@gwiyeomgo/react-toolkit";
import styled from "styled-components";

const BackGround = styled.div`
  height: 100vh;
  transition: background-color 300ms linear;
  padding: 1em;
  background-color: ${(props) => (props.darkMode ? "#222" : "white")};
`;

const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <BackGround darkMode={isToggled}>
      <ToggleButton
        id="test-switch"
        toggled={isToggled}
        onChange={(e) => setIsToggled(e.target.checked)}
      />
    </BackGround>
  );
}

export default App;