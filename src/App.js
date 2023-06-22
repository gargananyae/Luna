import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Landing/>} ></Route>
          <Route path = "/login" element={<Login/>} ></Route>

          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}


export default App;
