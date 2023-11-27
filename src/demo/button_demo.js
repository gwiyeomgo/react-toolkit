import { Button, IconName, Icon } from '@gwiyeomgo/react-toolkit';
import React from 'react';

const App = () => {
  let color = '#ffff';
  let size = '20px';

  return (
    <div>
      <Button loading>한글로말해요한글로</Button>
      <br />
      <Button disabled={true}>한글로말해요한글로</Button>
      <Button disabled>한글로말해요한글로</Button>
      <br />
      <br />
      <Button
        icon={<Icon icon={IconName.Download} size={size} color={color} />}
      >
        한글로말해요한글로
      </Button>
      <Button
        loading
        icon={<Icon icon={IconName.Download} size={size} fill={color} />}
      >
        한글로말해요한글로
      </Button>
      <br />
      <br />
      <Button color="primary">한글로말해요</Button>
      <Button color="danger">한글로말해요</Button>
      <Button color="success">한글로말해요</Button>
      <Button color="warning">한글로말해요</Button>
      <br />
      <br />
      <Button type="outline">한글로말해요</Button>
      <Button type="outline" color="primary">
        한글로말해요
      </Button>
      <Button type="outline" color="danger">
        한글로말해요
      </Button>
      <Button type="outline" color="success">
        한글로말해요
      </Button>
      <Button type="outline" color="warning">
        한글로말해요
      </Button>
    </div>
  );
};

export default App;
