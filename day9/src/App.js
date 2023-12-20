import logo from './logo.svg';
import PutAxios from './Axios/PutAxios';
import './App.css';
import PostAxios from './Axios/AxiosPost';
import GetAxios from './Axios/GetAxios';
function App() {
  return (
    <div className="App">
      <GetAxios />
      <PostAxios />
      <PutAxios />
    </div>
  );
}

export default App;
