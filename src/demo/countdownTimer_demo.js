import { CountdownTimer } from '@gwiyeomgo/react-toolkit';
import React from 'react';
const App = () => {
  return (
    <div>
      <CountdownTimer targetTime={'20241224120000'} />
      <br />
      <br />
      <CountdownTimer targetTime={'20241224120000'} fontSize={20} />
    </div>
  );
};

export default App;
