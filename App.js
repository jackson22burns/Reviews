import './App.css';
import { Productions } from './components/Productions';
import { Route, Routes } from "react-router";
import {Home} from './components/Home';
import {Manage} from './components/Manage';


function App() {
  return (
      <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Productions/>} />
        <Route path="/manage" element={<Manage/>} />
      </Routes>
      </div>
  );
}

export default App;
