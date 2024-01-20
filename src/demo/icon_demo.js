import { Icon } from '@gwiyeomgo/react-toolkit';

const App = () => {
  return (
    <>
      <Icon rotate={30} icon={'Download'} width={'20px'} height={'20px'} />
      <br />
      <Icon
        rotate={-30}
        icon={'Degrees360'}
        color="#1E90FF"
        width={'20px'}
        height={'20px'}
      />
      <br />
      <Icon
        icon={'MenuBurger'}
        color="#4169E1"
        width={'20px'}
        height={'20px'}
      />
      <br />
      <Icon icon={'Star'} color="#0000FF" width={'20px'} height={'20px'} />
      <br />
      <Icon
        rotate={-30}
        icon={'Cross'}
        color="#00008B"
        width={'20px'}
        height={'20px'}
      />
      <br />
      <Icon
        rotate={-30}
        icon={'Search'}
        color="pink"
        width={'20px'}
        height={'20px'}
      />
    </>
  );
};
export default App;
