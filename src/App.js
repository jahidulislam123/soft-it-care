import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      {/* 
      <Login></Login> */}
      <Navbar></Navbar>

        <Routes>
           <Route path='/' element={<Login></Login>}></Route>
           <Route path='/home' element={<Home></Home>}></Route>
          
        </Routes>

    </div>
  );
}

export default App;
