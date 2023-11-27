import { Icon, IconName } from '@gwiyeomgo/react-toolkit';

const App = () => {
  return (
    <>
      <Icon rotate={30} icon={IconName.Download} size={20} />
      <br />
      <Icon rotate={-30} icon={IconName.Degrees360} color="#1E90FF" size={30} />
      <br />
      <Icon icon={IconName.MenuBurger} color="#4169E1" size={40} />
      <br />
      <Icon icon={IconName.Star} color="#0000FF" size={50} />
      <br />
      <Icon rotate={-30} icon={IconName.Cross} color="#00008B" size={60} />
      <br />
      <Icon rotate={-30} icon={IconName.Cross} color="#00008B" size={60} />
    </>
  );
};
export default App;
