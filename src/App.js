import { Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navabar from './components/Navabar';

function App() {

  return (
    <div className="App">
      <Navabar/>
      <Outlet/>
    </div>
  );
}

export default App;
