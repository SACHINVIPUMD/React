// import logo from './logo.svg';
import './App.css';
import Keylist from './Components/KeyList';
import List from './Components/List';
import ListObjs from './Components/ListObjs';
import ListObjsNoDisp from './Components/ListObjsNoDisp';
import BasicButtons from './Components/materialui';
import SvgIconChildren from './Components/icon';
import SvgIconsSize from './Components/icon';
function App() {
  return (
    <div>
      <List />
      <Keylist />
      <ListObjs />
      <ListObjsNoDisp />
      <BasicButtons />
      <SvgIconChildren />
      <SvgIconsSize />
    </div>
  );
}

export default App;
