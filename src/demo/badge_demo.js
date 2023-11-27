import { Badge } from '@gwiyeomgo/react-toolkit';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Badge count={2} moveBottom={30} moveLeft={30}>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#cccccc',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
          }}
        />
      </Badge>
      <br />
      <Badge count={22}>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#cccccc',
            width: '100px',
            height: '50px',
          }}
        />
      </Badge>
      <br />
      <Badge count={222}>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#cccccc',
            width: '100px',
            height: '100px',
          }}
        />
      </Badge>
      <br />
      <Badge>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#cccccc',
            width: '30px',
            height: '30px',
          }}
        />
      </Badge>
      <div
        style={{
          display: 'flex',
          columnGap: '8px',
          alignItems: 'center',
        }}
      >
        <Badge color={'blue'} />
        <Badge color={'pink'} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '8px',
          alignItems: 'flex-start',
        }}
      >
        <Badge color={'green'} text={'안녕'} />
        <Badge color={'yellow'} text={'안녕2'} />
        <Badge
          color={'yellow'}
          text={'안녕2'}
          textStyle={{ fontWeight: 'bold' }}
        />
      </div>
    </div>
  );
};
export default App;
