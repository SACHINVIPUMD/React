import logo from './logo.svg';
import './App.css';
import StateObj from './Component/StateObj';
import PropsFunctional from './Component/PropsFunctional';
import ClassProps from './Component/PropsClass';
import PropsEg1 from './Component/PropsEg1';
import StateClassCom from './Component/StateClassCom';
import StateFunction from './Component/StateFunction';
import DynamicRendering from './Component/DynamicRendering';
import DefaultProps from './Component/DefaultProps';
import TwoWay from './Component/TwoWay';
import Parent from './Component/ParentChild';
function App() {
  return (
    <div className="App">
      <ClassProps college='skct' />
      <PropsFunctional name='sri' city='madurai'/>
      <PropsEg1 name='sri' city='madurai' />
      <StateClassCom />
      <StateFunction />
      <StateObj />
      <DynamicRendering />
      <DefaultProps name='md'/>
      <TwoWay />
      <Parent />
    </div>
  );
}
export default App;
